import React, { useEffect, useState } from "react";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserSidebar from "./components/UserSidebar/UserSidebar";
import GuestSidebar from "./components/GuestSidebar/GuestSidebar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import RecordPage from "./pages/RecordPage/RecordPage";

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarButtonClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    /*
    <>
      <LoginPage />
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </>*/

    /* UserSidebar
    <>
      <MainPage />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="index" element={<RecordPage />} />
          <Route path="/" element={<Layout />} />
          <Route path="/" element={<Layout />} />
          <Route path="/" element={<Layout />} />
          <Route path="/" element={<Layout />} />
        </Route>
      </Routes>
    </>*/

    /* GuestSidebar */
    <>
      <MainPage />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Layout />} />
          <Route path="/" element={<Layout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
