import InfoPage from './components/InfoPage/InfoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from "react-bootstrap";
import React from 'react';
import NewsList from './components/NewsPage/NewsList'
import MapPage from './components/MapPage/MapPage';
import TeamPage from './components/TeamPage/TeamPage';
import MainPage from './components/MainPage/MainPage';
import Footer from '../src/components/Footer/Footer'

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