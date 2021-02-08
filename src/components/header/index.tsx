import React from 'react';
import { Link } from 'react-router-dom';
import {Header} from './style';
import {FiPower} from 'react-icons/fi'
import logoIMG from '../../assets/logo.png';
import {useAuth} from '../../hooks/authContext';

const HeaderNav:React.FC = ({children}) => {
    const {user,token, signOut } = useAuth();

  return (
    <Header>
        <ul>
            <li>
                <Link to="/"> 
                    <img src={logoIMG} alt="logo CNPJ" />
                </Link>
            </li>
            <li>Olá, {user || ' Visitante.'}</li>
        </ul>
        {
            token 
            ?( <span><button onClick={() => signOut()}><FiPower /></button></span>)
            : <Link to="/Login">Login</Link>
        }
        
    
    </Header>
  );
}

export default HeaderNav;
