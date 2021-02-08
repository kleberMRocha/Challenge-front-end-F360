import React, { InputHTMLAttributes, useState } from "react";
import { FiX } from "react-icons/fi";
import { IconBaseProps } from "react-icons/lib";
import { Container } from "./style";

interface InputProps extends  InputHTMLAttributes<HTMLInputElement>{
  Icon?: React.ComponentType<IconBaseProps>;
  isErrored?:boolean;
}

const Input: React.FC<InputProps> = ({ children,Icon,isErrored, ...rest }) => {
  const [isFocus,setIsFocus] = useState(false);
 
  return (
    <Container isFocus={isFocus} isErrored={isErrored} >
      {children}
      {Icon && <Icon size={20} />}
      <input 
        onFocus={() => setIsFocus(!isFocus)}
        onBlur={() => setIsFocus(!isFocus)}
       {...rest}
       />
      { isErrored && <FiX color="tomato" />}
    </Container>
  );
};

export default Input;
