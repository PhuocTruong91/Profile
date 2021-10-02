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
    justify-content: space-around;
`;


export const Video = styled.video`
    width: 700px;
    min-height:100px;
    height: 400px;
    border-radius: 10px;
`

export const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    align-items: flex-end;
`;

export const Tittle = styled.p`
    text-align: center;
    background-color: #819aca;
    padding: 5px;
    font-size: 24px;
    width: 130px;
    color: white;
    float: right;
`

export const Content = styled.p`
    color: rgba(255, 255, 255, 0.7);
    font-size: 18px;
    color: gray;
    line-height: 30px;
    text-align: justify;
    margin-top: 5px;
`;