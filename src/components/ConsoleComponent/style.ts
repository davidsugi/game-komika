import styled from 'styled-components';

export const ConsoleWrapper = styled.div`
    width: 90vw;
    height: 16vw;
    background: burlywood;
    flex: 1;
    background: rgba(14,18,134,1);
    border: rgba(3,11,238,1) solid 4px;
    border-radius: 17px;
    position: absolute;
    bottom: -11px;
    padding-left: 5vw;
    padding-right: 5vw;
    @media (min-width: 500px) {
        padding-left: 20px;
        padding-right: 20px;
        height: 87px;
    }
    display: flex;
    align-items: center;
    max-width: 470px;
    justify-content: space-between;
    background: linear-gradient(0deg, rgba(44,80,255,1) 0%, rgba(24,27,121,1) 63%);
`;

export const ButtonWrapper = styled.div`
    color: white;
    background: rgba(20,26,196,1);
    border: rgba(79,84,255,1) solid 4px;
    font-size: 6vw;
    font-weight: bold;
    font-family: Bit,Arial,serif;
    
    padding: 1.5vw;
    padding-left: 3vw;
    padding-right: 3vw;
    border-radius: 1vw;
    @media (min-width: 500px) {
        padding: 8px;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 28px;
    }

    :active {
        border: rgba(67,72,213,1) solid 4px;
        color: rgba(138,141,231,1);
        background: rgba(14,18,134,1);
    }
`;
