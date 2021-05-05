const express = require("express");
const router = express.Router();
const IncfacultySchema = require("../models/IncfacultySchema");
const OutfacultySchema = require("../models/OutfacultySchema");
const FactaughtSchema = require("../models/FactaughtSchema");
const incomStudSchema = require("../models/incomStudSchema");

router.post("/incoming-faculty", (req, res) => {
  const faculty = new IncfacultySchema({
    Name: (req.body && req.body.Name) || "Vijay",
    Designation: (req.body && req.body.Designation) || "Teacher",
    From_date: (req.body && req.body.From_date) || "11/20/2014",
    To_date: (req.body && req.body.To_date) || "11/20/2014",
  });
  try {
    faculty.save().then((result) => {
      console.log("result" + result);
      res.status(200).json({
        faculty: result,
      });
    });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/incoming-faculty", (req, res) => {
  IncfacultySchema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.put("/incoming-faculty/:id", (req, res) => {
  const faculty = {
    Name: req.body && req.body.Name,
    Designation: req.body && req.body.Designation,
    From_date: req.body && req.body.From_date,
    To_date: req.body && req.body.To_date,
  };

  IncfacultySchema.findByIdAndUpdate(req.params.id, faculty, {
    new: true,
  })
    .then((updatedDfaculty) => res.json(updatedDfaculty))
    .catch((error) => res.json({ message: error }));
});

router.delete("/outgoing-faculty/:id", (req, res) => {
  IncfacultySchema.findByIdAndRemove(req.params.id)
    .then((res) => res.status(204).end())
    .catch((error) => res.json({ message: error }));
});

router.post("/outgoing-faculty", (req, res) => {
  const faculty = new OutfacultySchema({
    Name: (req.body && req.body.Name) || "Vijay",
    Designation: (req.body && req.body.Designation) || "Teacher",
    Funded_by: (req.body && req.body.Funded_by) || "NBA",
    Department_or_Coordinating_Office:
      (req.body && req.body.Department_or_Coordinating_Office) || "IA office",
    From_date: (req.body && req.body.From_date) || "11/20/2014",
    To_date: (req.body && req.body.To_date) || "11/20/2014",
  });
  try {
    faculty.save().then((result) => {
      console.log("result" + result);
      res.status(200).json({
        faculty: result,
      });
    });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/outgoing-faculty", (req, res) => {
  OutfacultySchema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.put("/outgoing-faculty/:id", (req, res) => {
  const faculty = {
    Name: req.body && req.body.Name,
    Designation: req.body && req.body.Designation,
    Funded_by: req.body && req.body.Funded_by,
    Department_or_Coordinating_Office:
      req.body && req.body.Department_or_Coordinating_Office,
    From_date: req.body && req.body.From_date,
    To_date: req.body && req.body.To_date,
  };

  OutfacultySchema.findByIdAndUpdate(req.params.id, faculty, {
    new: true,
  })
    .then((updatedDfaculty) => res.json(updatedDfaculty))
    .catch((error) => res.json({ message: error }));
});

router.delete("/outgoing-faculty/:id", (req, res) => {
  OutfacultySchema.findByIdAndRemove(req.params.id)
    .then((res) => res.status(204).end())
    .catch((error) => res.json({ message: error }));
});

router.post("/faculty-taught", (req, res) => {
  const faculty = new FactaughtSchema({
    Name_of_faculty: (req.body && req.body.Name_of_faculty) || "Vijay",
    Designation: (req.body && req.body.Designation) || "Teacher",
    From_date: (req.body && req.body.From_date) || "11/20/2014",
    To_date: (req.body && req.body.To_date) || "11/20/2014",
    Topic: (req.body && req.body.Topic) || "Math",
  });
  try {
    faculty.save().then((result) => {
      console.log("result" + result);
      res.status(200).json({
        faculty: result,
      });
    });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/faculty-taught", (req, res) => {
  FactaughtSchema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.put("/faculty-taught/:id", (req, res) => {
  const faculty = {
    Name_of_faculty: req.body && req.body.Name_of_faculty,
    Designation: req.body && req.body.Designation,
    From_date: req.body && req.body.From_date,
    To_date: req.body && req.body.To_date,
    Topic: req.body && req.body.Topic,
  };

  FactaughtSchema.findByIdAndUpdate(req.params.id, faculty, {
    new: true,
  })
    .then((updatedDfaculty) => res.json(updatedDfaculty))
    .catch((error) => res.json({ message: error }));
});

router.delete("/faculty-taught/:id", (req, res) => {
  FactaughtSchema.findByIdAndRemove(req.params.id)
    .then((res) => res.status(204).end())
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
