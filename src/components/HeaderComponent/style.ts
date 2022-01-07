import styled from 'styled-components';


interface IHeaderWrapper {
    src:string;
}

export const HeaderWrapper = styled.div<IHeaderWrapper>`
    width: 100%;
    height: 11vw;
    background: burlywood;;
    flex: 1;
    display: flex;
    div{
        display:flex;
    }
    background-image: url(${(props: IHeaderWrapper) => props.src});
`;

export const WeatherComp = styled.img`
  background: red;
  width:13%;
`;

export const DateComp = styled.div`
  width: 22%;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

export const TimeComp = styled.div`
  width: 22%;
  background: black;
  color: white;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

export const MoneyComp = styled.div`
  flex:1;
  background: darkblue;
  justify-content: end;
  padding: 2vw;
  color:white;
  font-weight: bold;
  align-items: center;
`;