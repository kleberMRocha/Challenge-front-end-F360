import styled, { css } from "styled-components";

interface ContainerInpurtProps{
    isFocus:boolean;
    isErrored?: boolean;
}

export const Container = styled.div<ContainerInpurtProps>`
  color: #666360; 
  border: 2px solid #0C2D48;
  position:relative;
  ${props => props.isErrored && css`
         border: 2px solid tomato;
  `}
  width: 300px;
  height: 56px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2%;
  ${props => props.isFocus && css`
         border: 2px solid #2E8BC0;;
  `}
  input {
    margin-left: 5px;
    background: none;
    border: none;
    width: 90%;
    height: 100%;
  }
  & + div {
    margin: 20px;
  }
  svg{
    ${props => props.isFocus && css`
         color:#0C2D48;
    `}
  }
`;
