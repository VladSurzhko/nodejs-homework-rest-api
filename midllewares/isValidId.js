const { isValidObjectId } = require("mongoose");
const HttpError = require("../helpers/httpError");

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    next(HttpError(404, "Not valid id."));
  }
  next();
};

module.exports = isValidId;