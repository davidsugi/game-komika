import styled, {keyframes} from 'styled-components';

interface IPlayerWrapper {
    src:string;
}

const anim = keyframes`
  from { background-position: 0px; }
  to { background-position: 105vw; }
`

export const PlayerWrapper = styled.div`
    background-image: url(${(props: IPlayerWrapper) => props.src});
    background-size: cover;
    width: 55vw;
    height: 71vw;
    position: absolute;
    bottom: 2vw;
    animation: ${anim} 1.5s infinite steps(2);
    bottom: -6vw;
    left: 10vw;

`;