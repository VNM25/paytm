const express = require("express");
const { Account } = require("../db");
const { default: mongoose } = require("mongoose");
const { z } = require("zod");

const router = express.Router();

const balanceSchema = z.object({
  to: z.string(),
  amount: z.number()
})

router.get("/", (req, res) => {
  res.send("Hello from accounts!");
});

router.get("/balance", async (req, res) => {
  const accountDetail = await Account.findOne({ userId: req.userId });
  res.status(201).json({ balance: (accountDetail.balance / 100).toFixed(2) });
});

router.post("/transfer", async (req, res) => {
  const session = await mongoose.startSession();

  session.startTransaction();

  const valid = balanceSchema.safeParse(req.body)

  if(!valid){
    await session.abortTransaction();
    return res.status(400).json({ message: "Incorrect body in request" });
  }

  const { to, amount } = req.body;

  const sender = await Account.findOne({ userId: req.userId });
  if (!sender || sender.balance < amount * 100) {

    await session.abortTransaction();
    return res.status(400).json({ message: "Insufficient balance" });
  }

  const reciever = await Account.findOne({ userId: to });
  if (!reciever) {
    await session.abortTransaction();
    return res.status(400).json({ message: "Invalid Account" });
  }

  await Account.updateOne(
    { userId: req.userId },
    {
      $inc: {
        balance: -amount * 100,
      },
    }
  ).session(session);

  await Account.updateOne(
    { userId: to },
    {
      $inc: {
        balance: amount * 100,
      },
    }
  ).session(session);
  console.log("completed");

  await session.commitTransaction();

  session.endSession();

  res.json({ message: "Transfer Successful" });
});

module.exports = router;
