import React from 'react';
import InfoPage from './components/InfoPage/InfoPage';
import MapPage from './components/MapPage/MapPage';
import TeamPage from './components/TeamPage/TeamPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col} from "react-bootstrap";
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
              <TeamPage/>
              <Footer/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
