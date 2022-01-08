import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 11vw;
    flex: 1;
    display: flex;
    position: absolute;
    z-index: 9;
    width: 44vw;
    top: -5px;
    right: -5px;
    flex-direction: row;
    border-bottom-left-radius: 5px;
    overflow: hidden;
    border: blue solid 3px;
    font-family: Bit, Arial, serif;
    
    div{
        display:flex;
    }

    @media (min-width: 500px) {
      height: 58px;
      width: 240px;
    }
`;

export const RightWrapper = styled.div`
  flex:2;
  display: flex;
  flex-direction: column;
`;

export const DateWrapper = styled.div`
  flex:1;
  display: flex;
`;


export const WeatherComp = styled.img`
  background: red;
  width: 11vw;
  @media (min-width: 500px) {
    width: 58px;
  }
`;

export const DateComp = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: darkblue;
  color: white;
  font-size: 4vw;
  @media (min-width: 500px) {
    font-size: 23px;
  }
`;

export const TimeComp = styled.div`
  width: 12vw;
  background: black;
  color: green;
  align-items: center;
  justify-content: center;
  font-family: Watch, Arial, serif !important;
  @media (min-width: 500px) {
      width: 53px;
      font-size: 19px;
  }
`;

export const MoneyComp = styled.div`
  flex:1;
  background: black;
  justify-content: end;
  color:white;
  align-items: center;
  padding: 2px;
  opacity: 0.8;
  font-size: 6vw;
  padding-left: 2px;
  height: 16px;
  @media (min-width: 500px) {
    font-size: 23px;
  }
`;