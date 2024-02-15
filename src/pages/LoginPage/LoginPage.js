import React from "react";
import "./LoginPage.css";
import logintext from "../../assets/images/loginText.png";
import loginbutton from "../../assets/images/loginButton.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="logintext-container">
        <img src={logintext} alt="logintext" />
      </div>
      <div className="loginorsignup">로그인/회원가입</div>
      <div className="loginbutton-container">
        <Link to="/login">
          <img src={loginbutton} alt="loginbutton" />
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
