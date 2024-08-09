import React from "react";
import "./MainPage.css";
import main1 from "../../assets/images/main-1.png";
import main2 from "../../assets/images/main-2.png";
import main3 from "../../assets/images/main-3.png";
import main4 from "../../assets/images/main-4.png";
import main5 from "../../assets/images/main-5.png";
import main6 from "../../assets/images/main-6.png";
import main7 from "../../assets/images/main-7.png";
import Fade from "react-reveal/Fade";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="imgs">
        <Fade top delay={0}>
          <img src={main1} alt="main-1" className="main1" />
        </Fade>
        <Fade top delay={600}>
          <img src={main2} alt="main-2" className="main2" />
        </Fade>
        <Fade top delay={1200}>
          <img src={main3} alt="main-3" className="main3" />
        </Fade>
        <Fade top delay={1900}>
          <img src={main4} alt="main-4" className="main4" />
        </Fade>
        <Fade top delay={2500}>
          <img src={main5} alt="main-5" className="main5" />
        </Fade>
        <Fade top delay={300}>
          <img src={main6} alt="main-6" className="main6" />
        </Fade>
        <Fade top delay={700}>
          <img src={main7} alt="main-7" className="main7" />
        </Fade>
      </div>
    </div>
  );
};

export default MainPage;
