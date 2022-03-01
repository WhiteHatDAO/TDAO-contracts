const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { connection, collections } = require("./db");
const authorRouter = require("./routes/author-router");

const app = express();
const apiPort = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

connection.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", authorRouter);

app.listen(apiPort, () => {
  console.log(`Server running on port ${apiPort}`);
  console.log("");
});
