import React, { useState, useEffect } from 'react'
import { Image } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import "./MainPage.css";


const MainPage = () => {

    const txt = `요소수 재고, 위치, 정보, 이슈를 
요소수 맵에서 한눈에 확인 하세요.`;

    const [Text, setText] = useState('');
    const [Count, setCount] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
            setCount(Count + 1); // 개수 만큼 체크 
        }, 100);

        if(Count === txt.length)  {  // Count를 따로 두지 않고 Text.length 체크도 가능
            clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
        }
        return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
    })

    return (
        <div>
            <Navigation/>
            <div class="lb-wrap">
                <div class="lb-text">
                    <pre id="title">{ Text }|</pre>
                </div>
                <div className="MemberInfo my-4">
                    <Image src="main.PNG" style={{height:'auto',width:'100%', paddingBottom:'50px'}}/>
                </div>
            </div>
        </div>
    )
}

export default MainPage