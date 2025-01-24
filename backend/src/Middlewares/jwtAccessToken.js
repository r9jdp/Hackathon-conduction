const jwt = require("jsonwebtoken");
require("dotenv").config();

const requiresAuth = (req, res, next) => {
  const access_token = req.cookies["access_token"];
  console.log(req.cookies);

  if (!access_token) {
    return res.status(401).json({ message: "Access token is missing" });
  }
  jwt.verify(access_token, process.env.SECRET, (err, user) => {
    if (err) {
      console.log(err.message);
      return res.status(403).json({ message: "Invalid access token" });
    }
    req.user = user;
    next();
  });
};

module.exports = { requiresAuth };
