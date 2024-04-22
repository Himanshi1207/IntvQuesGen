const express = require('express');
const Question=require('../models/questions');
const router=express.Router();


//requireAuth middleware will make sure that only people with valid jwt token can upload question 

router.post('/findquestion', async(req, res) => {

    console.log(req.body);
    const {experience,level,subtopic}=req.body;

    try {
        const que = await Question.find( {experience:experience, level:level, subtopic:subtopic});
        console.log(que);
        res.status(200).json({que});
    } 
    catch (error) {
    //   const errors = handleErrors(error);
        console.log('Error ',error);
        res.status(400).json({ error });
    }
})


module.exports=router;