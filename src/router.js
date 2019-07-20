import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import PostForm from './components/submit';

const Routes = () => (
  <Switch>
    <Route path="/submit" component={PostForm} />
    <Route path="/" component={Home} />
  </Switch>
);

export default Routes;
