const express = require("express");
const router = express.Router();
const Curriculum_impact = require("../models/CurIntSchema");

router.post("/", (req, res) => {
  const curriculum = new Curriculum_impact({
    Curriculum_impact: (req.body && req.body.Curriculum_impact) || "High", //Confirm for text box???
    Department: (req.body && req.body.Department) || "Math",
  });
  try {
    curriculum.save().then((result) => {
      console.log("result" + result);
      res.status(200).json({
        curriculum: result,
      });
    });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", (req, res) => {
  Curriculum_impact.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.put("/:id", (req, res) => {
  const curriculum = {
    Curriculum_impact: req.body && req.body.Curriculum_impact,
    Department: req.body && req.body.Department,
  };

  Curriculum_impact.findByIdAndUpdate(req.params.id, curriculum, {
    new: true,
  })
    .then((updatedCurriculum) => res.json(updatedCurriculum))
    .catch((error) => res.json({ message: error }));
});

router.delete("/:id", (req, res) => {
  Curriculum_impact.findByIdAndRemove(req.params.id)
    .then((res) => res.status(204).end())
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
