// Header.js
import React from 'react';
import './Header.module.css'; // Import CSS module
import LogoImg from '../images/testLogo.png'

function Header() {
  return (
    <>
      <header className='s_header'>
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
        <div className="s_login-box">
          {/* Text inside the login box */}
          <span className="s_login-text">Login</span>
        </div>
      </header>
    </>
  );
}

export default Header;
