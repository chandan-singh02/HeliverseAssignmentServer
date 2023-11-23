const express = require("express");
const userController = require("../controllers/userController");
const teamController = require("../controllers/teamController");
const router = express.Router();

// router.post("/signup", authController.signup);
// router.post("/login", authController.login);
router.post("/user", userController.user);
router.get("/allusers", userController.getallusers);
router.get("/singleuser/:id", userController.singleuser);
router.delete("/deleteuser/:id", userController.deleteuser);
router.put("/updateuser/:id", userController.updateuser);
router.post("/team", teamController.createteam);
router.get("/search/:key", userController.searchuser);
module.exports = router;
