import React, { useEffect, useState } from "react";
import "./RecordMapSearchPage.css";
import search_icon from "../../assets/images/icon_search.png";
import MapContainer from "../../components/map/MapContainer";
import { NavLink, Link } from "react-router-dom";
import { saveAddress } from '../../api/saveAddress';

function RecordMapSearchPage() {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");
  const [addressName, setAddressName] = useState(localStorage.getItem('address'));

  useEffect(() => {
    setAddressName(localStorage.getItem('address'));
  }, []);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    //setInputText("");
  };

  return (
    <div className="recordSearchPage">
      <div className="cloumn">
        <div className="title">기록하기</div>
        <div className="detail">기록할 주소를 입력해주세요.</div>
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            className="search-input"
            type="text"
            placeholder="도로명, 상세주소"
            onChange={onChange}
            value={inputText}
          />
          <button type="submit" className="search-btn">
            <img
              alt="search_icon"
              src={search_icon}
              style={{ width: "24px" }}
            />
          </button>
        </form>

        <MapContainer className="map-circle" searchPlace={place} setAddressName={setAddressName} />
        <Link to={{
  pathname: "/check",
}}>
  <button className="btn" onClick={() => saveAddress(addressName)}>이 집 체크하러가기</button>
</Link>
      </div>
    </div>
  );
}

export default RecordMapSearchPage;
