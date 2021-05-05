const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ColpubsSchema = new Schema({
  Name_of_article: { type: String, required: true },
  Author: { type: String, required: true },
  Name_of_journal: { type: String, required: true },
  Volume_and_issue_no: { type: String, required: true },
  Date_of_publication: { type: Date, required: true, default: Date.now },
  Affiliation: { type: String, required: true },
  Department: { type: String, required: true },
});

module.exports = mongoose.model("ColabPublication", ColpubsSchema);
