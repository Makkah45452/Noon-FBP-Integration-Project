const express = require("express");
const router = express.Router();

router.post("/connect", (req, res) => {
  const { host, user, password, dbname } = req.body;
  console.log("DB Config Received:", { host, user, password, dbname });
  res.status(200).json({ message: "DB Config OK" });
});

module.exports = router;
