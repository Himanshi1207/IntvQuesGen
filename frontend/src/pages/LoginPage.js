import React, { useState } from "react";
import "./LoginPage.css";
import { RiCloseLine } from "react-icons/ri";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
const LoginPage = ({setIsOpen}) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="h_outer_div">
      <div className="h_container">
        <div className="h_topic">Login</div>
        <button className="h_cross" onClick={() => setIsOpen(false)}>
          <RiCloseLine style={{ marginBottom: "-3px" }} />
        </button>
        <form>
          <label className="h_label">Email:</label>
          <br />
          <input
            className="h_input"
            placeholder="abc@gmail.com"
            type="email"
            name="email"
          />
          <br />
          <label className="h_label">Password</label>
          <br />
          <div className="h_password h_input">
            <input
              className="h_input_password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <FontAwesomeIcon
              className="h_icon"
              icon={showPassword ? faEyeSlash : faEye}
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className="h_forgotpass">Forgot Password?</div>
          <br />
          <div className="h_button_div">
            <input className="h_button" type="submit" value="Login" />
          </div>
          <div className="h_signup">
            Don't have an account? <span className="h_signup_link">SignUp</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
