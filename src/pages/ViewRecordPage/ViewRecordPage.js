import React, { useEffect, useState } from "react";
import "./ViewRecordPage.css";
import BottomSheet from "../../components/BottomSheet/BottomSheet";

function ViewRecordPage() {
  const [positions, setPositions] = useState([]);

  // 하드코딩된 위치 데이터
  const clusterPositionsData = {
    positions: [
      { lat: 37.5895, lng: 127.0167 },
      { lat: 37.59, lng: 127.015 },
      { lat: 37.588, lng: 127.018 },
    ],
  };

  useEffect(() => {
    // 클러스터링할 위치 데이터를 가져와서 positions 상태 업데이트
    setPositions(clusterPositionsData.positions);
  }, []);

  useEffect(() => {
    if (positions.length > 0) {
      const script = document.createElement("script");
      script.src =
        "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=6607bd619f830fb2254f539c2c548f5d&libraries=clusterer";
      script.onload = () => {
        kakao.maps.load(() => {
          const mapContainer = document.getElementById("map");
          const options = {
            center: new kakao.maps.LatLng(37.5665, 126.978),
            level: 10, // 확대 레벨
          };
          const map = new kakao.maps.Map(mapContainer, options); // 맵생성

          // 노란색 마커 이미지 URL
          const yellowMarkerImageUrl = "../../assets/images/yellowMarker.png";
          // 노란색 마커 이미지 생성
          const yellowMarkerImage = new kakao.maps.MarkerImage(
            yellowMarkerImageUrl,
            new kakao.maps.Size(24, 35)
          );

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
              image: yellowMarkerImage, // 노란색 마커 이미지 사용
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
        <div id="map" style={{ width: "100%", height: "780px" }}>
          <BottomSheet />
        </div>
      </div>
    </div>
  );
}

export default ViewRecordPage;
