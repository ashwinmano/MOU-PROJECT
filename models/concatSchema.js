const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConcatSchema = new Schema({
    Name: { type: String, required: true },
    EmailID: { type: String, required: true },
    PhoneNum: { type: Number, required: true },
    Designation: { type: String, required: true },
    Department: { type: String, required: true }
});

module.exports = mongoose.model("ContactUs", ConcatSchema);
