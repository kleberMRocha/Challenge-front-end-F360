import React from 'react';
import { Link } from 'react-router-dom';
import {Header} from './style';
import {FiPower} from 'react-icons/fi'
import logoIMG from '../../assets/logo.png';

const HeaderNav:React.FC = ({children}) => {
  return (
    <Header>
        <ul>
            <li>
                <Link to="/"> 
                    <img src={logoIMG} alt="logo CNPJ" />
                </Link>
            </li>
            <li>Consultar CNPJ</li>
        </ul>

        <Link to="/Login">Login</Link>
        <span>
            <button>
             <FiPower />
             </button>
        </span>
        
    </Header>
  );
}

export default HeaderNav;
