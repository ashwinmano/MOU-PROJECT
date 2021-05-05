const express = require("express");
const router = express.Router();
const partners = require("../models/PartnersSchema");

router.post("/", (req, res) => {
  const _partners = new partners({
    Activities_performed:
      (req.body && req.body.Activities_performed) || "Made a sick rap track",
    Consultancy_amount:
      (req.body && req.body.Consultancy_amount) || "6000000 G's",
    Department: (req.body && req.body.Department) || "Fly",
  });
  try {
    _partners.save().then((result) => {
      console.log("result" + result);
      res.status(200).json({
        partners: result,
      });
    });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", (req, res) => {
  partners.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.put("/:id", (req, res) => {
  const _partners = {
    Activities_performed: req.body && req.body.Activities_performed,
    Consultancy_amount: req.body && req.body.Consultancy_amount,
    Department: req.body && req.body.Department,
  };

  partners
    .findByIdAndUpdate(req.params.id, _partners, {
      new: true,
    })
    .then((updatedPartners) => res.json(updatedPartners))
    .catch((error) => res.json({ message: error }));
});

router.delete("/:id", (req, res) => {
  partners
    .findByIdAndRemove(req.params.id)
    .then((res) => res.status(204).end())
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
