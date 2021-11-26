import InfoPage from './components/InfoPage/InfoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col} from "react-bootstrap";
import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsPage/NewsList'
import MapPage from './components/MapPage/MapPage';
import TeamPage from './components/TeamPage/TeamPage';
import MainPage from './components/MainPage/MainPage';
import Footer from '../src/components/Footer/Footer'

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
              <MainPage/>
              <MapPage/>
              <InfoPage/>
              <NewsList />
              <TeamPage/>
              <Footer/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;