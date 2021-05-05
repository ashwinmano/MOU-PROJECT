const express = require("express");
const router = express.Router();
const IGTP = require("../models/IGTPSchema");

router.post("/", (req, res) => {
  const _IGTP = new IGTP({
    Name_of_person: (req.body && req.body.Name_of_person) || "Jaydeep",
    Home_university: (req.body && req.body.Home_university) || "UMast",
    Country: (req.body && req.body.Country) || "USA",
    Arrival_date: (req.body && req.body.Arrival_date) || "08/08/2020",
    dEPARTURE_DATE: (req.body && req.body.dEPARTURE_DATE) || "08/08/2020",
    Remarks: (req.body && req.body.Remarks) || "Cool",
  });
  try {
    _IGTP.save().then((result) => {
      console.log("result" + result);
      res.status(200).json({
        IGTP: result,
      });
    });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", (req, res) => {
  IGTP.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.put("/:id", (req, res) => {
  const _IGTP = {
    Name_of_person: req.body && req.body.Name_of_person,
    Home_university: req.body && req.body.Home_university,
    Country: req.body && req.body.Country,
    Arrival_date: req.body && req.body.Arrival_date,
    dEPARTURE_DATE: req.body && req.body.dEPARTURE_DATE,
    Remarks: req.body && req.body.Remarks,
  };

  IGTP.findByIdAndUpdate(req.params.id, _IGTP, {
    new: true,
  })
    .then((updatedigtp) => res.json(updatedDigtp))
    .catch((error) => res.json({ message: error }));
});

router.delete("/:id", (req, res) => {
  IGTP.findByIdAndRemove(req.params.id)
    .then((res) => res.status(204).end())
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
