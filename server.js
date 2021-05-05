const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const studentRoute = require("./Routes/students");
const facultyRoute = require("./Routes/faculty");
const collaborations = require("./Routes/collaborations");
const contact = require("./Routes/contact");
const csa = require("./Routes/csa");
const Curriculum_impact = require("./Routes/curint");
const projects = require("./Routes/projects");
const DSISR = require("./Routes/dsisr");
const IGTP = require("./Routes/igtp");
const partners = require("./Routes/partners");
const profint = require("./Routes/profint");
const usac = require("./Routes/usac");
const webinars = require("./Routes/webinars");
const csaincoming = require("./Routes/csaincomingstud");
const concat = require('./Routes/concat');
const path = require('path');
require("dotenv/config");

app.use(express.json());
app.use(cors());
//import routes

app.use("/students", studentRoute);
app.use("/faculty", facultyRoute);
app.use("/collaborations", collaborations);
app.use("/contact", contact);
app.use("/csa", csa);
app.use('/csa-incoming',csaincoming)
app.use("/curriculum-impact", Curriculum_impact);
app.use("/projects", projects);
app.use("/dsisr", DSISR);
app.use("/igtp", IGTP);
app.use("/partners", partners);
app.use("/professional-international", profint);
app.use("/usac", usac);
app.use("/webinars", webinars);
app.use("/contactus",concat);

//Route
app.use("/", (req, res) => {
  res.send("Home Page");
});

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get('*',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  } )
}

port = process.env.PORT || 8001;
app.listen(port, () => {
  console.log(`Connected to localhost ${port}`);
});
