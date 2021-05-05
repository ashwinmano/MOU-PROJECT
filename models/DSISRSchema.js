const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DSISRSchema = new Schema({
  Country: { type: String, required: true },
  No_of_UG_students: { type: Number, required: true },
  No_of_PG_students: { type: String, required: true },
  No_of_MPhil_or_PhD_students: { type: String, required: true },
  Total_no_of_students: { type: String, required: true },
});

module.exports = mongoose.model("DSISR", DSISRSchema);
