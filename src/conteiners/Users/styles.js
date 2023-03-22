import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from '../../Asses/background.svg';

export const Conteiner = styled.div`
    background: url('${background}');
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px; 

    height: 100%;
    min-height: 100vh;
`;

export const Image = styled.img`

    margin-top: 30px;

`;
export const ConteinerItens = styled.div`
  
  background: linear-gradient(157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%, 
    rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    backdrop-filter: blur(45px);
    
    padding: 50px 36px;

    display: flex;
    flex-direction: column;

    height: 100%;
    min-height: 100vh; 
`;

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 80px;
`;


export const Button = styled(Link)`
    width: 342px;
    height: 74px;
    left: 35px;
    top: 497px;
    

    background: transparent;
    border-radius: 10px;
    gap: 10px;  
    border: 1px solid #FFFFFF;
    margin-top: 132px;

    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:hover{
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }

    img {
        transform: rotateY(180deg);
    }

    
`;

export const User = styled.li `
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 14px;
  
    width: 342px;
    height: 58px;
    padding-left: 25px;

    border: none;
    outline: none;
    margin-bottom: 44px;


    p {
        
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

`

