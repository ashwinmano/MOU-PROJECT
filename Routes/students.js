const express = require("express");
const router = express.Router();
const OutgoingSchema = require("../models/outgoingStudSchema");
const IncomingSchema = require("../models/incomStudSchema");
const { response } = require("express");
// router.post('/incoming-students',(req,res) =>{
//     const student = req.body;

//     IncomingSchema.create(student,(err,data) =>{
//         if(err){
//             res.status(500).send(err)
//         }
//         else{
//             res.status(201).send(data)
//         }
//     })
// })

router.post("/incoming-students", (req, res) => {
  const student = new IncomingSchema({
    Name_of_the_student: (req.body && req.body.Name_of_the_student) || "test",
    From_date: (req.body && req.body.From_date) || "12/02/2021",
    To_date: (req.body && req.body.To_date) || "12/03/2021",
    Course_or_Activity_undertaken:
      (req.body && req.body.Course_or_Activity_undertaken) || "Activity",
    Coordinating_departmen_or_office:
      (req.body && req.body.Coordinating_departmen_or_office) || "dept",
  });
  try {
    student.save().then((result) => {
      console.log("result" + result);
      res.status(200).json({
        students: result,
      });
    });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/incoming-students", (req, res) => {
  IncomingSchema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.put("/incoming-students/:id", (req, res) => {
  const student = {
    Name_of_the_student: req.body && req.body.Name_of_the_student,
    From_date: req.body && req.body.From_date,
    To_date: req.body && req.body.To_date,
    Course_or_Activity_undertaken:
      req.body && req.body.Course_or_Activity_undertaken,
    Coordinating_departmen_or_office:
      req.body && req.body.Coordinating_departmen_or_office,
  };

  IncomingSchema.findByIdAndUpdate(req.params.id, student, {
    new: true,
  })
    .then((updatedStudent) => res.json(updatedStudent))
    .catch((error) => res.json({ message: error }));
});

router.delete("/incoming-students/:id", (req, res) => {
  IncomingSchema.findByIdAndRemove(req.params.id)
    .then((res) => res.status(204).end())
    .catch((error) => res.json({ message: error }));
});

router.post("/outgoing-students", (req, res) => {
  const student = new OutgoingSchema({
    Registration_no: (req.body && req.body.Registration_no) || "1934021",
    Name_of_the_student: (req.body && req.body.Name_of_the_student) || "Vijay",
    Email_id: (req.body && req.body.Email_id) || "as@xyz",
    Transfer_Semester: (req.body && req.body.Transfer_Semester) || "2017",
    Christ_Programme: (req.body && req.body.Christ_Programme) || "CMS",
    From_date: (req.body && req.body.From_date) || "24/01/2012",
    To_date: (req.body && req.body.To_date) || "24/04/2018",
    Coordinating_department_or_office:
      (req.body && req.body.Coordinating_department_or_office) ||
      "International Affairs",
  });
  try {
    student.save().then((result) => {
      console.log("result" + result);
      res.status(200).json({
        students: result,
      });
    });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/outgoing-students", (req, res) => {
  OutgoingSchema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.put("/outgoing-students/:id", (req, res) => {
  const student = {
    Registration_no: req.body && req.body.Registration_no,
    Name_of_the_student: req.body && req.body.Name_of_the_student,
    Email_id: req.body && req.body.Email_id,
    Transfer_Semester: req.body && req.body.Transfer_Semester,
    Christ_Programme: req.body && req.body.Christ_Programme,
    From_date: req.body && req.body.From_date,
    To_date: req.body && req.body.To_date,
    Coordinating_department_or_office:
      req.body && req.body.Coordinating_department_or_office,
  };

  OutgoingSchema.findByIdAndUpdate(req.params.id, student, {
    new: true,
  })
    .then((updatedStudent) => res.json(updatedStudent))
    .catch((error) => res.json({ message: error }));
});

router.delete("/incoming-students/:id", (req, res) => {
  OutgoingSchema.findByIdAndRemove(req.params.id)
    .then((res) => res.status(204).end())
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
