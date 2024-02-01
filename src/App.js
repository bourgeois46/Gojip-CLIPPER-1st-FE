import React, { useEffect } from 'react';
import RecordPage from './pages/RecordPage/RecordPage';

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <RecordPage />
  );
}

export default App;