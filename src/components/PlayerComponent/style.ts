import styled, {keyframes} from 'styled-components';

interface IPlayerWrapper {
    src:string;
}

const anim = (to:string) => keyframes`
  from { background-position: 0px; }
  to { background-position: ${to}; }
`

export const PlayerWrapper = styled.div`
    background-image: url(${(props: IPlayerWrapper) => props.src});
    background-size: cover;
    width: 59vw;
    height: 83vw;
    position: absolute;
    animation: ${anim("123vw")} 1.5s infinite steps(2);

    @media (min-width: 500px) {
        width: 300px;
        height: 406px;
        margin-left: -40px;
        animation: ${anim("600px")} 1.5s infinite steps(2);
    }
`;

