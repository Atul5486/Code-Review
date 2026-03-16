const generateContent = require("../services/ai.services");

module.exports.getReview = async (req, res) => {
  try {
    const { code } = req.body;
    const response = await generateContent(code);
    return res.json(response);
  } catch (err) {
    console.error("AI ERROR ===>", err?.message || err);

    return res.status(500).json({
      success: false,
      message:
        err?.message ||
        "AI service failed. Probably quota exceeded / invalid key.",
    });
  }
};
