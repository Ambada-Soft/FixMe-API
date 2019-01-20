![CircleCI](https://circleci.com/gh/Ambada-Soft/FixMe-API/tree/master.svg?style=svg&circle-token=f2878c0f64e0202c299cf218b644f9ebc6ce93aa)

# FixMe-API

API that is used for all actions performed by Web Client application and Mobile.

# How to run set API up

`yarn install`

`yarn dev`
Application is going to be up on port `5000`

# How to run tests

`yarn test`

# Credentials

on `generate_token/` should exist an `ServiceAccountKey.json` file with a Firebase configuration Keys (are not included on project, should get them from https://console.firebase.google.com/u/2/project/fixme-api-dev/overview clicking on `</>` icon)

example of file
`{
  "apiKey": "asdf-IOSD783973-44456asdfs",
  "authDomain": "fixme-api-dev.firebaseapp.com",
  "databaseURL": "https://fixme-api-dev.firebaseio.com",
  "projectId": "jeje-jaja-jiji",
  "storageBucket": "lolo-lala-lele.appspot.com",
  "messagingSenderId": "1234"
}`
