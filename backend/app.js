const express = require('express');
const db = require('./db/db');
const dotenv=require('dotenv');
const bodyParser=require('body-parser');
const createQuestion=require('./routes/createQuestion');

dotenv.config();
const app = express();


//connection to database
db();

// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//api's 
app.use(createQuestion);//api to create a new question


app.get('/', (req, res) =>{
    res.send('This is test api!!');
})


const port = 8000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})