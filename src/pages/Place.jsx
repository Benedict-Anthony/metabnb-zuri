import React from 'react'
import Features from '../components/Features'
import PlaceBar from '../components/PlaceBar'
import { nfts } from '../scripts/nfts'
import { ShowcaseStyle } from '../styles/Showcase.styled'

const Place = () => {
    return (
        <ShowcaseStyle>
            <PlaceBar />
            <Features nfts={nfts} number={nfts.length} />
        </ShowcaseStyle>
    )
}

export default Place
