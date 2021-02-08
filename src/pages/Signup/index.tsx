import React, { useCallback, useState } from 'react';
import { Background, Main, Content, FormContainer, SucessMessageContaier } from './style';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

import Button from '../../components/buttom/index';
import Input from '../../components/input';
import * as yup from 'yup';

import { FiLock, FiArrowLeftCircle, FiUser, FiCheck} from 'react-icons/fi';
import api from '../../services/api';


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

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errored, setErrored] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [info, setInfo] = useState('');


  const handleCreateUser = useCallback(async () => {

    try {
      await schema.validate({ email, password }).then(async (formData) => {
        setErrored(false);
        setInfo('');
        await api.post('/signup', formData);
        setSucess(true);
      });
    } catch (error) {
      setErrored(true);

      (error.message === 'Request failed with status code 409') 
      ? setInfo('Usuário já Cadastrado')
      : setInfo(error.message);
    }
  }, [email, password]);

  return (
    <Main>
      <Background />
      <Content>
        <FormContainer>
          {sucess && (
          <SucessMessageContaier>
            <h1>Cadastro feito com Sucesso!</h1>
              <FiCheck />
              <Link to="/login">Fazer Login</Link>
          </SucessMessageContaier>
          )}
          {!sucess && (
            <>
              {' '}
              (
              <Link to='/Login'>
                <FiArrowLeftCircle />
              </Link>
              <img src={logoImg} alt='logo Consultar Cnpj' />
              <h1>Cadastre-se</h1>
              <span>{info}</span>
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
              <Button onClick={() => handleCreateUser()}>Cadastrar</Button>)
            </>
          )}
        </FormContainer>
      </Content>
    </Main>
  );
}

export default Signup;
