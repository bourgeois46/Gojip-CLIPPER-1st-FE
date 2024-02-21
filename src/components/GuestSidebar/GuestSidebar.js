import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./GuestSidebar.css";
import GuestSidebarItem from "./GuestSidebarItem.js";
import loginbutton from "../../assets/images/loginButton.png";

const GuestSidebar = ({ setIsSidebarOpen }) => {
  const menus = [
    { name: "도움 받기", path: "/" },
    { name: "집구하는 팁", path: "/" },
  ];

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="guestsidebar_container">
      <div className="guestsidebar">
        <div className="img-container">
          <div className="navlink_container">
            {menus.map((menu, index) => (
              <NavLink
                className="nav-link"
                to={menu.path}
                key={index}
                style={{ color: "black", textDecoration: "none" }}
              >
                <GuestSidebarItem menu={menu} />
              </NavLink>
            ))}
          </div>
        </div>
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
