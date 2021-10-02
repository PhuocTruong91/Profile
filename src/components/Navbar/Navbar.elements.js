import styled from 'styled-components'

export const Wrap = styled.div`
    position: sticky;   
    width: 100%;
    height: ${({ visible }) => visible ? '100px' : '80px'};
    background-color: ${({ visible }) => visible ? 'rgba(2,2,2,0)' : '#101522'};
    top: 0;
    z-index: 3;
    transition: all 0.2s ease ;
`;

export const Inside = styled.div`
    margin: auto;
    display: flex;
    width: 90%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const Header = styled.p`
    color: white;
    font-size: 25px;
    font-weight: bold ;
    margin-left: 100px;
`;

export const List = styled.div`
    display: flex;
    justify-content: space-between;
    width: 20%;
    margin-right: 120px;
   
`;

export const Item = styled.div`
    cursor: pointer;
    font-size: 18px;
    color: white;
    font-weight: bold;
    margin-right: 50px;
    padding: 5px;
    box-sizing: border-box;
    height: 35px;
    transition: opacity 0.3s;
    ${({ visible }) => visible ? '  :hover{ border-bottom: 3px solid white;  opacity: 0.7;}' : '  :hover{opacity: 0.7;}'};
  

  
`;



