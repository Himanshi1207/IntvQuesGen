// QueAnsBox.js
import React, { useEffect, useState, useRef } from "react";
import "./GeneratedQABox.module.css";
import QueAnsBox from "./QueAnsBox";
import {} from "@fortawesome/react-fontawesome";
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";
function GeneratedQABox(props) {
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
  const componentPDF = useRef();
  let QAData = props.QAData;
  let qaTitle = props.qaTitle;
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: qaTitle,
  });
  return (
    <>
      <div className="s_qaBox">
        <div className="s_blueBox">
          <div className="s_blueText">{qaTitle}</div>
          {isLoggedIn ? (
            <button onClick={generatePDF} className="h_download_button">
              Download
            </button>
          ) : (
            <div></div>
          )}
        </div>
        <div ref={componentPDF} style={{ width: "100%" }}>
          <div className="s_questionBox">
            {QAData.map((qa, index) => (
              <QueAnsBox
                key={index}
                question={qa.question}
                answer={qa.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default GeneratedQABox;
