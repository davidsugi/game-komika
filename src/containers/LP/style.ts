import styled from 'styled-components';

export const GamePlayWrapper = styled.div`
    max-width: 509px;
    max-height: 710px;
    height: 150vw;
    width: 100vw;
    margin: auto;
    background: yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow:hidden;
`;



export const LPWrapper = styled.div`
    width:100vw;
    height:100vh;
    background-color: #43464a;
    display:flex;
    flex-direction: column;
    span{
        color: white;
        padding: 2vw;
        font-weight: bold;
    }
`;