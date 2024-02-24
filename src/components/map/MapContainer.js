import React, { useEffect } from 'react';

const MapContainer = ({ searchPlace }) => {
    const { kakao } = window;

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=6607bd619f830fb2254f539c2c548f5d&libraries=services';
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                const container = document.getElementById("myMap");
                const options = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3,
                };
                const map = new kakao.maps.Map(container, options);
                const ps = new kakao.maps.services.Places();

                ps.keywordSearch(searchPlace, placesSearchCB);

                function placesSearchCB(data, status, pagination) {
                    if (status === kakao.maps.services.Status.OK) {
                        let bounds = new kakao.maps.LatLngBounds();

                        for (let i = 0; i < data.length; i++) {
                            displayMarker(data[i]);
                            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                        }

                        map.setBounds(bounds);
                    }
                }

                function displayMarker(place) {
                    let marker = new kakao.maps.Marker({
                        map: map,
                        position: new kakao.maps.LatLng(place.y, place.x),
                    });

                    // 마커에 클릭 이벤트 리스너 추가
                    kakao.maps.event.addListener(marker, 'click', function() {
                        // 마커의 주소와 위도, 경도 출력
                        console.log("Address: " + place.address_name);
                        console.log("Latitude: " + place.y);
                        console.log("Longitude: " + place.x);
                    });
                }
            });
        };
    }, [searchPlace]);

    return (
        <div id='myMap' style={{
            width: '333px', 
            height: '333px',
            borderRadius: '100%',
            alignItems: 'center',
            border: 'none',
            boxShadow: '#C8C8C8',
            marginTop: '45px',
            marginLeft: '28px'
        }}></div>
    );
}

export default MapContainer;
