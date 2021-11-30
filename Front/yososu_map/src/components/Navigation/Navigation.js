import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#" className="Title"><h2>Yososu Map</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>                        
                        <Nav.Link href="#Map" className="Title">Map</Nav.Link>
                        <Nav.Link href="#Info" className="Title">Info</Nav.Link>
                        <Nav.Link href="#News" className="Title">News</Nav.Link>
                        <Nav.Link href="#About" className="Title">About Us</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation 
