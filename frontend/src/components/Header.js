// Header.js
import React from "react";
import "./Header.module.css"; // Import CSS module
import LogoImg from "../images/testLogo.png";
import { useNavigate } from "react-router-dom";
function Header() {
  const userLogged = JSON.parse(localStorage.getItem("isLoggedIn"));
  const navigate = useNavigate();
  const handleLogin = () => {
    //  Navigate to /
    navigate("/login");
  };
  const handleAddQuestion=()=>{
    navigate("/addquestion")
  }
  const handleLogout=()=>{
    localStorage.clear();
    navigate("/")
  }
  return (
    <>
      <header className="s_header">
        {/* Logo and title text container */}
        <div className="s_logo-container">
          {/* Logo */}
          <div className="s_logo">
            <img src={LogoImg} alt="Your Logo" width="50px" />
          </div>
          {/* Title text */}
          <div className="s_titleText">IntvQuesGen</div>
        </div>
        {/* Login box on the right */}
        {userLogged ? (
          <div>
            <button className="s_login-box s_login-text" onClick={handleAddQuestion}>
              Add Question
            </button>
            <button className="s_login-box s_login-text" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button className="s_login-box s_login-text" onClick={handleLogin}>
              Login
            </button>
          </div>
        )}
        {/* <button className="s_login-box" onClick={navigateLogin}>
          Text inside the login box
          <span className="s_login-text">Login</span>
        </button> */}
      </header>
    </>
  );
}

export default Header;
