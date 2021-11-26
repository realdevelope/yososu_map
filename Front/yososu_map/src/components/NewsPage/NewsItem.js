import React from 'react';
import styled from 'styled-components';
import { Card, Button, Col } from 'react-bootstrap';


const Wrap = styled.div`

    .title {
        font-weight : bold;
        word-wrap: break-word;
        overflow: hidden;
        display: -webkit-box; 
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
    }

    .description {
        white-space: normal; 
        line-height: 1.2; 
        height: 3.6em; 
        text-align: left; 
        word-wrap: break-word; 
        display: -webkit-box; 
        -webkit-line-clamp: 3; 
        -webkit-box-orient: vertical;
    }
`;


    const NewsItem = ({ article }) => {
        const { title, description, url, urlToImage } = article;

        return (
            <>
                <Col xs={12} md={4} sm={4} className="mr-2">
                    <Card a href={url} style={{ width:'300px', height:'500px' }}>
                        <Card.Img variant="top" src={urlToImage} style={{ width:'300px', height:'200px' }}/>
                        <Card.Body>
                            <Wrap>
                                <div className='title mb-3' style={{ width:'270px', height:'50px' }}>
                                    <Card.Title>{title}</Card.Title>
                                </div>
                                <div className='description mb-3' style={{ width:'270px', height:'130px' }}>
                                    <Card.Text>{description}</Card.Text>
                                </div>
                                <Button variant="dark" href={url} className="d-flex justify-content-center">Click Here</Button>
                            </Wrap>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        );
    };

export default NewsItem;