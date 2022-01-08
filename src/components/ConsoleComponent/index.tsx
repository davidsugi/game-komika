import React from 'react'
import { ConsoleWrapper, ButtonWrapper } from './style';


interface IConsoleComponentProps {
    
}

const ConsoleComponent = (props:IConsoleComponentProps) => {
    return (
        <ConsoleWrapper>
            <ButtonWrapper>
                Save
            </ButtonWrapper>
            <ButtonWrapper>
                Menu
            </ButtonWrapper>
        </ConsoleWrapper>
    )
}



export default ConsoleComponent;


