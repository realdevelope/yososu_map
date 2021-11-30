import React from 'react'
import { Image } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';


const MainPage = () => {

    return (
        <div>
            <Navigation/>
                <div style={{ position :"relative" }}>
                    <Image src="main.PNG" style={{ height:'100%', width:'100%', position: 'relative' }}/>
                    
                    <div class="col-md-6" style={{ position:'absolute', top:'40%', left:'5%', color:'white' }}>
                        <h1 class="mb-3" className="Title m-2">요소수 판매처와 재고, 정보, 최신뉴스를 Yososu Map에서 한눈에 확인 하세요!</h1>
                        <p className="Title">저희 벨루가는 어떠한 영리도 취하지 않고, 여러분 모두에게 큐레이션 서비스를 제공합니다. </p>
                    </div>
                </div>
        </div>
    )
}

export default MainPage