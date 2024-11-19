const express = require("express");
const { Account } = require("../db");
const { default: mongoose } = require("mongoose");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from accounts!");
});

router.get("/balance", async (req, res) => {
  console.log("🚀 ~ router.get ~ req:", req.userId);
  const accountDetail = await Account.findOne({ userId: req.userId });
  res.status(201).json({ balance: (accountDetail.balance / 100).toFixed(2) });
});

router.post("/transfer", async (req, res) => {
  const session = await mongoose.startSession();

  session.startTransaction();

  // console.log("🚀 ~ router.post ~ req:", req)
  const { to, amount } = req.body;
  console.log("🚀 ~ router.post ~ toUserId:", to, amount);

  const sender = await Account.findOne({ userId: req.userId });
  if (!sender || sender.balance < amount * 100) {
    console.log("inside less balance");

    await session.abortTransaction();
    return res.status(400).json({ message: "Insufficient balance" });
  }

  const reciever = await Account.findOne({ userId: to });
  if (!reciever) {
    await session.abortTransaction();
    return res.status(400).json({ message: "Invalid Account" });
  }
  console.log("accounts verified");

  await Account.updateOne(
    { userId: req.userId },
    {
      $inc: {
        balance: -amount * 100,
      },
    }
  ).session(session);
  console.log("balance reduced");

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
