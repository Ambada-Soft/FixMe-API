const express = require("express");
const app = express();
const { defaults } = require("./utils/defaults");

const port = process.env.PORT || defaults.appPort;

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
