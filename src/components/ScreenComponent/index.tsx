import React from 'react'
import { ScreenWrapper } from './style';
import room from '../../assets/room.png';
import PlayerComponent from '../PlayerComponent';

interface IScreenComponentProps {
    
}

const ScreenComponent = (props:IScreenComponentProps) => {
    return (
        <ScreenWrapper src={room}>
            <PlayerComponent />
        </ScreenWrapper>
    )
}



export default ScreenComponent;


