const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const accountRouter = require("./account")
const { authMiddleware } = require("../middleware");

router.use("/user", userRouter);
router.use(authMiddleware)
router.use("/account", accountRouter);




router.get("/", (req, res) => {
  res.json('hi there');
});

module.exports = router;
