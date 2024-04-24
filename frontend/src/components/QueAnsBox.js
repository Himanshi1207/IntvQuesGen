// QueAnsBox.js
import React from 'react';
import './QueAnsBox.module.css'; // Import CSS module

function QueAnsBox(props) {
  const { question, answer } = props;

  return (
    <>
      <div className="s_queAnsBox">
        <div className="s_questions">{question}</div>
        <div className="s_answers">{answer}</div>
      </div>
    </>
  );
}

export default QueAnsBox;
