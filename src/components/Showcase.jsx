import React from 'react'
import { ShowcaseStyle, ShowcaseMain, ImageDiv, TextFormDiv, ShowcaseForm, ImageDiv1, ImageDiv2 } from '../styles/Showcase.styled'
import Button from './shared/Button';
import showcase1 from "../assets/showcase-1.png"
import showcase2 from "../assets/showcase-2.png"
import showcase3 from "../assets/showcase-3.png"
import showcase4 from "../assets/showcase-4.png"
import { Container } from '../styles/Container.styled';


const Showcase = () => {
    return (
        <ShowcaseStyle>
            <Container>
                <ShowcaseMain>
                    <TextFormDiv>
                        <h2>Rent a <span>place</span> away from <span>home</span> in the <span>metaverse</span></h2>

                        <p>We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to to reality at your own confort zone</p>

                        <ShowcaseForm >
                            <input type="text" placeholder='search for a location' />
                            <Button color={"#fff"} bgColor={"hsla(319, 65%, 38%, 1)"} text={"search"} />
                        </ShowcaseForm>
                    </TextFormDiv>

                    <ImageDiv>
                        <ImageDiv1>
                            <img src={showcase1} alt="" />
                            <img src={showcase2} alt="" />
                        </ImageDiv1>

                        <ImageDiv2>
                            <img src={showcase3} alt="" />
                            <img src={showcase4} alt="" />
                        </ImageDiv2>
                    </ImageDiv>
                </ShowcaseMain>
            </Container>
        </ShowcaseStyle>
    )
}

export default Showcase
