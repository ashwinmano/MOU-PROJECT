const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OutfacultySchema = new Schema({
  Name: { type: String, required: true },
  Designation: { type: String, required: true },
  Funded_by: { type: String, required: true },
  Department_or_Coordinating_Office: { type: String, required: true },
  From_date: { type: Date, required: true, default: Date.now },
  To_date: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("OutgoingFaculty", OutfacultySchema);
