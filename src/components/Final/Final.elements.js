import styled from 'styled-components'

export const Wrap = styled.div`
    width: 100%;
    height: 90vh;
    background: #101522;
    margin-top: 0px;
`;

export const Inside = styled.div`
    margin: auto;
    width: 70%;
    height: 70%;
    padding-top: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

export const WrapBar = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`
export const WrapInfoBar = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const Tittle = styled.div`
    font-size: 16px;
    color: white;
    font-size: bold;
`;

export const Percent = styled.div`
    font-size: 16px;
    color: white;
    font-size: bold;
`;

export const Bar = styled.div`
    width: 550px;
    height: 10px;
    border-radius: 10px;
    background-color: white;

    :hover{
        ::before {
        text-align: center;
        content: "";
        font-size: 8px;
        display: block;
        border-radius: 9px;
        width: 81%;
        height: 100%;
        background-color: #1e1e7b;
        transition: all 0.5s ease;

        
    }
        }
    
    ::before {
        text-align: center;
        content: "";
        font-size: 8px;
        display: block;
        border-radius: 9px;
        width: ${({percent}) => percent};
        height: 100%;
        background-color: #1e1e7b;
        transition: all 0.5s ease;

        
    }
`;