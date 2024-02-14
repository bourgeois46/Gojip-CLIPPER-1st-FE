import React, { useState, useRef, useEffect } from "react";
import "./Nav.css";
import homeyellow from "../../assets/images/homeYellow.png";
import sidebarbutton from "../../assets/images/sidebarButton.png";
import UserSidebar from "../UserSidebar/UserSidebar";
import GuestSidebar from "../GuestSidebar/GuestSidebar";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      //console.log("window.scrollY", window.scrollY);
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  useEffect(() => {
    // 외부를 클릭했을 때 사이드바가 열려있으면 닫기
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSidebarButtonClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className={`nav ${show && "nav-white"} `}>
        <div className="go-home" onClick={() => (window.location.href = "/")}>
          Go집
        </div>
        <hr className="bottom-line" />
        <img
          src={homeyellow}
          alt="HomeYellow"
          className="homeyellow-icon"
          onClick={() => (window.location.href = "/")}
        />
        <img
          src={sidebarbutton}
          alt="SidebarButton"
          className="sidebarbutton-icon"
          onClick={handleSidebarButtonClick}
        />
      </nav>

      {/*사용자 정보 따라서 조건문 수정}*/}
      {isSidebarOpen && (
        <div ref={sidebarRef}>
          <UserSidebar />
        </div>
      )}

      {/*{isSidebarOpen && (
        <div ref={sidebarRef}>
          <GuestSidebar />
        </div>
      )}*/}
    </>
  );
};

export default Nav;
