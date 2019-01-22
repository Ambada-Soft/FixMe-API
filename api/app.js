"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// cargar rutas
const auth_routes = require("./routes/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// rutas base
app.use("/api/auth", auth_routes);

module.exports = app;
