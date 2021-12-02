import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Row } from 'react-bootstrap';

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



const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
    const client_id = 'ayB_b2TmQFkzpz0XuIwN';
    const client_secret = 'TGRTTBx7BW';

    useEffect(() => {
            axios.get('http://yososumap.ga:3001')
            .then(response => {
                setArticles(response.data);
            })
            .catch(err => console.error(err));
    }, []);

    // 대기 중일 때
    if (loading) {
        return <NewsListBlock>잠시만 기다려 주세용</NewsListBlock>
    }

    // 아직 articles 값이 설정되지 않았을 때
    if (!articles) {
        return null;
    }


    // articles 값이 유효할 때
    return (
        <NewsListBlock id="News">
            <div className="container">
                <Row>
                    <div className="mt-5">
                        <div className="section-headline text-center">
                            <h1>"Yososu News"</h1>
                        </div>
                    </div>
                </Row>
                <Row className="mt-5" style={{'textAlign':'left', 'fontWeight':'bold'}}>
                    {articles && articles.items && articles.items.map( ( item, index ) => {
                        const { link, pubDate } = item;
                        const oldTitle = item.title;
                        const newTitle = oldTitle.replace(/(<([^>]+)>)/ig, "").replace(/&quot;/g,"").replace(/\"n/, "").replace(/&amp;/g, "");
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
                </Row>
            </div>
        </NewsListBlock>
    );
};

export default NewsList;