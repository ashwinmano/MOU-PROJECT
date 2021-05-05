const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FactaughtSchema = new Schema({
  Name_of_faculty: { type: String, required: true },
  Designation: { type: String, required: true },
  From_date: { type: Date, required: true, default: Date.now },
  To_date: { type: Date, required: true, default: Date.now },
  Topic: { type: String, required: true },
});

module.exports = mongoose.model("Facultytaught", FactaughtSchema);
