const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const valid = jwt.verify(token, JWT_SECRET);
    req.userId = valid.id;
    console.log("user verified");
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = {
  authMiddleware,
};
