import React from 'react'
import spriteO from '../../assets/spriteO.png';
import spriteJ from '../../assets/spriteJ.png';
import { PlayerWrapper } from './style';

enum E_PLAYER_TYPE {
    OPENMIC=0,
    JOBLESS=1,
}

const PlayerSprite = {
    [E_PLAYER_TYPE.OPENMIC]: spriteO,
    [E_PLAYER_TYPE.JOBLESS]: spriteJ,
}

interface IPlayerComponentProps {
    
}

const PlayerComponent = (props:IPlayerComponentProps) => {
    return (
        <PlayerWrapper src={PlayerSprite[E_PLAYER_TYPE.JOBLESS]} />
    )
}



export default PlayerComponent;


