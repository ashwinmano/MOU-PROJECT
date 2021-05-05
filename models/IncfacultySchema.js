const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IncfacultySchema = new Schema({
  Name: { type: String, required: true },
  Designation: { type: String, required: true },
  From_date: { type: Date, required: true, default: Date.now },
  To_date: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("IncomingFaculty", IncfacultySchema);
