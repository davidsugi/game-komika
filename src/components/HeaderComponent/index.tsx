import React from 'react'
import { DateComp, DateWrapper, HeaderWrapper, MoneyComp, RightWrapper, TimeComp, WeatherComp } from './style';
import moon from '../../assets/moon.png';

interface IHeaderComponentProps {
    
}

const HeaderComponent = (props:IHeaderComponentProps) => {
    return (
        <HeaderWrapper>
            <WeatherComp src={moon} />
            <RightWrapper>
                <DateWrapper>
                    <TimeComp>
                        18:00
                    </TimeComp>
                    <DateComp>
                        13 Juli 2021
                    </DateComp>
                </DateWrapper>
                <MoneyComp>
                    Rp. 200k
                </MoneyComp>
            </RightWrapper>
        </HeaderWrapper>
    )
}



export default HeaderComponent;


