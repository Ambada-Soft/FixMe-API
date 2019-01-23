"use strict";

const express = require("express");
const TargetController = require("../controllers/target");
const api = express.Router();

api.get("/test", TargetController.test);
api.post("/", TargetController.saveTarget);
//api.post("/signin", AuthController.signin);

module.exports = api;
