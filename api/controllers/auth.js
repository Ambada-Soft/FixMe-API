"use strict";

const Auth = require("../models/Auth");
const test = (req, res) => {
  res.status(200).json({
    message: "Auth Route Works"
  });
};

// @route  POST api/auth/signup
// @desc   Signup user with email and password
// @access Public
const signup = (req, res) => {
  const auth = new Auth();
  auth.signup(req.body).then(response => {
    const { isValid, tokens, errors } = response;
    if (isValid) {
      return res.status(201).json({ tokens });
    } else {
      return res.status(400).json({ errors });
    }
  });
};

// @route  POST api/auth/signin
// @desc   Signin user with email and password
// @access Public
const signin = (req, res) => {
  const auth = new Auth();
  auth.signin(req.body).then(response => {
    const { isValid, tokens, errors, status } = response;
    if (isValid) {
      return res.status(status).json({ ...tokens });
    } else {
      return res.status(status).json({ errors });
    }
  });
};

module.exports = {
  test,
  signup,
  signin
};
