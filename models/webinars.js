const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WebinarsSchema = new Schema({
  Webinar: { type: String, required: true },
  Speaker: { type: String, required: true },
  Organised_on: { type: Date, required: true, default: Date.now },
  Organised_by: { type: String, required: true },
});

module.exports = mongoose.model("Webinars", WebinarsSchema);
