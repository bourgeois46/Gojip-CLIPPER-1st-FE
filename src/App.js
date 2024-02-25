import React, { useEffect, useState } from "react";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Routes, Route, Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import RecordPage from "./pages/RecordPage/RecordPage";
import ViewRecordPage from "./pages/ViewRecordPage/ViewRecordPage";
import MyPage from "./pages/MyPage/MyPage";
import RecordMapSearchPage from "./pages/RecordPage/RecordMapSearchPage";
import ViewRecordDetilPage from "./pages/ViewRecordPage/ViewRecordDetail/ViewRecordDetailPage";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/record" element={<RecordMapSearchPage />} />
          <Route path="/view" element={<ViewRecordPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<LoginPage />} />
      
        </Route>
      </Routes>
    </>
  );
}
export default App;
