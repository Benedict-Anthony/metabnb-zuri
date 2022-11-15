import React from 'react'
import { Container } from '../styles/Container.styled'
import logoDark from "../assets/logodark.png";
import { TfiFacebook } from "react-icons/tfi"
import { FaInstagram, FaTwitter } from "react-icons/fa"
import FooterLInk from './shared/FooterLInk';

import { FooterStyle, FooterBody, FooterLogo, FooterIcons, FooterCopyRight, FooterMeta } from '../styles/Footer.styled';

import { about, community, places } from '../scripts/footer';
const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <FooterStyle>
            <Container>
                <FooterBody>
                    <FooterMeta>
                        <FooterLogo>
                            <img src={logoDark} alt="" />
                            <h2>Metabnb</h2>
                        </FooterLogo>
                        <FooterIcons>
                            <TfiFacebook />
                            <FaInstagram />
                            <FaTwitter />
                        </FooterIcons>
                        <FooterCopyRight>
                            <p>&copy; {year} Metabnb</p>
                        </FooterCopyRight>

                    </FooterMeta>


                    <FooterLInk arr={community} title={"community"} />
                    <FooterLInk arr={places} title={"places"} />
                    <FooterLInk arr={about} title={"about"} />

                </FooterBody>
            </Container>
        </FooterStyle>
    )
}

export default Footer
