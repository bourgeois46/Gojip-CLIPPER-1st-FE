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
    if (window.kakao && window.kakao.maps && positions.length > 0) {
        const mapContainer = document.getElementById("map");

        window.kakao.maps.load(() => {
            const options = {
                center: new window.kakao.maps.LatLng(37.5665, 126.978),
                level: 10, // 확대 레벨
            };
            const map = new window.kakao.maps.Map(mapContainer, options); // 맵생성

            // 마커 클러스터러 생성
            const clusterer = new window.kakao.maps.MarkerClusterer({
                map: map,
                averageCenter: true,
                minLevel: 10,
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
                    },
                ],
            });

            // positions 배열에 있는 좌표들을 이용하여 마커를 생성하고 클러스터러에 추가
            positions.forEach((pos) => {
                const marker = new window.kakao.maps.Marker({
                    position: new window.kakao.maps.LatLng(pos.lat, pos.lng),
                });
                clusterer.addMarker(marker);
            });
        });
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

