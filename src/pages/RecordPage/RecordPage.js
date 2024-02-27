import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

function RecordPage() {
  const [isOneChecked, handleOneCheckboxChange] = useOneCheckbox();
  const [isChecked, handleCheckboxChange] = useCheckbox();
  const [iconChecked, handleIconCheck] = useOneCheckbox();
  const addressName = localStorage.getItem('address');
  const [checklist, setChecklist] = useState({/* Initial checklist state */});

  const handleSaveClick = async () => {
    const data = await saveChecklist();
    console.log(data);
  };


  return (
    <div className="recordPage">
      <div className="content">
          <div className="place-yellow">{addressName}</div>

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
    </div>
  );
}

export default RecordPage;
