const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/order-items", async (req, res) => {
  const { order_nr } = req.body;

  try {
    const response = await axios.get(`https://fdn2n3xybt.apidog.io/get-ship-items-for-order-${order_nr}`);
    res.json(response.data);
  } catch (err) {
    console.error("Error fetching order:", err.message);
    res.status(500).json({ error: "Failed to fetch items" });
  }
});

module.exports = router;
