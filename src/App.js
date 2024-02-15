import React, { useEffect, useState } from "react";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserSidebar from "./components/UserSidebar/UserSidebar";
import GuestSidebar from "./components/GuestSidebar/GuestSidebar";
import { Routes, Route, Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import RecordPage from "./pages/RecordPage/RecordPage";
import ViewRecordPage from "./pages/ViewRecordPage/ViewRecordPage";
import MyPage from "./pages/MyPage/MyPage";

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
    /**/
    <>
      <ViewRecordPage />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/record" element={<RecordPage />} />
          <Route path="/view" element={<ViewRecordPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </>

    /* 
    <>
      <LoginPage />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/record" element={<RecordPage />} />
          <Route path="/view" element={<ViewRecordPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
*/
    /* UserSidebar
    <>
      <MainPage />
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/record" element={<RecordPage />} />
          <Route path="/view" element={<ViewRecordPage />} />
          <Route path="/mypage" element={<MyPage />} />
           <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>

    /* GuestSidebar 
    <>
      <MainPage />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Layout />} />
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
    */
  );
}

export default App;
