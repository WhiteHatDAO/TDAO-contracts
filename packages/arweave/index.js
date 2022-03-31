const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const apiPort = 4000;

app.get("/", (req, res) => {
  res.send("Arweave back-end up and running 😁");
});

app.listen(apiPort, () => {
  console.log(`Server running on port ${apiPort}`);
  console.log("");
});
