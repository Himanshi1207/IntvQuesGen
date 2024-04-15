// Intro.js
import React from 'react';
import './Intro.module.css'; // Import CSS module

function Intro() {
  return (
    <>
        <p>Welcome to </p>
        <p className="mainTextIntv">Interview Question Generator</p>
        <p>
          With our intuitive interface, you can effortlessly customize question
          sets based on your preferred topics, desired difficulty levels, and
          personal experience. Whether it's brushing up on technical concepts,
          honing your problem-solving skills, or refining your behavioral
          responses, our generator provides a diverse array of questions
          meticulously crafted to suit your unique requirements.
        </p>
    </>
  );
}

export default Intro;
