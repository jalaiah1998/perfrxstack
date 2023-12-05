const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const subjectData = require("./model/subschema");
const chapterData = require("./model/chapterschema");
const signData = require("./model/sign1")



const app = express()
app.use(express.json())
app.use(cors({ origin: "*" }))

mongoose.connect("mongodb+srv://kunchalajalaiah9:l1SD1Z6WZTpmInEd@cluster0.lhexxr5.mongodb.net/?retryWrites=true&w=majority")
  .then((res) => console.log("db connected"))
  .catch((err) => console.log("err.message"))


// checking server

app.get("/", (req, res) => {
  res.send("hi....")
})



// subject

app.post("/subjectData", async (req, res) => {

  try {
    const {
      name,
      Description,
      subjecttag


    } = req.body;
    let newUser = new subjectData({
      name: name,
      Description: Description,
      subjecttag: subjecttag



    });
    const isUserExit = await subjectData.findOne({ Description: Description });

    newUser.save();
    res.send("Subject created succesfully");
  }

  catch (e) {
    console.log(e.message);
    res.send("Internal server error")
  }
});


app.get("/allsubjectData", async (req, res) => {

  const allUsers = await subjectData.find({})
  res.status(200).send(allUsers)
})


app.delete("/deleteInstitute/:id", async (req, res) => {
  try {
    const id = req.params.id; // Use req.params.id to get the instituteId
    const deletedInstitute = await subjectData.findByIdAndDelete({ _id: id });

    if (deletedInstitute) {
      return res.status(200).json(" Delete successfully");
    } else {
      return res.status(404).json(" Id Not Found");
    }
  } catch (e) {
    console.error(e.message);
    return res.status(500).json(e.message);
  }
});


app.put("/UpdateInstitute/:id", async (req, res) => {
  const { id } = req.params;
  const user = await subjectData.findByIdAndUpdate(id, req.body);

  if (!user) {
    res.status(400).json("User Not Found");
  }
  res.status(200).json("users data updated successfully");
});

// chapter


app.post("/chapterData", async (req, res) => {

  try {
    const {
      name1,
      Description1,
      subjecttag1,
      chaptertag


    } = req.body;
    let newUser = new chapterData({
      name1: name1,
      Description1: Description1,
      subjecttag1: subjecttag1,
      chaptertag: chaptertag


    });
    const isUserExit = await chapterData.findOne({ Description1: Description1 });
    if (isUserExit) {
      return res.send("user already registered");
    }
    newUser.save();
    res.send("Chapter created succesfully");
  }

  catch (e) {
    console.log(e.message);
    res.send("Internal server error")
  }
});


app.get("/allchapterData", async (req, res) => {
  const alluseres = await chapterData.find({})
  res.status(200).send(alluseres)

})

app.delete("/deleteInstitute/:id", async (req, res) => {
  try {
    const id = req.params.id; // Use req.params.id to get the instituteId
    const deletedInstitute = await chapterData.findByIdAndDelete({ _id: id });

    if (deletedInstitute) {
      return res.status(200).json(" Delete successfully");
    } else {
      return res.status(404).json(" Id Not Found");
    }
  } catch (e) {
    console.error(e.message);
    return res.status(500).json(e.message);
  }
});


app.put("/UpdateInstitute/:id", async (req, res) => {
  const { id } = req.params;
  const user = await chapterData.findByIdAndUpdate(id, req.body);

  if (!user) {
    res.status(400).json("User Not Found");
  }
  res.status(200).json("users data updated successfully");
});

// sign schema

app.post("/signData", async (req, res) => {

  try {
    const {
      Name,
      Email,
      Phonenumber,
      pasword,
      confirmpassword,
      Gender

    } = req.body;
    const hashedpassword = await bcrypt.hash(pasword, 10);

    let newUser = new signData({
      Name,
      Email,
      Phonenumber,
      pasword,
      confirmpassword: hashedpassword,
      Gender: ge

    });
    const isUserExit = await signData.findOne({ Email: Email });


    if (isUserExit) {
      return res.send("user already registered");
    }
    newUser.save();
    res.send("Sign created succesfully");
  }


  catch (e) {
    console.log(e.message);
    res.send("Internal server error")
  }
});

app.get("/allsignData", async (req, res) => {

  const allUsers = await signData.find({})
  res.status(200).send(allUsers)
})


app.listen(3051, () => {
  console.log("server runing at 3051")
})