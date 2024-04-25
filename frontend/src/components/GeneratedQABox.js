// QueAnsBox.js
import React from 'react';
import './GeneratedQABox.module.css'; 
import QueAnsBox from './QueAnsBox';

function GeneratedQABox(props) {
  let QAData = props.QAData;
  let qaTitle = props.qaTitle;
  
  return (
    <>
        <div className='s_qaBox'>
          <div className="s_blueBox">
            <div className="s_blueText">{qaTitle}</div>
          </div>
          <div className="s_questionBox">
            {QAData.map((qa, index) => (
              <QueAnsBox key={index} question={qa.question} answer={qa.answer} />
            ))}
          </div>
        </div>
    </>
  );
}

export default GeneratedQABox;
