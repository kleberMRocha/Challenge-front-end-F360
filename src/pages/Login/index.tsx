import React, { useCallback, useState } from 'react';
import { Background, Main, Content, FormContainer } from './style';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import * as yup from 'yup';
import Button from '../../components/buttom/index';
import Input from '../../components/input';

import { useAuth } from '../../hooks/authContext';

import {
  FiArrowDownLeft,
  FiUser,
  FiLock,
  FiArrowLeftCircle,
} from 'react-icons/fi';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Você deve informar um e-mail valido')
    .required('Os campo não pode ficar em branco'),
  password: yup
    .string()
    .required('Os campo não pode ficar em branco')
    .min(6, 'A senha deve ter no minimo 6 e no maximo 20 caracteres')
    .max(20, 'A senha deve ter no minimo 6 e no maximo 20 caracteres'),
});

function Login() {
  const { sigin } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errored, setErrored] = useState(false);
  const [info, setInfo] = useState('');
  const history = useHistory();

  const handleLogin = useCallback(async () => {
    try {
      await schema.validate({ email, password }).then(async () => {
        await sigin({ email, password });
        history.push('/');
      });
    } catch (error) {
      console.log(error);
      error.message === 'Request failed with status code 404'
        ? setInfo('Usuário não cadastrador')
        : setInfo(error.message);
      setErrored(true);
    }
  }, [sigin, email, password, history]);

  return (
    <Main>
      <Content>
        <FormContainer>
          <Link to='/'>
            <FiArrowLeftCircle />
          </Link>
          <img src={logoImg} alt='logo Consultar Cnpj' />
          <h1>Efetue Login</h1>
          <p> {info} </p>
          <Input
            type='text'
            Icon={FiUser}
            placeholder='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isErrored={errored}
          />
          <Input
            type='password'
            Icon={FiLock}
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isErrored={errored}
          />
          <Button onClick={async () => handleLogin()}>Fazer Login</Button>
          <Link to='/signup'>
            <FiArrowDownLeft />
            Não tem cadastro?
          </Link>
        </FormContainer>
      </Content>
      <Background />
    </Main>
  );
}

export default Login;
