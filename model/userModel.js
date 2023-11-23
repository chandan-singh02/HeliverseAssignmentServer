const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "please tell your first name"],
  },
  last_name: {
    type: String,
    required: [true, "please tell your last name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "please provide your email"],
    lowercase: true,
  },
  gender: {
    type: String,
  },
  avatar: {
    type: String,
    default:
      "https://th.bing.com/th/id/OIP.Sr4fxChDzgG6T-SG4zCS8wHaHa?rs=1&pid=ImgDetMain",
  },
  domain: {
    type: String,
  },
  available: {
    type: String,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
