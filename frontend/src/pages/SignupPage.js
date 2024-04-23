import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { RiCloseLine } from "react-icons/ri";
import { useToast } from "@chakra-ui/react";
import "./LoginPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignupPage = ({ setIsOpen }) => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmpassword, setConfirmpassword] = useState();
  const [loading, setLoading] = useState();
  const toast = useToast();
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const submitHandler = async () => {
    setLoading(true);
    console.log("enter all fields");
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      console.log("password donot match")
      toast({
        title: "Passwords do not match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/register",
        { name, email, password },
        config
      );
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position:"top",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/login");
    } catch (error) {
      toast({
        title: "Error occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };
  return (
    <div className="h_darkBG">
      <div className="h_centered">
        <div className="h_outer_div">
          <div className="h_container">
            <div className="h_topic">Register</div>
            {/* <button className="h_cross" onClick={() => setIsOpen(false)}>
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button> */}
            <form>
              <label className="h_label">Name:</label>
              <br />
              <input
                className="h_input"
                placeholder="Enter your name"
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <label className="h_label">Email:</label>
              <br />
              <input
                className="h_input"
                placeholder="abc@gmail.com"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label className="h_label">Password</label>
              <br />
              <div className="h_password h_input">
                <input
                  className="h_input_password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
                <FontAwesomeIcon
                  className="h_icon"
                  icon={showPassword ? faEyeSlash : faEye}
                  onClick={togglePasswordVisibility}
                />
              </div>
              <label className="h_label">Confirm Password</label>
              <br />
              <div className="h_password h_input">
                <input
                  className="h_input_password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  placeholder="Confirm your password"
                />
                <FontAwesomeIcon
                  className="h_icon"
                  icon={showPassword ? faEyeSlash : faEye}
                  onClick={togglePasswordVisibility}
                />
              </div>
              {/* <div className="h_forgotpass">Forgot Password?</div> */}
              <br />
              <div className="h_button_div">
                <input
                  className="h_button"
                  type="submit"
                  value="Register"
                  onClick={submitHandler}
                  // isLoading={loading}
                />
              </div>
              <div className="h_signup">
                Already have an account?{" "}
                <span className="h_signup_link" onClick={navigateLogin}>
                  Login
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
