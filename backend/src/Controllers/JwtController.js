const jwt = require("jsonwebtoken");

const jwtRefreshTokenCheck = (req, res) => {
  const refreshToken = req.cookies["refresh_token"];
  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token is missing" });
  }
  jwt.verify(refreshToken, process.env.SECRET, (error, user) => {
    if (error) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }
    try {
      const newAccessToken = jwt.sign(
        { email: user.email },
        process.env.SECRET,
        {
          expiresIn: "7d",
        }
      );
      res.cookie("access_token", newAccessToken, {
        httpOnly: true,
        secure: false,
      });
      res.status(200).json({
        accessToken: newAccessToken,
        message: "New access token generated",
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
};

module.exports = { jwtRefreshTokenCheck };
