import React, { useState } from "react";
import "./Nav.css";
import homeyellow from "../../assets/images/homeYellow.png";
import sidebarbutton from "../../assets/images/sidebarButton.png";
import UserSidebar from "../UserSidebar/UserSidebar";
import GuestSidebar from "../GuestSidebar/GuestSidebar";

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarButtonClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="go-home">Go집</div>
      <hr className="bottom-line" />
      <img src={homeyellow} alt="HomeYellow" className="homeyellow-icon" />
      <img
        src={sidebarbutton}
        alt="SidebarButton"
        className="sidebarbutton-icon"
        onClick={handleSidebarButtonClick}
      />
      {/*사용자 정보 따라서 조건문 수정}*/}
      {isSidebarOpen && <UserSidebar />}
      {/*{isSidebarOpen && <GuestSidebar />}*/}
    </div>
  );
};

export default Nav;
