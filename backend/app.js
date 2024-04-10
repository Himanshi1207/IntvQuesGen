const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const questions = require('./models/questions');
const app = express();

mongoose.connect("mongodb+srv://preeti:xGn5iqtHfqEpEVm5@cluster0.zlljc.mongodb.net/UKG-Project").then(() => {
    console.log('Connection Successful');
  
  }).catch((err) => { console.log(err);});


app.post('/uploadquestion', async(req, res) => {
    console.log('inside api')
    console.log(req.body);
    const question = req.body.question;
    const answer = req.body.answer;
    const experience = req.body.experience;
    const level = req.body.level;
    const subtopic = req.body.subtopic;

    try {
        const que = await questions.create( {question, answer, experience, level, subtopic});
        console.log("uploaded successfully");
    } 
    catch (error) {
      const errors = handleErrors(error);
      res.status(400).json({ errors });
    }
})


app.get('/', (req, res) =>{
    console.log('reached at homepage');
})
const port = 8000;
app.listen(port, () => {
    console.log('server is running');
})