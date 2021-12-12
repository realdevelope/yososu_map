/*
    Ryu Seung Wan
*/

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// NewsListBlock 태그를 생성하고 그 안에서 사용할 css양식들을 정의
const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    margin: 6;
    margin-top: 5rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 4rem;
        padding-right: 4rem;
    }

    @font-face {
        font-family: 'EliceDigitalBaeum_Bold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/EliceDigitalBaeum_Bold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    .section-headline {
        font-family: 'EliceDigitalBaeum_Bold';
    }
`;

// NewsItemBlock 태그를 생성하고 그 안에서 사용할 css양식들을 정의
const NewsItemBlock = styled.div`
    display: flex;
    box-shadow: 0 1px 10px rgba(0,0,0,0.5);
    padding: 20px;
    cursor: pointer;

    .contents {
        h3 {
            margin : 0;
            a {
                color :black;
            }
        }
    }
    p {
        margin : 0;
        line-height:1.5;
        margin-top: 0.5rem;
        white-space:normal;
    }
    & + & {
        margin-top:3rem;
    }
`;

// NewsList 컴포넌트 정의
const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading] = useState(false);

    // 비동기 방식으로 package.json의 proxy에서 설정해놓은 경로를 요청할 함수 정의
    useEffect(() => {
            axios.get('http://3.36.253.143:3001')
            .then(response => {
                setArticles(response.data);
            })
            .catch(err => console.error(err));
    }, []);

    // 대기 중일 때
    if (loading) {
        return <NewsListBlock>잠시만 기다려 주세요</NewsListBlock>
    }

    // 아직 articles 값이 설정되지 않았을 때
    if (!articles) {
        return null;
    }

    // articles 값이 유효할 때
    return (
        <NewsListBlock id="News">
            <div className="container">
                <div className="Row mt-5">
                    <div className="section-headline text-center">
                        <h1>"Yososu News"</h1>
                    </div>
                </div>
                <div className="Row mt-5" style={{'textAlign':'left', 'fontWeight':'bold'}}>
                    {articles && articles.items && articles.items.map( ( item, index ) => {
                        // 네이버 api 내부에 있던 item.link, item.pubDate 변수 불러오기 
                        const { link, pubDate } = item;
                        // 네이버 api 내부에 있던 item.title 변수 데이터 내의 <b></b>태그를 제거해서 newTitle로 새로 정의
                        const oldTitle = item.title;
                        const newTitle = oldTitle.replace(/(<([^>]+)>)/ig, "").replace(/&quot;/g,"").replace(/\"n/, "").replace(/&amp;/g, "");
                        // 네이버 api 내부에 있던 item.description 변수 데이터 내의 <b></b>태그를 제거해서 newDescript로 새로 정의
                        const oldDescript = item.description;
                        const newDescript = oldDescript.replace(/(<([^>]+)>)/ig, "").replace(/&quot;/g,"").replace(/\"n/, "").replace(/&amp;/g, "");

                        return (
                            <NewsItemBlock key={index} onClick={() => { window.open( link, "_blank" ) }}>
                                <div className="contents">
                                    <h3>
                                        <div rel="noopener noreferrer" style={{'fontWeight':'bold'}}>
                                            {newTitle}
                                        </div>
                                    </h3>
                                    <div className="mt-2"><h6>업로드 시간 : {pubDate}</h6></div>
                                    <p className="mt-2">{newDescript}</p>
                                </div>
                            </NewsItemBlock>
                        );
                    })}
                </div>
            </div>
        </NewsListBlock>
    );
};

export default NewsList;