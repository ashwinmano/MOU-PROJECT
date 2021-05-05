const express = require("express");
const router = express.Router();
const Contact = require("../models/ContactSchema");

router.post("/", (req, res) => {
  const contact = new Contact({
    Organised_by: (req.body && req.body.Organised_by) || "Vijay",
    Name_of_POC: (req.body && req.body.Name_of_POC) || "Person Name",
    Designation: (req.body && req.body.Designation) || "Leader",
    Phone_number: (req.body && req.body.Phone_number) || "1-800-123",
    Email_Id: (req.body && req.body.Email_Id) || "acer@test.com",
  });
  try {
    contact.save().then((result) => {
      console.log("result" + result);
      res.status(200).json({
        contact: result,
      });
    });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", (req, res) => {
  Contact.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.put("/:id", (req, res) => {
  const contact = {
    Organised_by: req.body && req.body.Organised_by,
    Name_of_POC: req.body && req.body.Name_of_POC,
    Designation: req.body && req.body.Designation,
    Phone_number: req.body && req.body.Phone_number,
    Email_Id: req.body && req.body.Email_Id,
  };

  Contact.findByIdAndUpdate(req.params.id, contact, {
    new: true,
  })
    .then((updatedContact) => res.json(updatedContact))
    .catch((error) => res.json({ message: error }));
});

router.delete("/:id", (req, res) => {
  Contact.findByIdAndRemove(req.params.id)
    .then((res) => res.status(204).end())
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
