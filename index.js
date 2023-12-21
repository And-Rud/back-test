const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Ok" });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
