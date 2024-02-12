import React from "react";
import "./LoginPage.css";
import logintext from "../../assets/images/loginText.png";
import loginbutton from "../../assets/images/loginButton.png";
import Nav from "../../components/Nav/Nav";

const LoginPage = () => {
  return (
    <div>
      <Nav />
      <div className="login-page">
        <div className="logintext-container">
          <img src={logintext} alt="logintext" />
        </div>
        <div className="loginorsignup">로그인/회원가입</div>
        <div className="loginbutton-container">
          <img src={loginbutton} alt="loginbutton" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
