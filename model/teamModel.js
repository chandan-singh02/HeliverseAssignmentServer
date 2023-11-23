const mongoose = require("mongoose");
// const addUser = require("./adduserModel");
const teamSchema = new mongoose.Schema({
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  team_name: {
    type: String,
    required: true,
  },
  team_description: {
    type: String,
    default: "we are not a babysitter",
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
