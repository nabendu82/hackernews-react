import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { withAuth } from "@8base/react-sdk";
import Routes from './router';
import './App.css';
import Header from './components/header';

const App = ({ auth }) => console.log(auth.isAuthorized) || (
  <div className="App">
    <Router>
      <Header isAuthorized={auth.isAuthorized} />
      <Routes />
    </Router>
  </div>
);

export default withAuth(App);
