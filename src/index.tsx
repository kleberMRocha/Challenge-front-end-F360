import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import CreateGlobalStyle from './global/globol';



ReactDOM.render(
  <React.StrictMode>
    <CreateGlobalStyle/>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);


