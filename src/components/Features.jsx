import React from 'react'
import { Container } from '../styles/Container.styled'
import Card from './shared/Card'
import { FeatureStyle, H2Style } from '../styles/Feature.styled';


const Features = ({ nfts, number, text }) => {
    return (
        <Container>
            <H2Style>{text}</H2Style>
            <FeatureStyle>
                {nfts.slice(0, number).map((nft) => (
                    <Card key={nft.id} nft={nft} />
                ))}
            </FeatureStyle>
        </Container>
    )
}

export default Features
