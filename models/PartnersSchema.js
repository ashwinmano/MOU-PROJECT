const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PartnersSchema = new Schema({
  Activities_performed: { type: String, required: true },
  Consultancy_amount: { type: String },
  Department: { type: String, required: true },
});

module.exports = mongoose.model("Patners", PartnersSchema);
