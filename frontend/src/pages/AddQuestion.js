import React, { useMemo, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import "./AddQuestion.css";
import { TextArea } from "@progress/kendo-react-inputs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [lvl, setLvl] = useState("");
  const [exp, setExp] = useState("");
  const [ques, setQues] = useState("");
  const [ans, setAns] = useState("");
  const [user, setUser] = useState();

  const submitHandler = async () => {
    setLoading(true);
    if (!topic || !lvl || !exp || !ques || !ans) {
      console.log("Please fill all the fields");
      setLoading(false);
      return;
    }

    try {
      console.log("trying");
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/uploadquestion",
        { ques, ans, exp, lvl, topic },
        config
      );
      setUser(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("isLoggedIn", true);
      setLoading(false);
      navigate("/");
      console.log(data);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div className="h_darkBG">
      <div className="h_centered">
        <div className="h_outer_div">
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
                onChange={(e) => setExp(e.value)}
              />
              <label className="h_dropdown_topic">Level Of Question</label>
              <DropDownList
                className="h_dropdown_options"
                data={lvlOfQues}
                onChange={(e) => setLvl(e.value)}
              />
              <label className="h_dropdown_topic">Type your question</label>
              <textarea
                name="postContent"
                className="h_textinput "
                rows={4}
                cols={40}
                onChange={(e) => setQues(e.value)}
              />
              <label className="h_dropdown_topic">
                Answer for the question
              </label>
              <textarea
                name="postContent"
                className="h_textinput"
                rows={4}
                cols={40}
                onChange={(e) => setAns(e.value)}
              />
              <div className="h_button_div">
                <input
                  className="h_button"
                  type="submit"
                  value="Add"
                  onClick={submitHandler}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
