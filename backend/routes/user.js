const express = require("express");
const z = require("zod");
const {users, Account} = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");
const router = express.Router();

const signupSchema = z.object({
  username: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  firstName: z
    .string()
    .max(50, { message: "First name must be less than 50 characters" }),
  lastName: z
    .string()
    .max(50, { message: "Last name must be less than 50 characters" }),
});

const signinSchema = z.object({
  username: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

const updateSchema = z.object({
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .optional(),
  firstName: z
    .string()
    .max(50, { message: "First name must be less than 50 characters" })
    .optional(),
  lastName: z
    .string()
    .max(50, { message: "Last name must be less than 50 characters" })
    .optional(),
});

router.post("/signup", async (req, res) => {
  const result = signupSchema.safeParse(req.body);
  if (!result.success) {
    return res
      .status(400)
      .json({ message: "Invalid request", ...result.error.issues });
  }

  const existingUser = await users.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken/Incorrect inputs",
    });
  }

  users.create(result.data).then(
    (user) => {

      const userId = user._id
      Account.create({
        userId,
        balance: parseInt((1 + Math.random() * 10000) * 100)
      })
      const token = jwt.sign({ id: user._id }, JWT_SECRET);
      res
        .status(201)
        .json({ message: "User created successfully", token: token });
    },
    (err) => {
      res.status(500).json({ message: "Error creating user", ...err });
    }
  );
});

router.post("/signin", async (req, res) => {
  const result = signinSchema.safeParse(req.body);
  if (!result.success) {
    return res.json({ message: "Invalid Request", ...result.error.issues });
  }

  const user = await users.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  if (!user) {
    return res
      .status(401)
      .json({ message: "Invalid Credentials/ User Not Found" });
  }

  const token = jwt.sign({ id: user._id }, JWT_SECRET);
  res.status(201).json({ token: token });
});

router.put("/", authMiddleware, async (req, res) => {
  // console.log(req.body, req.userId);
  const valid = updateSchema.safeParse(req.body);
  console.log("🚀 ~ router.put ~ valid:", valid.success);
  if (!valid.success) {
    res.status(411).json({
      message: "Error while updating information/ Invalid Values",
    });
  }
  await users.updateOne(
    {
      _id: req.userId,
    },
    req.body
  );
  res.status(201).json({
    message: "Successfully updated details",
  });
});

router.get("/bulk", authMiddleware, async (req, res) => {
  console.log("🚀 ~ router.get ~ req:", req.query.filter)
  const filter = req.query.filter || "";
  console.log("🚀 ~ router.get ~ filter:", filter)
  users
    .find({
      $or: [
        { 'firstName': {$regex: filter}},
        { 'lastName': {$regex: filter}}
      ]
    })
    .then((userList) => {
      res.status(201).json({
        users: userList.map((user, idx) => {
          return {
            index: idx,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
          }
        })
      });
    })
    .catch((error) => {
      res.status(401).json({ message: "error while fetching users", ...error });
    });
});

module.exports = router;
