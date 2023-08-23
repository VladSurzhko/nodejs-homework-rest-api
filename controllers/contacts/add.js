const operations = require("../../models/contacts");
const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const add = async (req, res) => {
  const body = req.body;
  const { error } = schema.validate(body);

    if (error) {
    const missingField = error.details[0].context.label;
    const errorMessage = `Missing required ${missingField} field`;
    const customError = new Error(errorMessage);
    customError.status = 400;
    throw customError;
  }

  const result = await operations.addContact(body);
  res.status(201).json(result);
};

module.exports = add;