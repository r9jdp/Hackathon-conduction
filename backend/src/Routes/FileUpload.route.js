const express = require("express");
const router = express.Router();
const multer = require("multer");
const Gemini = require("../Controllers/Gemini");
const axios = require("axios");
const { requiresAuth } = require("../Middlewares/jwtAccessToken");

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPG/JPEG is allowed."), false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: fileFilter,
});

router.post("/", upload.array("files", 3), async (req, res) => {
  try {
    if (req.files && req.files.length > 0) {
      const fileBuffers = req.files.map((file) => file.buffer);

      console.log("User data:", req.body);

      const result = await Gemini(fileBuffers);

      const ParsedResult = await axios.post("http://127.0.0.1:5000/parse", {
        data: result,
      });

      // const ParsedResult = {
      //   data: {
      //     fname: "Rajdeep",
      //     lname: "Pandey",
      //     gender: null,
      //     age: null,
      //     dob: null,
      //     contact: "9930914110",
      //     email: "rajdeep.p@somaiya.edu",
      //     github: null,
      //     linkedin: null,
      //     location: "Mumbai, India",
      //     description:
      //       "Rajdeep Pandey is a motivated student pursuing a Bachelor of Science in Artificial Intelligence and Data Science at KJ Somaiya College of Engineering. He possesses strong technical abilities in software development and application, coupled with excellent time management skills. His expertise lies in object-oriented programming with C++ and Python, web development using HTML, CSS, JavaScript, React, and backend technologies like Flask and SQL. Rajdeep is also proficient in data analysis with Pandas and NumPy, data visualization with Matplotlib, and web scraping. His projects include a tax-saving application and a comprehensive financial wellness platform, showcasing his ability to leverage AI for practical solutions.",
      //     degree_type: "Bachelors",
      //     educational_institute: "KJ Somaiya College of Engineering",
      //     yearofStart_degree: null,
      //     graduation_year: "2027",
      //     grade: null,
      //     diet_preference: null,
      //     skills:
      //       "<ul><li>Object-Oriented Programming with C++ and Python</li><li>Programming in C</li><li>Pandas and Numpy with Python</li><li>HTML, CSS, JAVASCRIPT, REACT JS, React query, Tailwind CSS, Bootstrap</li><li>Web Scraping with python</li><li>Backend development with Flask</li><li>Database development in SQL(MySQL) and Python's SQLalchemy for ORM</li><li>Basic Data visualization with Matplotlib</li><li>Basic electronics and Arduino</li><li>Areas of Interest: Web Design and Development, Automation, AI and ML</li><li>Web Dev Tools: Nodejs, VScode, Git, Github</li><li>Soft Skills: Problem Solving, Continuous Learning, Communication</li></ul>",
      //     bestdescribes:
      //       "<ul><li>Motivated</li><li>Responsible</li><li>Good Technical Abilities</li><li>Excellent Time Management Skills</li><li>Problem Solver</li><li>Continuous Learner</li><li>Good Communicator</li></ul>",
      //     projects:
      //       "<ul><li><strong>Monthly expenses and Tax saving application:</strong> This application provides real-time suggestions to save money and plan monthly expenses effectively using generative AI.</li><li><strong>Comprehensive Financial Wellness Platform:</strong> Developed at devopia, this platform offers a unified dashboard for managing investments, risk assessment, family financial tracking, and personalized recommendations leveraging AI to optimize savings, investments, and insurance coverage.</li></ul>",
      //     work_experience: null,
      //   },
      // };

      res.status(200).json({
        message: "Files processed successfully",
        // result: JSON.parse(ParsedResult.data),
        result: ParsedResult.data,
      });
    } else {
      res.status(400).json({ message: "At least one file is required." });
    }
  } catch (error) {
    console.error(error);
    if (error.response) {
      res.status(error.response.status).json({
        message: "An error occurred while processing the files",
        error: error.response.data,
      });
    } else {
      res.status(500).json({
        message: "An error occurred while processing the files",
        error: error.message,
      });
    }
  }
});

module.exports = router;
