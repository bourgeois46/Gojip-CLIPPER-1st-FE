import React from "react";
import "./Nav.css";
import homeyellow from "../../assets/images/homeYellow.png";
import sidebarbutton from "../../assets/images/sidebarButton.png";

const Nav = () => {
  return (
    <div>
      <div className="nav-container">
        <div className="go-home">Go집</div>
      </div>
      <img src={homeyellow} alt="HomeYellow" className="homeyellow-icon" />
      <img
        src={sidebarbutton}
        alt="SidebarButton"
        className="sidebarbutton-icon"
      />
    </div>
  );
};

export default Nav;
