import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import { Row } from 'react-bootstrap';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    margin: 6;
    margin-top: 2rem;
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

const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // async를 사용하는 함수 따로 선언
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    'https://newsapi.org/v2/everything?q=요소수&sortBy=publishedAt&pageSize=4&apiKey=a4a7aca69d614cf0a5944c3ec606db96',
                );
                setArticles(response.data.articles);
            } catch(e) {
                console.log(e)
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    // 대기 중일 때
    if (loading) {
        return <NewsListBlock>잠시만 기다려 주세용</NewsListBlock>
    }

    // 아직 articles 값이 설정되지 않았을 때
    if (!articles){
        return null;
    }

    // articles 값이 유효할 때
    return (
        <NewsListBlock>
            <div className="container">
                <Row>
                    <div className="mt-5">
                        <div className="section-headline text-center">
                            <h1>"Yososu News"</h1>
                        </div>
                    </div>
                </Row>
                <Row className="mt-3">
                    {articles.map( article => (
                        <NewsItem key={ article.url } article={ article }/>
                    ))}
                </Row>
            </div>
        </NewsListBlock>
    );
};

export default NewsList;