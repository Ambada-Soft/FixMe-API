const express = require("express");
const bodyParser = require("body-parser");
const auth = require("./routes/api/auth");
const { defaults } = require("./utils/defaults");

const port = process.env.PORT || defaults.appPort;

const app = express();

// Body parser moddleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.use("/api/auth", auth);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
