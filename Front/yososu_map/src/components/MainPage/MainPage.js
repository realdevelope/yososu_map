import React from 'react'
import { Image } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';

const MainPage = () => {

    // const content = "안녕하세요 \n SSAC 3기 교육생 이상훈 입니다. \n 3기 동기 여러분들 잠시 시간 있으신가요? \n ..... \n 아껴쓰세요ㅋㅋ❤ ";
    // const text = document.getElementById("text");
    // let i = 0;

    // function typing(){
    //     let txt = content[ i++ ];
    //     text.innerHTML += txt === "\n" ? "<br/>": txt;
    //     console.log(text);
        
    //     if (i > content.length) {
    //         text.textContent = "";
    //         i = 0;
    //     }
    // }
    // setInterval(typing, 200);

    return (
        <div>
            <Navigation/>
            <Image src="main.PNG" style={{height:'auto',width:'100%', paddingBottom:'50px'}}/>

            {/* <div class="d-flex flex-column bd-highlight mb-3">
                <div class="p-2 bd-highlight">
                    <div class="text_box">
                        <span id="text"></span><span class="blink">|</span>
                    </div> 
                </div>
            </div> */}
        </div>
    )
}

export default MainPage
