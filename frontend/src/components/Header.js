// Header.js
import React from 'react';
import './Header.module.css'; // Import CSS module
import LogoImg from '../images/testLogo.png'

function Header() {
  return (
    <>
      <header>
        {/* Logo and title text container */}
        <div className="logo-container">
          {/* Logo */}
          <div className="logo">
            <img src={LogoImg} alt="Your Logo" width="50px" />
          </div>
          {/* Title text */}
          <div className="titleText">IntvQuesGen</div>
        </div>
        {/* Login box on the right */}
        <div className="login-box">
          {/* Text inside the login box */}
          <span className="login-text">Login</span>
        </div>
      </header>
    </>
  );
}

export default Header;
