import styled from "styled-components";

export const Wrap = styled.div`
    width: 100%;
    height: 80vh;
`;

export const Inside = styled.div`
    margin: auto;
    width: 70%;
    height: 70%;
    margin-top: 80px;
`;

export const Left = styled.div`
    display: flex;
    width: 40%;
    flex-direction: column;
`

export const Tittle = styled.p`
    color:white;
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 20px;
    width: 29ch;
    animation: typing 2s steps(22), blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;


@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}
`;

export const Content = styled.div`
    font-size: 18px;
    font-weight: lighter;
    color: rgba(255,255,255,0.7);
    text-align: justify;
    line-height: 1.5em;
    width: 1000px;
`;

export const Video = styled.video`
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    height: 1000px;
    z-index: -1;
    background-image: black;
`;

