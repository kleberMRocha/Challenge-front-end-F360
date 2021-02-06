import { shade } from "polished";
import styled, { css } from "styled-components";

interface ContainerInpurtProps{
    isFocus:boolean
}

export const Container = styled.div<ContainerInpurtProps>`
  color: #666360;
  border: 2px solid #0C2D48;
  width: 70%;
  height: 56px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2%;
  ${props => props.isFocus && css`
         border: 2px solid #2E8BC0;
  `}
  input {
    margin-left: 5px;
    background: none;
    border: none;
    width: 90%;
    height: 100%;
  }
  button{
  font-family: 'Nunito',sans-serif;
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration: none;
  margin-left: auto;
  width: 120px;
  height: 30px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  color: #ffffff;
  background: #18A558;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  &:hover{
    background: ${shade(.1,'#18A558')}
  }
  }
  & + div {
    margin: 20px;
  }
  svg{
    ${props => props.isFocus && css`
         color:#2E8BC0;
    `}
  }
`;
