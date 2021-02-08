import styled, { css } from 'styled-components';
import {lighten} from 'polished';
import {appear, rotate} from '../../global/animations';
interface ModalProps{
    isOpen:boolean;
}
  

export const Container = styled.div<ModalProps>`
${props => props.isOpen && css`display:'block'`}
display:none;
cursor:pointer;
height: 450px;
width: 450px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

@media(max-width: 800px) {
    width: 100%;
    margin: 1%;
}
animation: ${appear} .5s forwards;
position: fixed;
left: 0;
right: 0;
margin: auto;
z-index: 9999;
color:#ffffff;
background: #145DA0;
border-radius: 10px;
font-weight:bold;
font-size: 16px;
border:none;
border: #ffffff 2px solid;

h1,h2,h3{
    text-decoration: underline;
    margin-bottom:15px;
}

p{
    text-align:center;
}

&:hover{
    background: ${lighten(.1,'#145DA0')}
}

svg{
    color:white;
    font-size: 125px; 
    animation: ${rotate} 1s infinite linear;
}

button{
    background:none;
    border:none;
    position: absolute;
    right: 0;
    top:0;
    margin: 10px;
    svg{
    animation:none;
    color:white;
    font-size: 25px;
}
}
`;