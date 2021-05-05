const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OutStudentSchema = new Schema({
  Registration_no: { type: String, required: true },
  Name_of_the_student: { type: String, required: true },
  Email_id: { type: String, required: true },
  Transfer_Semester: { type: String, required: true },
  Christ_Programme: { type: String, required: true },
  From_date: { type: Date, required: true, default: Date.now },
  To_date: { type: Date, required: true, default: Date.now },
  Coordinating_department_or_office: { type: String, required: true },
});
module.exports = mongoose.model("OutgoingSchema", OutStudentSchema);
