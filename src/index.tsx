import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import CreateGlobalStyle from './global/globol';
import ContextWrapper from './hooks/index';



ReactDOM.render(
  <React.StrictMode>
    <CreateGlobalStyle/>
    <ContextWrapper>
       <Routes/>
    </ContextWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);


