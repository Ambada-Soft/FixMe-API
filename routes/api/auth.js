const express = require("express");
const router = express.Router();
const signupValidation = require("../../utils/validation/signup");
// Firebase
const firebase = require("firebase/app");
require("firebase/auth");
const serviceAccount = require("../../generate_token/ServiceAccountKey.json");

firebase.initializeApp(serviceAccount);

// @route  POST api/auth/signup
// @desc   Signup user with email and password
// @access Public
router.post("/signup", (req, res) => {
  const { errors, isValid } = signupValidation(req.body);

  if (!isValid) return res.status(400).json({ errors });

  const { email, password, displayName } = req.body;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      return res.status(201).json(user);
    })
    .catch(error => {
      return res.status(400).json({ error });
    });
});

module.exports = router;
