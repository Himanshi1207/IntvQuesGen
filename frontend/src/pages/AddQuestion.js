import React, { useMemo, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import "./AddQuestion.css";
const AddQuestion = ({ setIsOpen }) => {
  const topics = [
    "Core Java",
    "OOPS",
    "Java EE Frameworks",
    "Database Connectivity",
    "Web Development",
  ];
  const lvlOfExp = ["0 YOE", "1-2 YOE", "3-4 YOE", "5+ YOE"];
  const lvlOfQues = ["Beginner", "Medium", "Hard"];

  const [topic, setTopic] = useState("");

  return (
    <div className="h_outer_div" onClick={() => setIsOpen(false)}>
      <div className="h_container">
        <div className="h_topic">Add Question</div>
        <button className="h_cross" onClick={() => setIsOpen(false)}>
          <RiCloseLine style={{ marginBottom: "-3px" }} />
        </button>
        <form className="h_form">
          <label className="h_dropdown_topic">Topics</label>
          <DropDownList
            className="h_dropdown_options"
            data={topics}
            onChange={(e) => setTopic(e.value)}
          />
          <label className="h_dropdown_topic">Level Of Experience</label>
          <DropDownList
            className="h_dropdown_options"
            data={lvlOfExp}
            onChange={(e) => setTopic(e.value)}
          />
          <label className="h_dropdown_topic">Level Of Question</label>
          <DropDownList
            className="h_dropdown_options"
            data={lvlOfQues}
            onChange={(e) => setTopic(e.value)}
          />
          <div className="h_button_div">
            <input className="h_button" type="submit" value="Add" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuestion;
