import styled from 'styled-components'

export const Wrap = styled.div`
    display: flex;
    align-items:center;
    width: 100%;
    min-height: 80px;
    background: #101522;
`;

export const  Inside = styled.div`
   display: flex;
   margin: auto;
  align-items: center;
   flex-direction: column;
   width: 90%;
`;

export const Text = styled.div`
    color: #fff;
    margin: auto;
    font-size: 14px;
    font-family: monospace;
`

export const Image = styled.img`
    margin-left: 12px;
    max-width: 25px;
    min-height: 18px;

`;