const express = require('express');
const db = require('./db/db');
const bodyParser=require('body-parser');
require('dotenv').config();
const createQuestion=require('./routes/createQuestion');
const registerUser=require('./routes/registerUser');
const loginUser = require('./routes/loginUser');

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


app.get('/', (req, res) =>{
    res.send('This is test api!!');
})


const port = 8000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})