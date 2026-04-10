const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: message }]
          }
        ]
      }
    );

    res.json({
      reply: response.data.candidates[0].content.parts[0].text
    });

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Gemini API error" });
  }
});

module.exports = router;
