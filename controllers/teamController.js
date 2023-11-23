// teamController.js
const Team = require("../model/teamModel");
const User = require("../model/userModel");

// Create a new team
exports.createteam = async (req, res, next) => {
  try {
    const {
      team_name: teamName,
      team_description: teamDescription,
      users,
    } = req.body;

    if (!teamName) {
      return res.status(400).json({ error: "Team name is required" });
    }

    if (!users || !Array.isArray(users)) {
      return res
        .status(400)
        .json({ error: "Invalid or missing 'users' array" });
    }

    const newTeam = await Team.create({
      users,
      team_name: teamName,
      team_description: teamDescription,
    });

    res.status(201).json({ status: "success", data: newTeam });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.getAllTeams = async (req, res, next) => {
  try {
    const teams = await Team.find();

    res.status(200).json({ status: "success", data: teams });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
