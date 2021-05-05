const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ColconfSchema = new Schema({
  Conference_theme: { type: String, required: true },
  Organised_by: { type: String, required: true },
});

module.exports = mongoose.model("CollabrativeConference", ColconfSchema);
