import styled  from "styled-components";


export const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    background: #fff;
`;

export const  Inside = styled.div`

    margin-left: 120px;
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;


export const Image = styled.div`
    width: 450px;
    min-height:100px;
    height: 500px;
  
    position: relative;
    background-color: #314168;
`

export const Decoration = styled.div`
     background-position: center center;
    background-size: cover;
    width: 450px;
    height: 500px;
    position: absolute;
    z-index: 1;
    top: -50px;
    right: -50px;
`;


export const Bar = styled.div`
    width: 8px;
    height: 60%;
    background-color: #2f446f;
    margin-left: 50px;
`;

export const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-left: 120px;
`;

export const Tittle = styled.p`
    text-align: center;
    background-color: #819aca;
    padding: 5px;
    font-size: 24px;
    width: 130px;
    color: white;
`

export const Content = styled.p`
    color: rgba(255, 255, 255, 0.7);
    font-size: 18px;
    color: gray;
    line-height: 35px;
    text-align: justify;
    margin-top: 5px;
`;