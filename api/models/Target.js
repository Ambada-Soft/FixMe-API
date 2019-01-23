const saveTargetValidation = require("../validation/saveTargetValidation");
const firebase = require("firebase/app");
require("firebase/firestore");
let firestore;
const serviceAccount = require("../../generate_token/ServiceAccountKey.json");

module.exports = class Target {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(serviceAccount);
    }
    firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
  }

  saveTarget(body) {
    const { errors, isValid } = saveTargetValidation(body);

    if (!isValid) {
      return Promise.resolve({ isValid, errors, status: 422 });
    }

    const { name, description, expectedDate, uid } = body;

    const firestore = firebase.firestore();
    const docReference = firestore.collection("targets").doc(uid);

    return docReference
      .set({
        name,
        description,
        expectedDate: new Date(expectedDate).getTime()
      })
      .then(() => {
        return docReference.get().then(response => {
          return {
            isValid: true,
            targetData: response.data(),
            status: 201
          };
        });
      })
      .catch(errors => {
        return { isValid: false, errors, status: 500 };
      });
  }
};
