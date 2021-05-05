const express = require("express");
const router = express.Router();
const USAC = require("../models/USACSchema");

router.post("/", (req, res) => {
  const _USAC = new USAC({
    Name_of_person: (req.body && req.body.Name_of_person) || " Jay Sun",
    Home_university: (req.body && req.body.Home_university) || "Home Uni",
    Country: (req.body && req.body.Country) || "Pakistan",
    Arrival_date: (req.body && req.body.Arrival_date) || "05/05/2020",
    dEPARTURE_DATE: (req.body && req.body.dEPARTURE_DATE) || "05/05/2020",
    Remarks: (req.body && req.body.Remarks) || "was aigh",
  });
  try {
    _USAC.save().then((result) => {
      console.log("result" + result);
      res.status(200).json({
        USAC: result,
      });
    });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", (req, res) => {
  USAC.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.put("/:id", (req, res) => {
  const _usac = {
    Name_of_person: req.body && req.body.Name_of_person,
    Home_university: req.body && req.body.Home_university,
    Country: req.body && req.body.Country,
    Arrival_date: req.body && req.body.Arrival_date,
    dEPARTURE_DATE: req.body && req.body.dEPARTURE_DATE,
    Remarks: req.body && req.body.Remarks,
  };

  USAC.findByIdAndUpdate(req.params.id, _usac, {
    new: true,
  })
    .then((updatedusac) => res.json(updatedusac))
    .catch((error) => res.json({ message: error }));
});

router.delete("/:id", (req, res) => {
  USAC.findByIdAndRemove(req.params.id)
    .then((res) => res.status(204).end())
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
