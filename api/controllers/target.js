"use strict";

const Target = require("../models/Target");
const test = (req, res) => {
  res.status(200).json({
    message: "Target Route Works"
  });
};

const saveTarget = (req, res) => {
  const target = new Target();
  target.saveTarget(req.body).then(response => {
    const { isValid, targetData, errors } = response;
    if (isValid) {
      return res.status(201).json({ targetData });
    } else {
      return res.status(400).json({ errors });
    }
  });
};

module.exports = {
  test,
  saveTarget
};
