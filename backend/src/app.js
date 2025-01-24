const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const AuthRoute = require("./Routes/Auth.route");
const HealthRoute = require("./Routes/Verify.route");
const FilesRoute = require("./Routes/FileUpload.route");
const UserRoute = require("./Routes/User.route");
const { requiresAuth } = require("./Middlewares/jwtAccessToken");

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: `http://localhost:5173`,
    credentials: true,
  })
);

const port = 3000;

app.use("/", HealthRoute);
app.use("/auth", AuthRoute);
app.use("/upload", requiresAuth, FilesRoute);
app.use("/user", requiresAuth, UserRoute);

app.listen(port, (err) => {
  if (err) {
    console.error("Failed to start server:", err);
  } else {
    console.log(`Server is running on port http://localhost:${port}`);
  }
});
