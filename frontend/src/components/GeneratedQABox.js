// QueAnsBox.js
import React from 'react';
import './GeneratedQABox.module.css'; 
import QueAnsBox from './QueAnsBox';

function GeneratedQABox() {
  return (
    <>
        <div className='s_qaBox'>
          <div className="s_blueBox">
            <div className="s_blueText">Generated Questions and Answers</div>
          </div>
          <div className="s_questionBox">
              <QueAnsBox />
              <QueAnsBox />
              <QueAnsBox />
              <QueAnsBox />
              <QueAnsBox />
              <QueAnsBox />
          </div>
        </div>
    </>
  );
}

export default GeneratedQABox;
