import React, { useEffect, useState } from "react";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Routes, Route, Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import RecordPage from "./pages/RecordPage/RecordPage";
import ViewRecordPage from "./pages/ViewRecordPage/ViewRecordPage";
import MyPage from "./pages/MyPage/MyPage";
import RecordMapSearchPage from "./pages/RecordPage/RecordMapSearchPage";
import ViewRecordDetailPage from "./pages/ViewRecordPage/ViewRecordDetail/ViewRecordDetailPage";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

function App() {
  const [mapLoaded, setMapLoaded] = useState(false);

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
    // 카카오 지도 API 스크립트 로드
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=6607bd619f830fb2254f539c2c548f5d&libraries=services,clusterer";
    document.head.appendChild(script);

    script.onload = () => {
      setMapLoaded(true);
    };
  }, []);

  return mapLoaded ? (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/record" element={<RecordMapSearchPage />} />
          <Route path="/view" element={<ViewRecordPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/check" element={<RecordPage />} />
          <Route path="/viewdetail" element={<ViewRecordDetailPage />} />
        </Route>
        <Route path="/oauth2/callback/kakao" element={<LoginPage />} />
      </Routes>
    </>
  ) : null;
}
export default App;
