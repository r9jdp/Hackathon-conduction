const route = require("express").Router();
const { requiresAuth } = require("../Middlewares/jwtAccessToken");
route.get("/health", requiresAuth, (req, res) => {
  res.send("Healthy");
});

module.exports = route;
