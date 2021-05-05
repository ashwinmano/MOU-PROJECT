const express = require("express");
const router = express.Router();
const ColconfSchema = require("../models/ColconfSchema");
const ColabPublication = require("../models/collabrativePublications");

router.post("/conferences", (req, res) => {
  const conference = new ColconfSchema({
    Conference_theme: (req.body && req.body.Conference_theme) || "Tech",
    Organised_by: (req.body && req.body.Organised_by) || "Vijay",
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

router.get("/conferences", (req, res) => {
  ColconfSchema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.put("/conferences/:id", (req, res) => {
  const conference = {
    Conference_theme: req.body && req.body.Conference_theme,
    Organised_by: req.body && req.body.Organised_by,
  };

  ColconfSchema.findByIdAndUpdate(req.params.id, conference, {
    new: true,
  })
    .then((updatedconference) => res.json(updatedconference))
    .catch((error) => res.json({ message: error }));
});

router.delete("/conferences/:id", (req, res) => {
  ColconfSchema.findByIdAndRemove(req.params.id)
    .then((res) => res.status(204).end())
    .catch((error) => res.json({ message: error }));
});

router.post("/publications", (req, res) => {
  const publication = new ColabPublication({
    Name_of_article: (req.body && req.body.Name_of_article) || "articleName",
    Author: (req.body && req.body.Author) || "Vijay",
    Name_of_journal: (req.body && req.body.Name_of_journal) || "Journal Name",
    Volume_and_issue_no: (req.body && req.body.Volume_and_issue_no) || "5-B",
    Date_of_publication:
      (req.body && req.body.Date_of_publication) || "11/20/2014",
    Affiliation: (req.body && req.body.Affiliation) || "CSA",
    Department: (req.body && req.body.Department) || "Dept",
  });
  try {
    publication.save().then((result) => {
      console.log("result" + result);
      res.status(200).json({
        publication: result,
      });
    });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/publications", (req, res) => {
  ColabPublication.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.put("/publications/:id", (req, res) => {
  const publication = {
    Name_of_article: req.body && req.body.Name_of_article,
    Author: req.body && req.body.Author,
    Name_of_journal: req.body && req.body.Name_of_journal,
    Volume_and_issue_no: req.body && req.body.Volume_and_issue_no,
    Date_of_publication: req.body && req.body.Date_of_publication,
    Affiliation: req.body && req.body.Affiliation,
    Department: req.body && req.body.Department,
  };

  ColabPublication.findByIdAndUpdate(req.params.id, publication, {
    new: true,
  })
    .then((updatedpublication) => res.json(updatedpublication))
    .catch((error) => res.json({ message: error }));
});

router.delete("/publications/:id", (req, res) => {
  ColabPublication.findByIdAndRemove(req.params.id)
    .then((res) => res.status(204).end())
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
