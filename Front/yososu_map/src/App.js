import InfoPage from './Components/InfoPage/InfoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from "react-bootstrap";
import React from 'react';
import NewsList from './Components/NewsPage/NewsList'
import MapPage from './Components/MapPage/MapPage';
import TeamPage from './Components/TeamPage/TeamPage';
import MainPage from './Components/MainPage/MainPage';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <MainPage/>
        <Container>
          <Row>
            <Col>
                <MapPage/>
                <InfoPage/>
                <NewsList />
                <TeamPage/>
            </Col>
          </Row>
        </Container>
      <Footer/>
    </div>
  );
}

export default App;