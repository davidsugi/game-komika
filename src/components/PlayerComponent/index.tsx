import React from 'react'
import sprite from '../../assets/sprite.png';
import { PlayerWrapper } from './style';

interface IPlayerComponentProps {
    
}

const PlayerComponent = (props:IPlayerComponentProps) => {
    return (
        <PlayerWrapper src={sprite} />
    )
}



export default PlayerComponent;


