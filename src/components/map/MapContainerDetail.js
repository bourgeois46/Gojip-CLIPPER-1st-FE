import React, { useEffect } from 'react';

const MapContainerDetail = ({ searchPlace }) => {
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
                        // 마커의 주소와 위도, 경도 출력
                        console.log("Address: " + place.address_name);
                        console.log("Latitude: " + place.y);
                        console.log("Longitude: " + place.x);
                    });
                }
            });
        }
    }, [searchPlace]);

    return (
        <div id='myMap' style={{
            width: '100%', 
            height: '316px',
            alignItems: 'center',
            border: 'none',
            boxShadow: '#C8C8C8',
            marginTop: '23px',
        }}></div>
    );
}

export default MapContainerDetail;

