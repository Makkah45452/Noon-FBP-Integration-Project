const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbRoutes = require("./routes/db");
const webhookRoutes = require("./routes/webhook");
const noonRoutes = require("./routes/noon");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/db", dbRoutes);
app.use("/api/webhook", webhookRoutes);
app.use("/api/noon", noonRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
