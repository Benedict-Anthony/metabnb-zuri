import React from 'react';
import { AiFillStar } from "react-icons/ai"
import { CardStyle, CardImage, CardBody, CardText, CardStars } from '../../styles/Card.style';
const Card = ({ nft }) => {
    return (
        <CardStyle>
            <CardImage>
                <img src={nft.imageURL} alt="" />

            </CardImage>
            <CardBody>
                <CardText>
                    <p>{nft.name}</p>
                    <h2>{nft.duration}</h2>
                </CardText>

                <CardText>
                    <p>{nft.distance}</p>
                    <p>{nft.desc}</p>
                </CardText>
            </CardBody>

            <CardStars>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </CardStars>
        </CardStyle>
    )
}

export default Card
