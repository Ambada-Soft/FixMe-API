"use strict";
const { defaults } = require("./config/defaults");
const port = process.env.PORT || defaults.appPort;
const app = require("./app");

app.listen(port, function() {
  console.log(`Server running on port ${port}`);
});
