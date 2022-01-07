import React from 'react'
import { DateComp, HeaderWrapper, MoneyComp, TimeComp, WeatherComp } from './style';
import moon from '../../assets/moon.jpg';
import wood from '../../assets/wood.png';

interface IHeaderComponentProps {
    
}

const HeaderComponent = (props:IHeaderComponentProps) => {
    return (
        <HeaderWrapper src={wood}>
            <WeatherComp src={moon} />
            <TimeComp>
                18:00
            </TimeComp>
            <DateComp>
                13 Juli 2021
            </DateComp>
            <MoneyComp>
                Rp. 200k
            </MoneyComp>
        </HeaderWrapper>
    )
}



export default HeaderComponent;


