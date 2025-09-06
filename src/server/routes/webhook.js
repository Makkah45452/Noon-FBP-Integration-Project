const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("Webhook Received:", req.body);
  res.send("Webhook received");
});

module.exports = router;
