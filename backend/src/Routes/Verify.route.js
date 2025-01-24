const route = require("express").Router();
const { requiresAuth } = require("../Middlewares/jwtAccessToken");
route.get("/verify", requiresAuth, (req, res) => {
  res.status(200).json({ message: "Token is valid" });
});

module.exports = route;
