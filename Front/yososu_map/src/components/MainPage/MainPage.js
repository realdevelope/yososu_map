import React from 'react'
import { Image, Row, Col } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';


const MainPage = () => {

    return (
        <div>
            <Navigation/>
                <Row>
                    <Col>
                    <div className="my-5">
                        <Image src="main.PNG" style={{ height:'100%', width:'100%', position: 'relative' }}/>
                    </div>

                    <div className="col-md-5" style={{ position:'absolute', top:'35%', left:'15%', color:'white' }}>
                        <h1 class="mb-3">요소수 판매처와 재고, 정보, 최신뉴스를 Yososu Map에서 한눈에 확인 하세요!</h1>
                        <p>저희 000은 어떠한 영리도 취하지 않고, 여러분 모두에게 큐레이션 서비스를 제공합니다. </p>
                    </div>
                    </Col>
                </Row>
                
        </div>
    )
}

export default MainPage