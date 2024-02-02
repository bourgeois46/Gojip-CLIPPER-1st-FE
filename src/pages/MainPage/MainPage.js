import React from "react";
import "./MainPage.css";
import Nav from "../../components/Nav/Nav";
import LoginPage from "../LoginPage/LoginPage";

const MainPage = () => {
  return (
    <div>
      <div className="main-page">
        <Nav />
        <LoginPage />
      </div>
    </div>
  );
};

export default MainPage;
