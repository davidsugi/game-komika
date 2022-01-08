import React from 'react'
import { ScreenWrapper, SkyWrapper, WindowWrapper } from './style';
import roomN from '../../assets/windows/roomN.png';
import roomS from '../../assets/windows/roomS.png';
import PlayerComponent from '../PlayerComponent';
import sky from '../../assets/windows/sky.png';
import night from '../../assets/windows/skyNight.png';

interface IScreenComponentProps {
    
}

const ScreenComponent = (props:IScreenComponentProps) => {
    return (
        <React.Fragment>
        <SkyWrapper src={night} />
            <ScreenWrapper src={roomN}>
                <PlayerComponent />
            </ScreenWrapper>
        </React.Fragment>
    )
}



export default ScreenComponent;


