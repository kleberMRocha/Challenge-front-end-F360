import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

import {useAuth} from '../hooks/authContext';

function Routes() {
  const {user,token} = useAuth();
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>

      {(!user && !token) && 
      <>
       <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
      </>
       
      }
      <Route component={Home} exact />
     
    </Switch>
  </BrowserRouter>
  );
}

export default Routes;
