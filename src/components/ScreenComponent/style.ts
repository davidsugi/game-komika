import styled, { keyframes } from 'styled-components';

interface IScreenWrapper {
    src:string;
}

export const ScreenWrapper = styled.div`
    width: 100%;
    height: 11vw;
    flex: 8;
    background-image: url(${(props: IScreenWrapper) => props.src});
    background-size: cover;
    display: flex;
    position: relative;
    align-items: end;
    justify-content: center;
    margin-bottom: 11vw;
    background-position: center bottom;
    @media (min-width: 500px) {
      margin-bottom: 56px;
    }
`;

export const WindowWrapper = styled.img`
    width: 28vw;
    position: absolute;
    right: 5vw;
    top: 21vw;
    @media (min-width: 471px) {
        top: 200px;
    }
`;


const move = (to:string) => keyframes`
  from { background-position: 0px; }
  to { background-position: ${to}; }
`

export const SkyWrapper = styled.div`
    position: absolute;
    right: 3vw;
    top: 6vw;
    height: 54vw;
    animation: ${move("241px")} 12s infinite linear;
    background-image: url(${(props: IScreenWrapper) => props.src});
    width: 40vw;
    background-size: cover;
    @media (min-width: 500px) {
        right: 20px;
        height: 331px;
        width: 146px;
    }
`;

