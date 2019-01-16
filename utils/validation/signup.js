const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = data => {
  const errors = {};

  // Validate params exists
  if (isEmpty(data)) {
    errors.body = "Body cannot be empty";
    return { errors, isValid: false };
  }

  // Prepare strings
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Validate format
  if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
  if (!Validator.isLength(data.password, { min: 8, max: 100 }))
    errors.password = "Password length should be between 8 and 100 characters";

  // Checking if empty before to avoid overriding of message
  // Validate each param exists
  if (isEmpty(data.email)) errors.email = "Email cannot be empty";
  if (isEmpty(data.password)) errors.password = "Password cannot be empty";

  return { errors, isValid: isEmpty(errors) };
};
