const Logout = (req, res) => {
  console.log("response received");

  res.clearCookie("access_token"); // Clear the access token cookie
  res.clearCookie("refresh_token"); // Clear the refresh token cookie
  res.status(200).json({ message: "User logged out successfully" });
};

module.exports = { Logout };
