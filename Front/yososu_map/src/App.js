import React from 'react';
import InfoPage from './components/InfoPage/InfoPage';
import MapPage from './components/MapPage/MapPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from "react-bootstrap";
import MainPage from './components/MainPage/MainPage';
import Footer from '../src/components/Footer/Footer'


function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
              <InfoPage/>
          </Col>
        </Row>
      </Container>
      <MainPage/>
      <MapPage/>
      <Footer/>

    </div>
  );
}

export default App;
