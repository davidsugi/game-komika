import React from 'react';
import ConsoleComponent from '../../components/ConsoleComponent';
import HeaderComponent from '../../components/HeaderComponent';
import ScreenComponent from '../../components/ScreenComponent';
import { GamePlayWrapper, LPWrapper } from './style';

interface ILPProps {
    
}

const LP = (props:ILPProps) => {
    return (
        <LPWrapper>
            <GamePlayWrapper>
                <HeaderComponent />
                <ScreenComponent />
                <ConsoleComponent />
            </GamePlayWrapper>
            <span>@davsugi, 2021</span>
        </LPWrapper>
    )
}

export default LP;

