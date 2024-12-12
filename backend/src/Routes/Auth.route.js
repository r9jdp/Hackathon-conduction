const express = require("express");
const router = express.Router();
const { GoogleAuthController } = require("../Controllers/GoogleAuthController");
const { jwtRefreshTokenCheck } = require("../Controllers/JwtController");
const { Logout } = require("../Controllers/Logout");
router.get("/", (req, res) => {
  res.send("Hello World from auth route");
});

router.post("/google-auth", GoogleAuthController);
router.post("/jwtRefresh", jwtRefreshTokenCheck);
router.get("/logout", Logout);

module.exports = router;
