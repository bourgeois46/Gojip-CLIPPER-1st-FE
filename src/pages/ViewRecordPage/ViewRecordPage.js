import React, { useEffect, useState } from "react";
import "./ViewRecordPage.css";
import BottomSheet from "../../components/BottomSheet/BottomSheet";

function ViewRecordPage() {
  const [positions, setPositions] = useState([]);

  // 하드코딩된 위치 데이터
  const clusterPositionsData = {
    positions: [
      { lat: 36.2683, lng: 127.6358 },
      { lat: 36.27, lng: 127.63 },
      { lat: 36.275, lng: 127.64 },
      // 추가적인 위치 데이터가 있다면 이어서 나열합니다.
    ],
  };

  useEffect(() => {
    // 클러스터링할 위치 데이터를 가져와서 positions 상태를 업데이트합니다.
    setPositions(clusterPositionsData.positions);
  }, []);

  useEffect(() => {
    if (positions.length > 0) {
      const script = document.createElement("script");
      script.src =
        "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=6607bd619f830fb2254f539c2c548f5d";
      script.onload = () => {
        kakao.maps.load(() => {
          const mapContainer = document.getElementById("map");
          const options = {
            center: new kakao.maps.LatLng(36.2683, 127.6358), // 좌표설정
            level: 14,
          };
          const map = new kakao.maps.Map(mapContainer, options); // 맵생성

          // 마커 클러스터러 생성
          const clusterer = new kakao.maps.MarkerClusterer({
            map: map,
            averageCenter: true,
            minLevel: 10,
          });

          // positions 배열에 있는 좌표들을 이용하여 마커를 생성하고 클러스터러에 추가
          positions.forEach((pos) => {
            const marker = new kakao.maps.Marker({
              position: new kakao.maps.LatLng(pos.lat, pos.lng),
            });
            clusterer.addMarker(marker);
          });
        });
      };
      document.head.appendChild(script);
    }
  }, [positions]);

  return (
    <div className="record-page">
      <div className="text">기록 보기</div>
      <div className="map-container">
        <div id="map" style={{ width: "100%", height: "450px" }}>
          <BottomSheet />
        </div>
        ;
      </div>
      ;
    </div>
  );
}

export default ViewRecordPage;
