const express = require('express');
const db = require('./db/db');
const bodyParser=require('body-parser');
require('dotenv').config();
const createQuestion=require('./routes/createQuestion');
const registerUser=require('./routes/registerUser');
const loginUser = require('./routes/loginUser');
const findQuestion = require('./routes/findQuestion');
const forgetPassword=require('./routes/forgetPassword');
const getUserQuestions=require('./routes/getUserQuestions');
const editQuestion=require('./routes/editQuestion');
const deleteQuestion=require('./routes/deleteQuestion');

const app = express();

//connection to database
db();

// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//api's 
app.use(createQuestion);//api to create a new question
app.use(registerUser);//api to register new users
app.use(loginUser);//api to login existing users 
app.use(findQuestion); //api to find questions
app.use(forgetPassword);//api to reset the password
app.use(getUserQuestions);//api to retrieve all the questions associated with particular user Id
app.use(editQuestion);//api to edit the questions and their content
app.use(deleteQuestion);//api to delete the particular question

app.get('/', (req, res) =>{
    res.send('This is test api!!');
})


const port = 8000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})