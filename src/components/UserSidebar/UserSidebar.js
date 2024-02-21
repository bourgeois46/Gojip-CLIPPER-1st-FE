import React from "react";
import { NavLink } from "react-router-dom";
import "./UserSidebar.css";
import UserSidebarItem from "./UserSidebarItem.js";
import sidelogo from "../../assets/images/sideLogo.png";

const UserSidebar = () => {
  const menus = [
    { name: "기록 하기", path: "/record" },
    { name: "기록 보기", path: "/view" },
    { name: "도움 받기", path: "/" },
    { name: "집구하는 팁", path: "/" },
    { name: "마이페이지", path: "/mypage" },
  ];

  return (
    <div className="usersidebar_container">
      <div className="usersidebar">
        <div className="img-container">
          <img src={sidelogo} alt="sidelogo" className="side-logo" />
          {menus.map((menu, index) => {
            return (
              <NavLink
                className="nav-link"
                to={menu.path}
                key={index}
                style={{ color: "black", textDecoration: "none" }}
              >
                <UserSidebarItem menu={menu} />
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
