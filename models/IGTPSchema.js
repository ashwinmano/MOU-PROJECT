const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IGTPSchema = new Schema({
  Name_of_person: { type: String, required: true },
  Home_university: { type: String, required: true },
  Country: { type: String, required: true },
  Arrival_date: { type: Date, required: true, default: Date.now },
  dEPARTURE_DATE: { type: Date, required: true, default: Date.now },
  Remarks: { type: String, required: true },
});

module.exports = mongoose.model("IGTP", IGTPSchema);
