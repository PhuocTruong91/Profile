import styled  from "styled-components";

export const Wrap = styled.div`
    width: 100%;
    height: 90vh;
    /* background: #212c3f; */
    margin-top: 0px;
`;

export const Inside = styled.div`
    margin: auto;
    width: 70%;
    height: 70%;
    padding-top: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;

export const Item = styled.div`
    width: 300px;
    height: 400px;
    box-shadow:  0px 4px 7px rgba(0,0,0,0.2);
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.4s;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;

    :hover{     
       background: #101522;

       #tittle{
           color: white;
       }
       #content{
           color: white;
       }
    }
`;

export const Tittle = styled.div`
    margin-top: 20px;
    color:  #2f446f;
    font-size: 23px;
    font-weight: bold;

`;

export const Content = styled.div`
    margin-top: 5px;
    color: black;
    font-size: 18px;
    max-width: 80%;
    min-height: 50px;
    text-align: justify;
    word-break: break-all;
`;

