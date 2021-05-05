const express = require("express");
const router = express.Router();
const csaincoming = require("../models/csaincomingstud");

router.post("/incoming", (req, res) => {
  const CSA = new csaincoming({
    Name_of_person: (req.body && req.body.Name_of_person) || "Vijay",
    From_date: (req.body && req.body.From_date) || "10/04/2021",
    To_date: (req.body && req.body.To_date) || "10/04/2021",
    Purpose_of_visit: (req.body && req.body.Purpose_of_visit) || "Food",
  });
  try {
    CSA.save().then((result) => {
      console.log("result" + result);
      res.status(200).json({
        csa: result,
      });
    });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/incoming", (req, res) => {
  csaincoming.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.put("/incoming/:id", (req, res) => {
  const csa = {
    Name_of_person: req.body && req.body.Name_of_person,
    From_date: req.body && req.body.From_date,
    To_date: req.body && req.body.To_date,
    Purpose_of_visit: req.body && req.body.Purpose_of_visit,
  };

  csaincoming
    .findByIdAndUpdate(req.params.id, csa, {
      new: true,
    })
    .then((updatedcsa) => res.json(updatedcsa))
    .catch((error) => res.json({ message: error }));
});

router.delete("/incoming/:id", (req, res) => {
  csaincoming
    .findByIdAndRemove(req.params.id)
    .then((res) => res.status(204).end())
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
