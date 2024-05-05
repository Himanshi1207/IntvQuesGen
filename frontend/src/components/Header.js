import React, { useState, useRef, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import "./Header.module.css";
import LogoImg from "../images/testLogo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const userLogged = JSON.parse(localStorage.getItem("isLoggedIn"));
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const [userPic, setUserpic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  // setUserpic(user.pic);

  // console.log(user);
  const handleLogin = () => {
    navigate("/login");
  };

  const handleMyQuestions = () => {
    navigate("/myQuestions");
  };

  const handleAddQuestion = () => {
    navigate("/addquestion");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleProfileClick = () => {
    
    setShowOptions(!showOptions);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    if(userLogged)
      setUserpic(user.pic);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="s_header">
        <div className="s_logo-container">
          <div className="s_logo">
            <img src={LogoImg} alt="Your Logo" width="50px" />
          </div>
          <div className="s_titleText">IntvQuesGen</div>
        </div>
        {userLogged ? (
          <div
            className="s_profile-icon"
            onClick={handleProfileClick}
            ref={dropdownRef}
          >
            <img src={userPic} className="s_ProfileImage" alt="Profile" />
            {showOptions && (
              <div className={`s_profile-options ${showOptions ? "show" : ""}`}>
                <div className="s_profile-option" onClick={handleMyQuestions}>
                  My Questions
                </div>
                <div className="s_profile-option" onClick={handleAddQuestion}>
                  Add Question
                </div>
                <div className="s_profile-option" onClick={handleLogout}>
                  Logout
                </div>
              </div>
            )}
          </div>
        ) : (
          <button className="s_login-box s_login-text" onClick={handleLogin}>
            Login
          </button>
        )}
      </header>
    </>
  );
}

export default Header;
