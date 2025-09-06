const express = require("express");
const app = express();
const webhookRoutes = require("./routes/webhook");
const dbRoutes = require("./routes/db");
const cors = require("cors");

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/webhook", webhookRoutes);
app.use("/api/db", dbRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
