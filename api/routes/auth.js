"use strict";

const express = require("express");
const AuthController = require("../controllers/auth");
const api = express.Router();

api.get("/test", AuthController.test);
api.post("/signup", AuthController.signup);
api.post("/signin", AuthController.signin);

module.exports = api;
