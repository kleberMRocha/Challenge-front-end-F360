import React, { InputHTMLAttributes, useState } from "react";
import { IconBaseProps } from "react-icons/lib";
import { Container } from "./style";

interface InputProps extends  InputHTMLAttributes<HTMLInputElement>{
  Icon?: React.ComponentType<IconBaseProps>;
}

const SearchInput: React.FC<InputProps> = ({ children,Icon, ...rest }) => {
  const [isFocus,setIsFocus] = useState(false);

  return (
    <Container isFocus={isFocus}  >
      {children}
      {Icon && <Icon size={20} />}
      <input 
        onFocus={() => setIsFocus(!isFocus)}
        onBlur={() => setIsFocus(!isFocus)}
       {...rest}
       />
    </Container>
  );
};

export default SearchInput;
