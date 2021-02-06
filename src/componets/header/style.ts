import { shade } from "polished";
import styled from "styled-components";

export const Header = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  width: 100%;
  height: 85px;
  border-bottom: 2px solid #B1D4E0;
  ul{
      display: flex;
      align-items: content;
      justify-content: center;
      img{
          width: 80px;
      }
  }
  a:not(:first-child){
    margin-left: auto;
    width: 120px;
    height: 30px;
    display: flex;
    justify-content:center;
    align-items:center;
    color: #ffffff;
    background: #18A558;
    border-radius: 10px;
    font-weight: bold;
    font-size: 16px;
    border: none;
    &:hover{
        background-color:${shade(.1,'#18A558')}
    }
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    border-radius: 20%;
    margin-left: 50px;
    button{
        background:none;
        border: none;
        color: #ffffff;
        padding: 12px;
    }
    cursor: pointer;
    &:hover{
        background-color:${shade(.1,'gray')}
    }
  }
`;
