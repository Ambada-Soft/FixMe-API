const signupValidation = require("../validation/signup");
const signinValidation = require("../validation/signin");
const firebase = require("firebase/app");
require("firebase/auth");
const serviceAccount = require("../../generate_token/ServiceAccountKey.json");

module.exports = class Auth {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(serviceAccount);
    }
    this.errors = {};
  }

  signin(body) {
    const { errors, isValid } = signinValidation(body);

    if (!isValid) {
      return Promise.resolve({ isValid, errors, status: 422 });
    }

    const { email, password } = body;

    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        const responseParsed = JSON.parse(JSON.stringify(response.user));

        return {
          isValid,
          tokens: {
            refreshToken: responseParsed.stsTokenManager.accessToken,
            accessToken: responseParsed.stsTokenManager.refreshToken,
            exp: responseParsed.stsTokenManager.expirationTime
          },
          status: 200
        };
      })
      .catch(errors => {
        return { isValid: false, status: 422, errors };
      });
  }

  signup(body) {
    const { errors, isValid } = signupValidation(body);

    if (!isValid) {
      return Promise.resolve({ isValid, errors, status: 422 });
    }

    return firebase
      .auth()
      .createUserWithEmailAndPassword(body.email, body.password)
      .then(user => {
        // Need to check this, user variable expose a lot of data.
        return { isValid, user, status: 201 };
      })
      .catch(errors => {
        return { isValid: false, errors, status: 401 };
      });
  }
};
