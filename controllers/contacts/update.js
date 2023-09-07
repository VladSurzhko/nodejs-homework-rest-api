const { Contact } = require("../../models/contact");
const { schema } = require("../../schemas/schemaJoi");

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
  const updatedContact = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  if (!updatedContact) {
    const error = new Error("Not found");
    error.status = 404;
    throw error;
  }

  res.json(
    updatedContact,
  );
};


module.exports = update;