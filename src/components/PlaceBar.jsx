import React, { useState } from 'react'
import { placebars } from '../scripts/placebar'
import { Container } from '../styles/Container.styled';
import { Locationstyles, PlaceBarStyles, PlaceBarUl } from '../styles/PlaceBar.styled';
import settings from "../assets/setting.svg"
const PlaceBar = () => {
    const [activeSettings, setActiveSettings] = useState(false)
    return (
        <PlaceBarStyles>
            <Container>
                <PlaceBarUl className={`${activeSettings && "active"}`}>
                    {placebars.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                    <Locationstyles>Location <img src={settings} alt="" /></Locationstyles>
                </PlaceBarUl>
                <Locationstyles className="mobile" onClick={() => setActiveSettings(!activeSettings)}>Location <img src={settings} alt="" /></Locationstyles>
            </Container>
        </PlaceBarStyles>
    )
}

export default PlaceBar
