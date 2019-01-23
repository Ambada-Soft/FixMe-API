const isEmpty = require("./isEmpty");

module.exports = data => {
  const errors = {};

  // Validate params exists
  if (isEmpty(data)) {
    errors.body = "Body cannot be empty";
    return { errors, isValid: false };
  }

  if (isEmpty(data.email)) errors.email = "Email cannot be empty";
  if (isEmpty(data.password)) errors.password = "Password cannot be empty";

  return { errors, isValid: isEmpty(errors) };
};
