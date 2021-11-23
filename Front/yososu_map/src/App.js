import React from 'react';
import MapPage from './components/MapPage/MapPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <MapPage/>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
