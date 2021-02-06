import styled from 'styled-components';
import {appear} from '../../global/animations';

export const Container = styled.div`
width:100%;
`;

export const Content = styled.main`
display:flex;
animation: ${appear} 2s forwards;
margin-top: 30px;
flex-direction: column;
align-items:center;
justify-content:center;
span{
    background:tomato;
    width: 70%;
    height: 50px;
    border-radius: 20px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight: bold;
    margin: 20px 0;
    animation: ${appear} 2s forwards;
    text-align:center;
}
`;
