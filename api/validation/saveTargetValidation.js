const Validator = require("validator");
const isEmpty = require("./isEmpty");
const isDate = require("./isDate");

module.exports = data => {
  const errors = {};

  // Validate params exists
  if (isEmpty(data)) {
    errors.body = "Body cannot be empty";
    return { errors, isValid: false };
  }

  // Needed in order to avoid Validator to explode
  if (isEmpty(data.name)) data.email = "";
  if (isEmpty(data.description)) data.description = "";
  if (isEmpty(data.expectedDate)) data.expectedDate = "";

  // Validate  lengths
  if (!Validator.isLength(data.name, { min: 1, max: 100 }))
    errors.name = "Name length should be between 1 and 100 characters";
  if (!Validator.isLength(data.description, { min: 1, max: 500 }))
    errors.description =
      "Description length should be between 1 and 500 characters";

  // Validate if date is YYYY-MM-DD
  if (!isDate(data.expectedDate))
    errors.expectedDate = "Date format should be YYYY-MM-DD";

  if (isEmpty(data.name)) errors.name = "Name cannot be empty";
  if (isEmpty(data.description))
    errors.description = "Description cannot be empty";
  if (isEmpty(data.expectedDate))
    errors.expectedDate = "Expected Date cannot be empty";

  return { errors, isValid: isEmpty(errors) };
};
