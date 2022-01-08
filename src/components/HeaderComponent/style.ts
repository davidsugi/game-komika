import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    height: 16vw;
    width: 65vw;
    flex: 1;
    display: flex;
    position: absolute;
    z-index: 9;
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
      height: 85px;
      width: 327px;
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
  width: 16vw;
  @media (min-width: 500px) {
    width: 85px;
  }
`;

export const DateComp = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: darkblue;
  color: white;
  font-size: 6vw;
  @media (min-width: 500px) {
    font-size: 32px;
  }
`;

export const TimeComp = styled.div`
  width: 12vw;
  background: black;
  color: green;
  align-items: center;
  justify-content: center;
  font-family: Watch, Arial, serif !important;
  font-size: 5vw;
  @media (min-width: 500px) {
      width: 53px;
      font-size: 25px;
  }
`;

export const MoneyComp = styled.div`
  flex:1;
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(24,28,154,1) 53%);
  justify-content: end;
  color:white;
  align-items: center;
  opacity: 0.8;
  font-size: 8vw;

  border-top: blue solid 2px;
  padding-right: 12px;
  @media (min-width: 500px) {
    font-size: 39px;
  }
`;