const app = require("./app");
const mongoose = require("mongoose");


mongoose
  .connect("mongodb+srv://Vlad5311:Vlad5311@cluster0.ctlwk4z.mongodb.net/")
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
