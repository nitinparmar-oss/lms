require("dotenv").config();
const express = require("express");
const cors = require("cors");

const aiRoute = require("./routes/aiRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ai", aiRoute);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
