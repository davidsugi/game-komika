import React from 'react'
import { ConsoleWrapper } from './style';

import wood from '../../assets/wood.png';


interface IConsoleComponentProps {
    
}

const ConsoleComponent = (props:IConsoleComponentProps) => {
    return (
        <ConsoleWrapper src={wood}>
            
        </ConsoleWrapper>
    )
}



export default ConsoleComponent;


