/*global kakao*/

/*
sanghoon
*/

import axios from "axios";
import { Row, Col } from 'react-bootstrap'; 
import React, { useEffect } from "react";
const { kakao } = window;   //window 객체로부터 스크립트에서 로드한 kakao api를 가져와야 하기 때문에 상단에 작성

const MapPage = () => {

    useEffect(() => {
        
        if (kakao !== undefined) {

            //지도를 표시할 div
            let mapContainer = document.getElementById('map');
            let mapOption = {   //지도의 옵션 설정
                    center: new kakao.maps.LatLng(36.46369351381241, 127.8468282697540),// 지도의 중심좌표(ssac 영캠) 
                    level: 13, //지도의 확대 레벨
                    mapTypeId: kakao.maps.MapTypeId.ROADMAP // 지도종류
                }; 

            //지도를 표시할 div와 지도 옵션으로 지도를 생성합니다.
            let map = new kakao.maps.Map(mapContainer, mapOption);

            axios({
                method: 'GET',
                url: "https://api.odcloud.kr/api/uws/v1/inventory?page=1&perPage=109",
                responseType: "JSON",
                headers: {
                    Authorization: "Infuser" + " cFsf2tLOdm9hmVUm2tsKHlJwty7UFo2qiSu7UTNQudNbeSMo2vpQ5p0m2tZqPoP5qrXWXNtTw6HeqGaTElLuDg==",
                },	                             
                })
                .then(function (response) {
                    //console.log(response.data.data);
            
                    // 마커 클러스터러를 생성합니다 
                    let clusterer = new kakao.maps.MarkerClusterer({
                        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
                        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
                        minLevel: 3 // 클러스터 할 최소 지도 레벨 
                    });
            
                    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
                    function makeOverListener(map, marker, infowindow) {
                        return function() {
                            infowindow.open(map, marker);
                        };
                    }
            
                    //마커들을 묶을 변수 생성
                    let markers =[];
                    const data = response.data.data;

                    for (let i = 0; i < data.length; i++) {
            
                        // 지도에 마커를 생성하고 표시한다
                        let marker = new kakao.maps.Marker({
                        position: new kakao.maps.LatLng(data[i]['lat'], data[i]['lng']), // 마커의 좌표
                        map: map, // 마커를 표시할 지도 객체
                        });

                        // 마커 위에 표시할 인포윈도우를 생성한다
                        let infowindow = new kakao.maps.InfoWindow({
                            content : 
                                `<div style="width:350px">
                                <h4>${data[i]['name']}</h4><br>
                                - 재고량 : ${data[i]["inventory"]}개<br>
                                - 가격 : ${data[i]["price"]}원<br>
                                - 주소 : ${data[i]["addr"]}<br>
                                - 연락처 : ${data[i]["tel"]}<br>
                                (반영시간 : ${data[i]["regDt"]})
                                </div>`,    // 인포윈도우에 표시할 내용
                            removable : true
                        });

                        // 인포윈도우를 지도에 표시한다
                        //infowindow.open(map, marker);
            
                        // 생성된 마커들이 markers 변수안에 들어감  
                        markers.push(marker);
                        kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, infowindow));

                        };
            
                    // 클러스터러에 마커들을 추가합니다
                    clusterer.addMarkers(markers);
            
                    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
                    function makeOverListener(map, marker, infowindow) {
                        return function() {
                            infowindow.open(map, marker);
                        };
                    }
            
                });
            }
            else {
                console.error("kakao is not defined");
            }
    }, [])

    return (
        <div>
            <Row>
                <Col>
                    <h1 className="Title m-5" id="Map">"Yososu Map"</h1>
                    <div id="map" style={{ width: "auto", height:"500px" }}> </div>
                </Col>
            </Row>
        </div>
    )
}

export default MapPage