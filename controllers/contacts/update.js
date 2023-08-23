const operations = require("../../models/contacts");
const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
 phone: Joi.string().required(),
});

const update = async (req, res) => {
  const { contactId } = req.params;
  const body = req.body;
  const { error } = schema.validate(body);

  if (!body.name && !body.email && !body.phone) {
    const missingFieldsError = new Error("missing fields");
    missingFieldsError.status = 400;
    throw missingFieldsError;
  }

  if (error) {
    const missingField = error.details[0].context.label;
    const errorMessage = `Missing required ${missingField} field`;
    const customError = new Error(errorMessage);
    customError.status = 400;
    throw customError;
  }

  const updatedContact = await operations.updateContact(contactId, body);

  if (!updatedContact) {
    const notFoundError = new Error("Not found");
    notFoundError.status = 404;
    throw notFoundError;
  }

  res.json(updatedContact);
};

module.exports = update;