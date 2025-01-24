const { oauth2Client } = require("../Utils/GoogleConfig");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const { CheckUserIsIndividual } = require("../Controllers/DBcontrollers/User");

async function GoogleAuthController(req, res) {
  try {
    const userID = req.body.code;
    const googleResponse = await oauth2Client.getToken(userID);
    oauth2Client.setCredentials(googleResponse.tokens);

    const userDetails = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleResponse.tokens.access_token}`
    );

    const existingIndividualUser = await CheckUserIsIndividual(
      userDetails.data.email
    );

    const accessToken = jwt.sign(userDetails.data, process.env.SECRET, {
      expiresIn: "7d",
    });

    const refreshToken = jwt.sign(userDetails.data, process.env.SECRET, {
      expiresIn: "15d",
    });

    res.cookie("access_token", accessToken, {
      httpOnly: true,
      secure: false,
      SameSite: "LaX",
    });
    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      secure: false,
      SameSite: "LaX",
    });
    res.status(200).json({
      message: "User authenticated successfully",
      existingIndividualUser,
      existingOrganisationUser: false,
      userDetails: userDetails.data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { GoogleAuthController };
