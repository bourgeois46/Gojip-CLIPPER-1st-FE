import React, { useEffect } from 'react';
import MainPage from './pages/MainPage/MainPage';

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <MainPage />
  );
}

export default App;