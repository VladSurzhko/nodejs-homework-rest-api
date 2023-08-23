const operations = require("../../models/contacts");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const contactById = await operations.getContactById(contactId);
  if (!contactById) {
    const error = new Error("Not found");
    error.status = 404;
    throw error;
  }
  res.json(contactById);
};
module.exports = getById;