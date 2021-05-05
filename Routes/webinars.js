const express = require("express");
const router = express.Router();
const webinars = require("../models/webinars");

router.post("/", (req, res) => {
  const _webinars = new webinars({
    Webinar: (req.body && req.body.Webinar) || " Techmology",
    Speaker: (req.body && req.body.Speaker) || " Jay Sun",
    Organised_on: (req.body && req.body.Organised_on) || "05/05/20",
    Organised_by: (req.body && req.body.Organised_by) || " Jay Sun Junior",
  });
  try {
    _webinars.save().then((result) => {
      console.log("result" + result);
      res.status(200).json({
        webinars: result,
      });
    });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", (req, res) => {
  webinars.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.put("/:id", (req, res) => {
  const _webinar = {
    Webinar: req.body && req.body.Webinar,
    Speaker: req.body && req.body.Speaker,
    Organised_on: req.body && req.body.Organised_on,
    Organised_by: req.body && req.body.Organised_by,
  };

  webinars
    .findByIdAndUpdate(req.params.id, _webinar, {
      new: true,
    })
    .then((updatedweb) => res.json(updatedweb))
    .catch((error) => res.json({ message: error }));
});

router.delete("/:id", (req, res) => {
  webinars
    .findByIdAndRemove(req.params.id)
    .then((res) => res.status(204).end())
    .catch((error) => res.json({ message: error }));
});
module.exports = router;
