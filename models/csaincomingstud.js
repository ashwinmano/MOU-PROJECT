const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CSASchema = new Schema({
  Name_of_person: { type: String, required: true },
  From_date: { type: Date, required: true, default: Date.now },
  To_date: { type: Date, required: true, default: Date.now },
  Purpose_of_visit: { type: String, required: true },
});

module.exports = mongoose.model("Csaincomingstud", CSASchema);
