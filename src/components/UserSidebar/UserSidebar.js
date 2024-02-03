import React from "react";
import { NavLink } from "react-router-dom";
import "./UserSidebar.css";
import UserSidebarItem from "./UserSidebarItem.js";
import sidelogo from "../../assets/images/sideLogo.png";
import Footer from "../Footer/Footer.js";

function UserSidebar() {
  const menus = [
    { name: "기록 하기", path: "/", id: 0 },
    { name: "기록 보기", path: "/", id: 1 },
    { name: "도움 받기", path: "/", id: 2 },
    { name: "집구하는 팁", path: "/", id: 3 },
    { name: "마이페이지", path: "/", id: 4 },
  ];

  return (
    <div>
      <div className="usersidebar_parent">
        <div className="usersidebar">
          <div className="img-container">
            <img src={sidelogo} alt="sidelogo" />
            {menus.map((menu, id) => {
              return (
                <NavLink className="nav-link" to={menu.path} key={id}>
                  <UserSidebarItem menu={menu} />
                </NavLink>
              );
            })}
            <Footer className="Footer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSidebar;
