// FormBox.js
import React from 'react';
import './FormBox.module.css'; // Import CSS module

function FormBox() {
  return (
    <>
        <form className="formBox">
        <h2>Post your request</h2>
        <select id="Topics" name="Topics">
            <option value="" disabled="" selected="">
            Topic
            </option>
            <option value="JavaConcepts">Java Concepts</option>
            <option value="OOPs">OOPs</option>
            <option value="JavaEEFrameworks">Java EE Frameworks</option>
            <option value="Databaseconnectivity">
            Database connectivity
            </option>
            <option value="WebDevelopment">Web Development</option>
        </select>
        <select id="LevelOfQues" name="LevelOfQues">
            <option value="" disabled="" selected="">
            Level of Questions
            </option>
            <option value="1to2">1 - 2 year</option>
            <option value="2to5">2 - 5 year</option>
            <option value="above5">5+ year</option>
        </select>
        <select id="LevelOfExperience" name="LevelOfExperience">
            <option value="" disabled="" selected="">
            Level of Experience
            </option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Senior">Senior</option>
        </select>
        <select id="NumberOfQuestions" name="NumberOfQuestions">
            <option value="" disabled="" selected="">
            Number of Questions
            </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
        </select>
        <br />
        <br />
        <input
            className="generateQuestionButton"
            type="submit"
            defaultValue="Generate Questions"
        />
        </form>
    </>
  );
}

export default FormBox;
