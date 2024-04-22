const mongoose = require('mongoose');
const {Schema} = mongoose;



const questionschema = new Schema({
  question: String,
  answer: String,
  experience: String,
  level: String,
  subtopic: String
});


//creating the model using questionSchema
const Questions=mongoose.model("Questions",questionschema);

module.exports=Questions;