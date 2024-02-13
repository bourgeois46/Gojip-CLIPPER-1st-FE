import React from "react";
import "./MainPage.css";
import main1 from "../../assets/images/main-1.png";
import main2 from "../../assets/images/main-2.png";
import main3 from "../../assets/images/main-3.png";
import main4 from "../../assets/images/main-4.png";
import main5 from "../../assets/images/main-5.png";
import main6 from "../../assets/images/main-6.png";
import main7 from "../../assets/images/main-7.png";

const MainPage = () => {
  return (
    <div className="main-page">
      <img src={main1} alt="main-1" className="main1" />
      <img src={main2} alt="main-2" className="main2" />
      <img src={main3} alt="main-3" className="main3" />
      <img src={main4} alt="main-4" className="main4" />
      <img src={main5} alt="main-5" className="main5" />
      <img src={main6} alt="main-6" className="main6" />
      <img src={main7} alt="main-7" className="main7" />
    </div>
  );
};

export default MainPage;
