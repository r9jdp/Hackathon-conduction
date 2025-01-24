const { Router } = require("express");
const { requiresAuth } = require("../Middlewares/jwtAccessToken");
const router = require("express").Router();
// const { CheckUserIsIndividual } = require("../Controllers/User.controller");
// const { FetchUser } = require("../Controllers/User.controller");
const { CreateUser } = require("../Controllers/DBcontrollers/CreateUser");
const {
  CheckUserIsIndividual,
  FetchUser,
} = require("../Controllers/DBcontrollers/User");

router.post("/createUser", async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res.status(400).json({ message: "User data is required" });
    }

    const temp = parseFloat(data.ResumeData.grade);
    data.ResumeData.grade = temp;
    // data.resumeData.indID = parseInt(req.user.id);
    data.ResumeData.age = parseInt(data.ResumeData.age);
    const maindata = await CreateUser(data.ResumeData);
    return res.status(200).json(maindata);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "An error occurred while processing the request",
      error: error.message,
    });
  }
});
router.post("/getUser", requiresAuth, async (req, res) => {
  console.log("Received getUser request");
  try {
    const email = req.user.email;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const existingUser = await CheckUserIsIndividual(email);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const userData = await FetchUser(email);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User found", data: userData });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while processing the request",
      error: error.message,
    });
  }
});

module.exports = router;
