const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Ok2" });
});

app.post("/", (req, res) => {
  res.status(200).json({ message: "Ok3" });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
