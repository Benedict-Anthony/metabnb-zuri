import React from 'react'
import { Container } from '../styles/Container.styled'
import Button from './shared/Button'
import aboutImage from "../assets/about.png"
import { Aboutstyle, AboutBody, AboutText, AboutIMage } from '../styles/About.style'
const About = () => {
    return (
        <Aboutstyle>
            <Container>
                <AboutBody>
                    <AboutText>
                        <h2>Metabnb NFTs</h2>
                        <p>
                            Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                        </p>

                        <Button text={"learn more"} bgColor={"#fff"} />
                    </AboutText>

                    <AboutIMage>
                        <img src={aboutImage} alt="" />
                    </AboutIMage>
                </AboutBody>
            </Container>
        </Aboutstyle>
    )
}

export default About
