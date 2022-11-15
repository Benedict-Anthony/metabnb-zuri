import React from 'react'
import token from "../assets/token.png"
import metamask from "../assets/metamask.png"
import opensea from "../assets/open.png"
import { Container } from '../styles/Container.styled'
import { BarStyle, BarElements, BarImage } from '../styles/Bar.style'

const Bar = () => {
    return (
        <BarStyle>
            <Container>
                <BarElements>
                    <BarImage>
                        <img src={token} alt="" />

                    </BarImage>
                    <BarImage>
                        <img src={metamask} alt="" />

                    </BarImage>
                    <BarImage>
                        <img src={opensea} alt="" />

                    </BarImage>

                </BarElements>
            </Container>
        </BarStyle>
    )
}

export default Bar
