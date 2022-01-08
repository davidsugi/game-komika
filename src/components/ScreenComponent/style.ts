import styled from 'styled-components';

interface IScreenWrapper {
    src:string;
}

export const ScreenWrapper = styled.div`
    width: 100%;
    height: 11vw;
    background: white;
    flex: 8;
    background-image: url(${(props: IScreenWrapper) => props.src});
    background-size: cover;
    display: flex;
    position: relative;
    align-items: end;
    justify-content: center;
    margin-bottom: 11vw;
    @media (min-width: 500px) {
      margin-bottom: 56px;
    }
`;