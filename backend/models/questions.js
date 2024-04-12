const mongoose = require('mongoose');
const {Schema} = mongoose;



const questionSchema = new Schema({
  question: String,
  answer: String,
  experience: String,
  level: String,
  subtopic: String
});


//creating the model using questionSchema
const Questions=mongoose.model('Questions',questionSchema);

module.exports=Questions;