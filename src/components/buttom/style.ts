import styled from 'styled-components';
import {shade} from 'polished';

export const Button = styled.button`
height: 45px;
width: 250px;
color:#ffffff;
background: #145DA0;
border-radius: 10px;
font-weight:bold;
font-size: 16px;
border:none;
&:hover{
    background: ${shade(.1,'#145DA0')}
}
`;