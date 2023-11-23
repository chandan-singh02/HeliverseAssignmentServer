const express = require("express");
const teamController = require("../controllers/teamController");
const router = express.Router();
router.post("/team", teamController.createteam);
router.get("/allteams", teamController.getAllTeams);
module.exports = router;
