const operations = require("../../models/contacts");

const getAll = async (req, res) => {
  const contacts = await operations.listContacts();
  
  res.json(contacts);
};

module.exports = getAll;