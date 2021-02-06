import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';



function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/Login" component={Login} />
    </Switch>
  </BrowserRouter>
  );
}

export default Routes;
