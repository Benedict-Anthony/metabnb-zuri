import React from 'react'
import { ButtonStyle } from '../../styles/Button.styled'
const Button = ({ text, color, bgColor, type, handleClick }) => {
    return (
        <ButtonStyle type={type ? type : "button"} color={color} bg={bgColor} style={{
            color: color,
            backgroundColor: bgColor
        }} onClick={handleClick}>
            {text}
        </ButtonStyle>
    )
}

export default Button
