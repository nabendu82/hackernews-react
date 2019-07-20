import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './router';
import './App.css';
import Header from './components/header';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Routes />
    </Router>
  </div>
);

export default App;
