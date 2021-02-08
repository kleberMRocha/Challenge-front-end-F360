import styled from 'styled-components';
import BgImg from '../../assets/bg2.jpg';
import { appearRight, appear } from '../../global/animations';

export const Main = styled.main`
  display: flex;
`;

export const SucessMessageContaier = styled.div`
  animation: ${appear} 0.5s linear forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  a{
      font-size: 20px;
      text-decoration: underline;
      font-weight: bold;
  }
  svg {
    font-size: 80px;
    color: #18a558;
  }
  
`;

export const FormContainer = styled.div`
  flex-direction: 'column';
  animation: ${appearRight} 0.5s linear forwards;
  display: flex;
  width: 350px;
  height: 90vh;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ffffff;
  margin: 0 auto;
  position: relative;

  span {
    color: tomato;
    text-align: center;
  }

  h1 {
    color: #0c2d48;
  }

  @media (max-width: 800px) {
    flex: 1;
    height: 100vh;
    border-radius: 0px;
  }
  a:first-of-type {
    svg {
      font-size: 30px;
      position: absolute;
      left: 20px;
      top: 20px;
    }
  }
`;

export const Background = styled.div`
  background: url(${BgImg});
  background-size: cover;
  height: 100vh;
  width: 50%;
  animation: ${appear} 1s linear forwards;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Content = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
  }
  img {
    width: 50%;
    margin: 15px 0;
    @media (max-width: 800px) {
      width: 50%;
    }
  }
  a {
    color: #2e8bc0;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-top: 5px;
    &:hover {
      opacity: 0.8;
    }
    svg {
      margin: 2px;
    }
  }
`;
