const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CurIntSchema = new Schema({
  Curriculum_impact: { type: String, required: true }, //Confirm for text box???
  Department: { type: String, required: true },
});

module.exports = mongoose.model("CurriculumInternational", CurIntSchema);
