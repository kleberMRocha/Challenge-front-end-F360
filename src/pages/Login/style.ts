import styled from 'styled-components';
import BgImg from '../../assets/bg.jpg';
import {appear,entrance} from '../../global/animations';

export const Main = styled.main`
display:flex;
`;

export const FormContainer = styled.div`
flex-direction:'column';
animation: ${entrance} 1s linear forwards;
display:flex;
width:350px;
height: 90vh;
border-radius: 20px;
justify-content:center;
align-items:center;
flex-direction:column;
background:#ffffff;
margin: 0 auto;
position: relative;

@media(max-width: 800px) {
    flex: 1;
    height: 100vh;
    border-radius: 0px;
}
a:first-of-type{
    svg{
        font-size: 30px;
        position: absolute;
        left:20px;
        top: 20px;
    }   
}
`;

export const Background = styled.div`
background:url(${BgImg});
background-size: cover;
height:100vh;
width:50%;
animation: ${appear} 1s linear forwards;
@media(max-width: 800px) {
    display:none;
}
`;

export const Content = styled.div`
height:100vh;
width:50%;
display:flex;
justify-content:center;
align-items:center;
@media(max-width: 800px) {
    width:100%;
}
img{
    width:50%;
    margin: 15px 0;
    @media(max-width: 800px) {
    width:50%;
}
}
a{
    color: #2E8BC0;
    text-decoration:none;
    display:flex;
    align-items:center;
    margin-top: 5px;
    &:hover{
        opacity:.8;
    }
    svg{
        margin: 2px;
    }
}
`;