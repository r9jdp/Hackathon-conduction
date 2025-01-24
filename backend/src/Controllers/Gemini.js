const { GoogleGenerativeAI } = require("@google/generative-ai");
const Prompt = require("../Utils/GeminiPrompt");

async function Gemini(fileBuffers) {
  // Instantiate the GoogleGenerativeAI object correctly
  const genAI = new GoogleGenerativeAI(
    "AIzaSyAvKnqm9CKsiP-awC0xgZPwymAuhjIGEMo"
  );

  // Ensure that the model is correctly selected
  const model = await genAI.getGenerativeModel({
    model: "models/gemini-1.5-pro",
  });

  // Map over the file buffers and prepare them for the Gemini API
  const inlineDataArray = fileBuffers.map((fileBuffer) => ({
    inlineData: {
      data: fileBuffer.toString("base64"), // Convert to base64
      mimeType: "image/jpeg",
    },
  }));

  // Generate content using the selected model
  const result = await model.generateContent([...inlineDataArray, Prompt]);

  // Return the result from Gemini
  return result.response.text();
}

module.exports = Gemini;
