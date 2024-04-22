// Intro.js
import React from 'react';
import './Intro.module.css'; // Import CSS module
import SelfWritingText from './SelfWritingText';



function Intro() {
  return (
    <>
        <p className='s_welcomePara'>Welcome to </p>
        <div className='s_borderBottom'>
          <SelfWritingText />
        </div>
        <p className='s_introPara'>
        Introducing our Interview Question Generator – the ultimate tool for interviewers looking to streamline the hiring process with precision and ease!

        Conducting technical interviews can be a challenging task, requiring meticulous preparation and a deep understanding of the candidate's skillset. That's why we've developed the Interview Question Generator, a solution designed to simplify the interview process while ensuring a thorough assessment of candidates' abilities.

        With our Interview Question Generator, interviewers gain access to a comprehensive database of curated interview questions, carefully tailored to cover a wide range of technical topics. From Java concepts to object-oriented programming and web development intricacies, our generator provides questions that address the key areas relevant to your hiring needs.
        </p>
    </>
  );
}

export default Intro;
