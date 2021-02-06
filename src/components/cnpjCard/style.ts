import styled from 'styled-components';
import {shade} from 'polished';
import { appear } from '../../global/animations';

export const InfoContainer = styled.div`
p:first-of-type {
    font-weight:bolder;
    text-decoration: underline;
    margin-bottom: 5px;
    max-width: 400px;
}
display:flex;
flex-direction:column;
`;

export const Container = styled.div`
height: 100%;
width: 70%;
font-size: 15px;
padding: 2% 5%;
background:#2E8BC0;
font-weight:bold;
display:flex;
align-items:center;
justify-content:center;
animation: ${appear} 2s forwards;
position:relative;
border-radius: 5px;
transition: transform .5s;
@media(max-width: 800px) {
    flex-direction:column;
    height: 100%;
    padding: 5px;
    text-align:center;
}
&:hover{
    transform: translate(-8px);
    background:${shade(.05,'#2E8BC0')};
}
&::before{
    content:'';
    position:absolute;
    background: #ffffff;
    height:100%;
    width: 5px;
    left:0;

}

& + div{
    margin-bottom: 10px;

}
`;

export const Button = styled.button`
height: 45px;
width: 250px;
color:#145DA0;
background: #ffffff;
border-radius: 10px;
font-weight:bold;
font-size: 16px;
border:none;
margin-left: auto;
&:hover{
    background: ${shade(.1,'#ffffff')}
}
@media(max-width: 800px) {
    border-radius: 0;
    margin: 2px;
}
`;