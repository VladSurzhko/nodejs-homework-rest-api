const Contact = require("../../models/contact");
const { schema } = require("../../schemas/schemaJoi");


const add = async (req, res) => {
  const { _id } = req.user;

  const body = req.body;
  const { error } = schema.validate(body);
  if (error) {
    error.status = 400;
    throw error;
  }
  
  const result = await Contact.create({ ...body, owner: _id });
  res.status(201).json({
    status: "success",
    code: "201",
    data: {
      result,
    },
  });
};

module.exports = add;






// const add = async (req, res) => {
//   const body = req.body;
//   const { error } = schema.validate(body);
//   if (error) {
//     const missingField = error.details[0].context.label;
//     const errorMessage = `Missing required ${missingField} field`;
//     const customError = new Error(errorMessage);
//     customError.status = 400;
//     throw customError;
//   }
//   const result = await Contact.create(body);
//   res.status(201).json(result);
// };

// module.exports = add;










