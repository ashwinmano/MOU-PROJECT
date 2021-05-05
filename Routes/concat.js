const express = require("express");
const router = express.Router();
const ConcatSchema = require("../models/concatSchema");

router.post("/", (req, res) => {
  const conference = new ConcatSchema({
    Name: (req.body && req.body.Name) || "Tech",
    EmailID: (req.body && req.body.EmailID) || "test@tesst.com",
    PhoneNum:(req.body && req.body.PhoneNum) || 989898,
    Designation: (req.body && req.body.Designation) || "Lawyer",
    Department: (req.body && req.body.Department) || "science"
  });
  try {
    conference.save().then((result) => {
      console.log("result" + result);
      res.status(200).json({
        conference: result,
      });
    });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", (req, res) => {
    ConcatSchema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.put("/:id", (req, res) => {
  const conference = {
    Conference_theme: req.body && req.body.Conference_theme,
    Organised_by: req.body && req.body.Organised_by,
  };

  ConcatSchema.findByIdAndUpdate(req.params.id, conference, {
    new: true,
  })
    .then((updatedconference) => res.json(updatedconference))
    .catch((error) => res.json({ message: error }));
});

router.delete("/:id", (req, res) => {
    ConcatSchema.findByIdAndRemove(req.params.id)
    .then((res) => res.status(204).end())
    .catch((error) => res.json({ message: error }));
});



module.exports = router;
