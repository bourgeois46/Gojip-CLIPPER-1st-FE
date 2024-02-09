import React from "react";
import { NavLink } from "react-router-dom";
import "./GuestSidebar.css";
import GuestSidebarItem from "./GuestSidebarItem.js";
import Footer from "../Footer/Footer.js";
import loginbutton from "../../assets/images/loginButton.png";

function GuestSidebar() {
  const menus = [
    { name: "도움 받기", path: "/", id: 0 },
    { name: "집구하는 팁", path: "/", id: 1 },
  ];

  return (
    <div className="guestsidebar_container">
      <div className="guestsidebar">
        <div className="img-container">
          <div className="navlink_container">
            {menus.map((menu, id) => (
              <NavLink
                className="nav-link"
                to={menu.path}
                key={id}
                exact
                style={{ color: "black", textDecoration: "none" }}
                //activeStyle={{ color: "black" }}
              >
                <GuestSidebarItem menu={menu} />
              </NavLink>
            ))}
          </div>
        </div>
        <div>
          <img src={loginbutton} alt="loginbutton" className="loginbutton" />
          <div className="go-login-text">로그인하러가기</div>
        </div>
      </div>
    </div>
  );
}

export default GuestSidebar;
