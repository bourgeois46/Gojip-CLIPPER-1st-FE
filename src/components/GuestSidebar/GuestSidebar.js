import React from "react";
import { Link } from "react-router-dom";
import "./GuestSidebar.css";
import loginbutton from "../../assets/images/loginButton.png";

const GuestSidebar = ({ setIsSidebarOpen }) => {
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="guestsidebar_container">
      <div className="guestsidebar">
        <div className="img-container"></div>
        <div>
          <Link to="/login" onClick={closeSidebar}>
            <img src={loginbutton} alt="loginbutton" className="loginbutton" />
          </Link>
          <div className="go-login-text">로그인하러가기</div>
        </div>
      </div>
    </div>
  );
};

export default GuestSidebar;
