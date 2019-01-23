const { defaults } = require("../config/defaults");
const isDate = value =>
  value !== undefined &&
  value !== null &&
  typeof value === "string" &&
  value.match(defaults.dateFormat) &&
  !Number.isNaN(new Date(value).getTime());
module.exports = isDate;
