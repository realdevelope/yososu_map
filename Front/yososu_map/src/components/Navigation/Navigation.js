import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#">Yososu Map</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>                        
                        <Navbar.Brand href="#Map">Map</Navbar.Brand>
                        <Navbar.Brand href="#Info">Info</Navbar.Brand>
                        <Navbar.Brand href="#News">News</Navbar.Brand>
                        <Navbar.Brand href="#About">About Us</Navbar.Brand>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation 
