// import jwt from "jsonwebtoken";
const jwt = require("jsonwebtoken");

const requiresAuth = (req, res, next) => {
  const access_token = req.cookies["access_token"];
  console.log("Cookies in middleware : ", req.cookies);

  if (!access_token) {
    return res.status(401).json({ message: "Access token is missing" });
  }
  jwt.verify(access_token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid access token" });
    }
    req.user = user;
    next();
  });
};

module.exports = { requiresAuth };
