import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background:#0C2D48;
    color:#fff;
    -webkit-font-smoothing: antialiased
  }
  body, input, button {
    font-family: 'Nunito', sans-serif;
  }
  button {
    cursor: pointer;
  }
  h1, h2, h3, h4, h5, h6, strong{
    font-weight:500;
  }
  a{
    text-decoration:none;
  }
  ul{
    list-style:none;
  }
`;
