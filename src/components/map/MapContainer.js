import React, { useEffect } from "react";

const MapContainer = ({ searchPlace, setAddressName }) => {
    useEffect(() => {
        if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(() => {
                const container = document.getElementById("myMap");
                const options = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3,
                };
                const map = new window.kakao.maps.Map(container, options);
                const ps = new window.kakao.maps.services.Places();

                ps.keywordSearch(searchPlace, placesSearchCB);

                function placesSearchCB(data, status, pagination) {
                    if (status === window.kakao.maps.services.Status.OK) {
                        let bounds = new window.kakao.maps.LatLngBounds();

                        for (let i = 0; i < data.length; i++) {
                            displayMarker(data[i]);
                            bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
                        }

                        map.setBounds(bounds);
                    }
                }

                function displayMarker(place) {
                    let marker = new window.kakao.maps.Marker({
                        map: map,
                        position: new window.kakao.maps.LatLng(place.y, place.x),
                    });

                    // 마커에 클릭 이벤트 리스너 추가
                    window.kakao.maps.event.addListener(marker, 'click', function() {
                        // 마커의 주소를 상태로 저장
                        setAddressName(place.address_name);
                    });
                }
            });
        }
    }, [searchPlace, setAddressName]);

  return (
    <div
      id="myMap"
      style={{
        width: "333px",
        height: "333px",
        borderRadius: "100%",
        alignItems: "center",
        border: "none",
        boxShadow: "#C8C8C8",
        marginTop: "45px",
        marginLeft: "28px",
      }}
    ></div>
  );
};

export default MapContainer;
