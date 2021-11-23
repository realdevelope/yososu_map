/*global kakao*/

import React, { useEffect } from "react";
const { kakao } = window;

console.log(kakao);

const MapPage = () => {

    useEffect(() => {
        //지도를 표시할 div
        let mapContainer = document.getElementById('map');
        let mapOption = {   //지도의 옵션 설정
                center: new kakao.maps.LatLng(36.46369351381241, 127.8468282697540),// 지도의 중심좌표(ssac 영캠) 
                level: 13, //지도의 확대 레벨
                mapTypeId: kakao.maps.MapTypeId.ROADMAP // 지도종류
            }; 

        //지도를 표시할 div와 지도 옵션으로 지도를 생성합니다.
        let map = new kakao.maps.Map(mapContainer, mapOption);
                
    }, [])

    return (
        <div>
            <div id="map" style={{ width: "1000px", height:"700px" }}>    
            </div>
        </div>
    )
}

export default MapPage
