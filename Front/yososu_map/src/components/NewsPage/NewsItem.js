import React from 'react';
import styled from 'styled-components';
import { Card, Button, Col } from 'react-bootstrap';


const Wrap = styled.div`

    .title {
        font-family: 'EliceDigitalBaeum_Bold';
        font-size: 20px;
        word-wrap: break-word;
        overflow: hidden;
        width: 270px;
        height: 55px;
        display: -webkit-box; 
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
    }

    .description {
        font-family: 'EliceDigitalBaeum_Regular';
        white-space: normal; 
        line-height: 1.3; 
        width: 270px;
        height: 130px; 
        text-align: left; 
        word-wrap: break-word; 
        display: -webkit-box; 
        -webkit-line-clamp: 6; 
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
    }

    @font-face {
        font-family: 'EliceDigitalBaeum_Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/EliceDigitalBaeum_Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'EliceDigitalBaeum_Bold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/EliceDigitalBaeum_Bold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;

const CardBlock = styled.div`
    box-shadow: 0 1px 10px rgba(0,0,0,0.5);
    width:300px;
    height:500px;
`;


    const NewsItem = ({ article }) => {
        const { title, description, url, urlToImage } = article;

        return (
            <>
                <Col xs={12} sm={6} md={6} lg={3} xl={3} className="mt-5">
                    <CardBlock a href={url} className="card">
                        <Card.Img variant="top" src={urlToImage} style={{ width:'300px', height:'200px' }}/>
                        <Card.Body>
                            <Wrap>
                                <div className='title mb-4'>
                                    {title}
                                </div>
                                <div className='description mb-3'>
                                    {description}
                                </div>
                                <Button variant="dark" href={url} target="_blank" className="d-flex justify-content-center">Click Here</Button>
                            </Wrap>
                        </Card.Body>
                    </CardBlock>
                </Col>
            </>
        );
    };

export default NewsItem;