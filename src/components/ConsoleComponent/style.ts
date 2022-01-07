import styled from 'styled-components';


interface IConsoleWrappe {
    src:string;
}

export const ConsoleWrapper = styled.div`
   width: 100%;
    height: 11vw;
    background: burlywood;
    flex: 1;
    background-image: url(${(props: IConsoleWrappe) => props.src});
`;