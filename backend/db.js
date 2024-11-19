const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://vansamagrawal:AL3Lh5vO0bfiLkJE@paytmcluster0.y1ujj.mongodb.net/?retryWrites=true&w=majority&appName=paytmCluster0"
);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  balance: {
    type: Number,
    required: true
  }
})

const users = mongoose.model("users", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = {
  users,
  Account
};
