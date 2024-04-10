const mongoose = require('mongoose');

var questions = new mongoose.Schema({
  question: String,
  answer: String,
  experience: String,
  level: String,
  subtopic: String
});

mongoose.model('questions', questions);