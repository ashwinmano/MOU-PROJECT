const express = require("express");
const router = express.Router();
const ProfIntOrg = require("../models/ProfIntOrgSchema");

router.post("/", (req, res) => {
  const _profIntOrg = new ProfIntOrg({
    Activities_performed:
      (req.body && req.body.Activities_performed) || "cool stuff",
    Consultancy_amount: (req.body && req.body.Consultancy_amount) || "50000",
    Department: (req.body && req.body.Department) || "Physics",
  });
  try {
    _profIntOrg.save().then((result) => {
      console.log("result" + result);
      res.status(200).json({
        ProfIntOrg: result,
      });
    });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", (req, res) => {
  ProfIntOrg.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.put("/:id", (req, res) => {
  const profint = {
    Activities_performed: req.body && req.body.Activities_performed,
    Consultancy_amount: req.body && req.body.Consultancy_amount,
    Department: req.body && req.body.Department,
  };

  ProfIntOrg.findByIdAndUpdate(req.params.id, profint, {
    new: true,
  })
    .then((updatedProf) => res.json(updatedProf))
    .catch((error) => res.json({ message: error }));
});

router.delete("/:id", (req, res) => {
  ProfIntOrg.findByIdAndRemove(req.params.id)
    .then((res) => res.status(204).end())
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
