const express = require("express");
const router = express.Router();
const DSISRSchema = require("../models/DSISRSchema");

router.post("/", (req, res) => {
  const DSISR = new DSISRSchema({
    Country: (req.body && req.body.Country) || "USA",
    No_of_UG_students: (req.body && req.body.No_of_UG_students) || 42,
    No_of_PG_students: (req.body && req.body.No_of_PG_students) || "53",
    No_of_MPhil_or_PhD_students:
      (req.body && req.body.No_of_MPhil_or_PhD_students) || "68",
    Total_no_of_students: (req.body && req.body.Total_no_of_students) || "100",
  });
  try {
    DSISR.save().then((result) => {
      console.log("result" + result);
      res.status(200).json({
        DSISR: result,
      });
    });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", (req, res) => {
  DSISRSchema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.put("/:id", (req, res) => {
  const dsisr = {
    Country: req.body && req.body.Country,
    No_of_UG_students: req.body && req.body.No_of_UG_students,
    No_of_PG_students: req.body && req.body.No_of_PG_students,
    No_of_MPhil_or_PhD_students:
      req.body && req.body.No_of_MPhil_or_PhD_students,
    Total_no_of_students: req.body && req.body.Total_no_of_students,
  };

  DSISRSchema.findByIdAndUpdate(req.params.id, dsisr, {
    new: true,
  })
    .then((updatedDsisr) => res.json(updatedDsisr))
    .catch((error) => res.json({ message: error }));
});

router.delete("/:id", (req, res) => {
  DSISRSchema.findByIdAndRemove(req.params.id)
    .then((res) => res.status(204).end())
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
