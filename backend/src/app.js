const express = require("express");
const multer = require("multer");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const Gemini = require("./Controllers/Gemini"); // Import the Gemini function
require("dotenv").config();
const AuthRoute = require("./Routes/Auth.route");
const HealthRoute = require("./Routes/Health.route");

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

app.get("/testCookie", (req, res) => {
  res.cookie("testCookie", "testValue", {
    httpOnly: true,
    secure: false,
    SameSite: "Strict",
  });
  res.send("Cookie set");
});

app.get("/removeCookie", (req, res) => {
  res.clearCookie("testCookie");
});

const port = 3000;

const storage = multer.memoryStorage(); // Use memoryStorage to store files in memory instead of disk

const fileFilter = (req, file, cb) => {
  // Accept only JPG/JPEG files
  if (file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPG/JPEG is allowed."), false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Max file size of 5MB
  fileFilter: fileFilter,
});

app.use("/", HealthRoute);
app.use("/auth", AuthRoute);

// Endpoint to upload and process the images with Gemini
app.post("/upload", upload.array("files", 3), async (req, res) => {
  try {
    if (req.files && req.files.length > 0) {
      // Get file buffers
      const fileBuffers = req.files.map((file) => file.buffer);

      // Call Gemini function with file buffers
      const result = await Gemini(fileBuffers);

      // Return the response from Gemini
      console.log(result);

      res.status(200).json({
        message: "Files processed successfully",
        // result: JSON.parse(result),
        result: result,
      });
    } else {
      res.status(400).json({ message: "At least one file is required." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while processing the files",
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
