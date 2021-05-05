const express = require("express");
const router = express.Router();
const funProjSchema = require("../models/funProjSchema");
const NOnFundedSchema = require("../models/nfunprojSchema");

router.post("/funded", (req, res) => {
  const funProj = new funProjSchema({
    Project_name: (req.body && req.body.Project_name) || "Test Project",
    Team_members: (req.body && req.body.Team_members) || "5 members",
    Project_status: (req.body && req.body.Project_status) || "High",
    Project_start_date:
      (req.body && req.body.Project_start_date) || "08/10/2020",
    Project_end_date: (req.body && req.body.Project_end_date) || "08/10/2020",
    Project_grant: (req.body && req.body.Project_grant) || 56000,
    Department: (req.body && req.body.Department) || "Bio",
  });
  try {
    funProj.save().then((result) => {
      console.log("result" + result);
      res.status(200).json({
        Project: result,
      });
    });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/funded", (req, res) => {
  funProjSchema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.put("/funded/:id", (req, res) => {
  const funproj = {
    Project_name: req.body && req.body.Project_name,
    Team_members: req.body && req.body.Team_members,
    Project_status: req.body && req.body.Project_status,
    Project_start_date: req.body && req.body.Project_start_date,
    Project_end_date: req.body && req.body.Project_end_date,
    Project_grant: req.body && req.body.Project_grant,
    Department: req.body && req.body.Department,
  };

  funProjSchema
    .findByIdAndUpdate(req.params.id, funproj, {
      new: true,
    })
    .then((updatedproj) => res.json(updatedproj))
    .catch((error) => res.json({ message: error }));
});

router.delete("/funded/:id", (req, res) => {
  funProjSchema
    .findByIdAndRemove(req.params.id)
    .then((res) => res.status(204).end())
    .catch((error) => res.json({ message: error }));
});

router.post("/non-funded", (req, res) => {
  const nonfunProj = new NOnFundedSchema({
    Project_name: (req.body && req.body.Project_name) || "Test Project",
    Team_members: (req.body && req.body.Team_members) || "5 members",
    Project_status: (req.body && req.body.Project_status) || "High",
    Project_start_date:
      (req.body && req.body.Project_start_date) || "08/10/2020",
    Project_end_date: (req.body && req.body.Project_end_date) || "08/10/2020",
    Project_grant: (req.body && req.body.Project_grant) || 56000,
    Department: (req.body && req.body.Department) || "Bio",
  });
  try {
    nonfunProj.save().then((result) => {
      console.log("result" + result);
      res.status(200).json({
        Project: result,
      });
    });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/non-funded", (req, res) => {
  NOnFundedSchema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.put("/non-funded/:id", (req, res) => {
  const nfunproj = {
    Project_name: req.body && req.body.Project_name,
    Team_members: req.body && req.body.Team_members,
    Project_status: req.body && req.body.Project_status,
    Project_start_date: req.body && req.body.Project_start_date,
    Project_end_date: req.body && req.body.Project_end_date,
    Project_grant: req.body && req.body.Project_grant,
    Department: req.body && req.body.Department,
  };

  NOnFundedSchema.findByIdAndUpdate(req.params.id, nfunproj, {
    new: true,
  })
    .then((updatedproj) => res.json(updatedproj))
    .catch((error) => res.json({ message: error }));
});

router.delete("/non-funded/:id", (req, res) => {
  NOnFundedSchema.findByIdAndRemove(req.params.id)
    .then((res) => res.status(204).end())
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
