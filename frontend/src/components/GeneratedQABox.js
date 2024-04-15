// QueAnsBox.js
import React from 'react';
import './GeneratedQABox.module.css'; // Import CSS module
import QueAnsBox from './QueAnsBox';

function GeneratedQABox() {
  return (
    <>
        <div className="blueBox">
        <div className="blueText">Generated Questions and Answers</div>
        </div>
        <div className="questionBox">
            <QueAnsBox />
            <QueAnsBox />
            <QueAnsBox />
            <QueAnsBox />
            <QueAnsBox />
            <QueAnsBox />
        </div>
    </>
  );
}

export default GeneratedQABox;
