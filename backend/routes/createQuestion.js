const express = require('express');
const Question=require('../models/questions');
const router=express.Router();


router.post('/uploadquestion', async(req, res) => {

    console.log(req.body);
    const {question,answer,experience,level,subtopic}=req.body;

    try {
        const que = await Question.create( {question, answer, experience, level, subtopic});
        console.log("uploaded successfully");
        res.status(200).json({"message":"Question uploaded !"});
    } 
    catch (error) {
    //   const errors = handleErrors(error);
        console.log('Error ',error);
        res.status(400).json({ error });
    }
})


module.exports=router;