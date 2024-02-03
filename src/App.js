import React, { useEffect } from "react";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserSidebar from "./components/UserSidebar/UserSidebar";
import GuestSidebar from "./components/GuestSidebar/GuestSidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    /* <LoginPage /> */

    /* UserSidebar 
    <>
      <MainPage />
      <div className="App">
        <BrowserRouter>
          <UserSidebar />
          <Routes>
            <Route path="/" element={UserSidebar} />
            <Route path="/" element={UserSidebar} />
            <Route path="/" element={UserSidebar} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
*/
    /* GuestSidebar */
    <>
      <MainPage />
      <div className="App">
        <BrowserRouter>
          <GuestSidebar />
          <Routes>
            <Route path="/" element={GuestSidebar} />
            <Route path="/" element={GuestSidebar} />
            <Route path="/" element={GuestSidebar} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
