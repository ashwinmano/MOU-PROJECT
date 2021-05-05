const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NfunprojSchema = new Schema({
  Project_name: { type: String, required: true },
  Team_members: { type: String, required: true },
  Project_status: { type: String, required: true },
  Project_start_date: { type: Date, required: true, default: Date.now },
  Project_end_date: { type: Date, required: true, default: Date.now },
  Project_grant: { type: Number, required: true },
  Department: { type: String, required: true },
});

module.exports = mongoose.model("NOnFundedSchema", NfunprojSchema);
