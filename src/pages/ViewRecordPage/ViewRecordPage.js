import React, { useEffect, useState } from "react";
import "./ViewRecordPage.css";
import BottomSheet from "../../components/BottomSheet/BottomSheet";

function ViewRecordPage() {
  const [positions, setPositions] = useState([]);
  const [positionsA, setPositionsA] = useState([]);
  const [positionsB, setPositionsB] = useState([]);
  const [positionsC, setPositionsC] = useState([]);

  // 하드코딩된 위치 데이터
  const clusterPositionsData = {
    positions: [
      // 종로구
      { lat: 37.6549, lng: 127.0474 },
      { lat: 37.6434, lng: 127.0579 },
      { lat: 37.6379, lng: 127.0421 },
      { lat: 37.6559, lng: 127.0574 },
      { lat: 37.6443, lng: 127.0569 },
      { lat: 37.6374, lng: 127.0522 },
    ],
    positionsA: [
      // 노원구
      { lat: 37.5754, lng: 126.9779 },
      { lat: 37.5723, lng: 126.9824 },
    ],
    positionsB: [
      // 파주
      { lat: 37.7485, lng: 126.7858 },
      { lat: 37.7412, lng: 126.7925 },
      { lat: 37.7327, lng: 126.7992 },
      { lat: 37.7253, lng: 126.8059 },
      { lat: 37.7179, lng: 126.8127 },
      { lat: 37.7105, lng: 126.8194 },
      { lat: 37.7031, lng: 126.8261 },
    ],
    positionsC: [
      // 동두천
      { lat: 37.9514, lng: 126.9291 },
      { lat: 37.9472, lng: 126.9332 },
      { lat: 37.9383, lng: 126.9302 },
      { lat: 37.9352, lng: 126.9261 },
      { lat: 37.9283, lng: 126.9375 },
    ],
  };

  useEffect(() => {
    // 클러스터링할 위치 데이터를 가져와서 positions 상태 업데이트
    setPositions(clusterPositionsData.positions);
    setPositionsA(clusterPositionsData.positionsA);
    setPositionsB(clusterPositionsData.positionsB);
    setPositionsC(clusterPositionsData.positionsC);
  }, []);

  useEffect(() => {
    if (
      positions.length > 0 ||
      positionsA.length > 0 ||
      positionsB.length > 0 ||
      positionsC.length > 0
    ) {
      if (window.kakao && window.kakao.maps && positions.length > 0) {
        const mapContainer = document.getElementById("map");

        window.kakao.maps.load(() => {
          const options = {
            center: new kakao.maps.LatLng(37.5665, 126.978),
            level: 10, // 확대 레벨
          };
          const map = new window.kakao.maps.Map(mapContainer, options); // 맵생성

          // 마커 클러스터러 생성
          const clusterer = new window.kakao.maps.MarkerClusterer({
            map: map,
            averageCenter: true,
            minLevel: 10,
            texts: ["종로구 6"],
            styles: [
              {
                width: "70px",
                height: "70px",
                background: "#FFEF64",
                textAlign: "center",
                lineHeight: "70px",
                fontSize: "15px",
                fontWeight: "bold",
                borderRadius: "50%",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                opacity: "0.8",
              },
            ],
          });

          const clustererA = new window.kakao.maps.MarkerClusterer({
            map: map,
            averageCenter: true,
            minLevel: 10,
            texts: ["노원구 2"],
            styles: [
              {
                width: "70px",
                height: "70px",
                background: "#FFEF64",
                textAlign: "center",
                lineHeight: "70px",
                fontSize: "15px",
                fontWeight: "bold",
                borderRadius: "50%",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                opacity: "0.8",
              },
            ],
          });

          const clustererB = new window.kakao.maps.MarkerClusterer({
            map: map,
            averageCenter: true,
            minLevel: 10,
            texts: ["파주 7"],
            styles: [
              {
                width: "70px",
                height: "70px",
                background: "#FFEF64",
                textAlign: "center",
                lineHeight: "70px",
                fontSize: "15px",
                fontWeight: "bold",
                borderRadius: "50%",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                opacity: "0.8",
              },
            ],
          });

          const clustererC = new window.kakao.maps.MarkerClusterer({
            map: map,
            averageCenter: true,
            minLevel: 10,
            texts: ["동두천 5"],
            styles: [
              {
                width: "70px",
                height: "70px",
                background: "#FFEF64",
                textAlign: "center",
                lineHeight: "70px",
                fontSize: "15px",
                fontWeight: "bold",
                borderRadius: "50%",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                opacity: "0.8",
              },
            ],
          });

          positions.forEach((pos) => {
            const marker = new window.kakao.maps.Marker({
              position: new window.kakao.maps.LatLng(pos.lat, pos.lng),
            });
            clusterer.addMarker(marker);
          });

          positionsA.forEach((pos) => {
            const marker = new window.kakao.maps.Marker({
              position: new window.kakao.maps.LatLng(pos.lat, pos.lng),
            });
            clustererA.addMarker(marker);
          });

          positionsB.forEach((pos) => {
            const marker = new window.kakao.maps.Marker({
              position: new window.kakao.maps.LatLng(pos.lat, pos.lng),
            });
            clustererB.addMarker(marker);
          });

          positionsC.forEach((pos) => {
            const marker = new window.kakao.maps.Marker({
              position: new window.kakao.maps.LatLng(pos.lat, pos.lng),
            });
            clustererC.addMarker(marker);
          });
        });
      }
      //document.head.appendChild(script);
    }
  }, [positions, positionsA, positionsB, positionsC]);

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
