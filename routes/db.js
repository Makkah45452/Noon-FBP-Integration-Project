const express = require("express");
const router = express.Router();

router.post("/connect", (req, res) => {
  const { host, user, password, dbname } = req.body;
  console.log("Received DB config:", { host, user, password, dbname });
  res.status(200).json({ message: "DB config received" });
});

module.exports = router;
