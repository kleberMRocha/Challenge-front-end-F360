import React from 'react';
import {Background, Main, Content, FormContainer} from './style';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

import Button from '../../components/buttom/index';
import Input from '../../components/input';


import { FiArrowDownLeft, FiUser, FiLock, FiArrowLeftCircle } from 'react-icons/fi';


function App() {
  return (
    <Main>
      <Content>
        <FormContainer>
        <Link to='/'>
          <FiArrowLeftCircle/>
        </Link>
        <img src={logoImg} alt="logo Consultar Cnpj"/>
        <Input 
          type="text" 
          Icon={FiUser}
          placeholder="Usuário"
         />
        <Input 
          type="password" 
          Icon={FiLock} 
          placeholder="Senha"
         />
        <Button>Fazer Login</Button>
        <Link to="/signup">
          <FiArrowDownLeft />
          Não tem cadastro?
        </Link>
        </FormContainer>
      
      </Content>
      <Background />
    </Main>
  
  );
}

export default App;
