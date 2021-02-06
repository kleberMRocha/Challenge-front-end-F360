import React from 'react';
import {Button} from './style';

const HeaderNav:React.FC = ({children}) => {
  return (<Button>{children}</Button>);
}

export default HeaderNav;
