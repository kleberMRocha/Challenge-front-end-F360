import styled from 'styled-components';
import {appear} from '../../global/animations';

export const Container = styled.div`
width:100%;
`;

export const Content = styled.main`
display:flex;
animation: ${appear} 2s forwards;
margin-top: 80px;
flex-direction: column;
align-items:center;
justify-content:center;
`;
