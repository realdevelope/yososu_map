import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 1000px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
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
                    'https://newsapi.org/v2/everything?q=요소수&sortBy=publishedAt&pageSize=3&apiKey=a4a7aca69d614cf0a5944c3ec606db96',
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
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="section-headline text-center">
                            <h2>Yososu News</h2>
                        </div>
                    </div>
                </Row>
                <Row className="mt-5">
                    {articles.map( article => (
                        <NewsItem key={ article.url } article={ article }/>
                    ))}
                </Row>
            </div>
        </NewsListBlock>
    );
};

export default NewsList;