import React, { ButtonHTMLAttributes } from 'react';
import {Button} from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
}

const ButtonForm:React.FC<ButtonProps> = ({children, ...res}) => {
  return (<Button {...res}>{children}</Button>);
}

export default ButtonForm;
