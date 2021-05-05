const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncomstudentSchema = new  Schema({
    Name_of_the_student:  
    {   type: String,
         required: true
    },
  From_date: { 
      type: Date, 
      trim: true,
      required: true,
       default: Date.now 
    },
  To_date: { 
      type: Date, 
      required: true,
      trim: true,
      default: Date.now
     },
  Course_or_Activity_undertaken: {
       type: String,
        required: true 
    },
  Coordinating_departmen_or_office: {
      type: String,
       required: true
    },
});

module.exports=mongoose.model('IncomingSchema',IncomstudentSchema);