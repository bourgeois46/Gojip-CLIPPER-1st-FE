import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./RecordPage.css";
import ChargeBox from "./Charge/ChargeBox";
import HomeBox from "./Home/HomeBox";
import useOneCheckbox from "../../hooks/useOneCheckbox";
import useCheckbox from "../../hooks/useCheckbox";
import RoomBox from "./Room/RoomBox";
import ToiletBox from "./Toilet/ToiletBox";
import OptionsBox from "./Options/OptionsBox";
import PlusBox from "./Plus/PlusBox";
import ImageBox from "./ImagePlus/ImageBox";
import CollectionBox from "./Collection/CollectionBox";
import record_pre from "../../assets/images/record_pre.png";
import { saveChecklist } from '../../api/saveChecklist';
import complete_img from "../../assets/images/complete_img.png";

function RecordPage() {
  const [isOneChecked, handleOneCheckboxChange] = useOneCheckbox();
  const [isChecked, handleCheckboxChange] = useCheckbox();
  const [iconChecked, handleIconCheck] = useOneCheckbox();
  const addressName = localStorage.getItem('address');
  const [checklist, setChecklist] = useState({/* Initial checklist state */});
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(false);


  const handleSaveClick = async () => {
    //const data = await saveChecklist();
    //console.log(data);

    setShowImage(true); // 이미지 표시 시작

    setTimeout(() => {
      setShowImage(false); // 이미지 표시 종료
      navigate("/"); // 메인 페이지로 이동
    }, 1000); // 1초 후 실행
  };


  return (
    <div className="recordPage">
      <div className="content">
          <div className="place-yellow">서울 마포구 노고산동</div>

        <ChargeBox
          isChecked={isOneChecked}
          handleCheckboxChange={handleOneCheckboxChange}
        />
        <HomeBox
          isChecked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
          iconChecked={iconChecked}
          handleIconCheck={handleIconCheck}
        />
        <RoomBox
          isChecked={isOneChecked}
          handleCheckboxChange={handleOneCheckboxChange}
        />
        <ToiletBox />
        <OptionsBox />
        <PlusBox />
        <ImageBox />
        <CollectionBox />
      </div>

      <div className="row-bottom">
        <Link to="/record">
          <img className="record-pre" src={record_pre} alt="record_pre" />
        </Link>
        <button className="btn-bottom" onClick={handleSaveClick}>저장하기</button>
      </div>

      {showImage && (
        <img
          src={complete_img}
          alt="Complete"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
          }}
        />
      )}
    </div>
  );
}

export default RecordPage;
