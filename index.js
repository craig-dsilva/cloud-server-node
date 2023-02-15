const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

app.listen(process.env.PORT);

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public", "index.html"))
);
