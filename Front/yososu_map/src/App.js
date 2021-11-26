import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsPage/NewsList'
import MapPage from './components/MapPage/MapPage';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <NewsList />
  );
}

export default App;