const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  Name_of_POC: { type: String, required: true },
  Designation: { type: String, required: true },
  Phone_number: { type: String, required: true },
  Email_Id: { type: String, required: true },
});

module.exports = mongoose.model("Contact", ContactSchema);
