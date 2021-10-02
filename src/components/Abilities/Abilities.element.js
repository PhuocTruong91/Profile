import styled from 'styled-components'

export const Wrap = styled.div`
    width: 100%;
    height: 150px;
    background-color: #101522;
`;

export const  Inside = styled.div`
    margin: auto;
    width: 80%;
    height:  100%;
    display: flex;
    justify-content: space-between;
    margin-left: 100px;
    margin-top: 10px;
`;

export const Header = styled.div`
    padding-top: 4px;
    width: 150px;
    color: white;
    border: 8px solid white;
    border-top: none;
    margin: auto;
    height: 30px;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    letter-spacing: 3px;

    border-radius: 0 0 60% 60%;
`

export const Item = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
`;

export const Icon = styled.img`
    color: white;
    width: 40px;
    height: 40px;
`;

export const Tittle = styled.p`
    color: white;
    font-size: 16px;
    font-weight: bolder;
`;