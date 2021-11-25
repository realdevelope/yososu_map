import React from 'react';
import InfoPage from './components/InfoPage/InfoPage';
import MapPage from './components/MapPage/MapPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col} from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
              <MapPage/>
              <InfoPage/>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
