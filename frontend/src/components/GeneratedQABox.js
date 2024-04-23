// QueAnsBox.js
import React from 'react';
import './GeneratedQABox.module.css'; 
import QueAnsBox from './QueAnsBox';

function GeneratedQABox() {
  // default question, answer 
  const defaultQA = [
    {
      question: "What is the difference between a compiler and an interpreter?",
      answer: "A compiler translates the entire source code into machine code before execution, producing an executable file, whereas an interpreter translates the source code line-by-line during execution."
    },
    {
      question: "What is the time complexity of binary search?",
      answer: "The time complexity of binary search is O(log n), where n is the number of elements in the sorted array."
    },
    {
      question: "What is the purpose of an operating system?",
      answer: "An operating system manages computer hardware and software resources, provides services for computer programs, and acts as an intermediary between users and the computer hardware."
    },
    {
      question: "What is a data structure?",
      answer: "A data structure is a way of organizing and storing data in a computer so that it can be accessed and modified efficiently. Examples include arrays, linked lists, stacks, queues, trees, and graphs."
    },
    {
      question: "What is object-oriented programming (OOP)?",
      answer: "Object-oriented programming is a programming paradigm based on the concept of \"objects\", which can contain data in the form of fields (attributes or properties), and code in the form of procedures (methods). OOP allows for the creation of modular and reusable code by emphasizing objects and their interactions."
    }
  ]
  
  return (
    <>
        <div className='s_qaBox'>
          <div className="s_blueBox">
            <div className="s_blueText">Generated Questions and Answers</div>
          </div>
          <div className="s_questionBox">
            {defaultQA.map((qa, index) => (
              <QueAnsBox key={index} question={qa.question} answer={qa.answer} />
            ))}
          </div>
        </div>
    </>
  );
}

export default GeneratedQABox;
