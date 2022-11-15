import React from 'react'
import About from '../components/About';
import Bar from '../components/Bar'
import Features from '../components/Features'
import Modal from '../components/Modal';
import Showcase from '../components/Showcase';
import { nfts } from '../scripts/nfts';

const Home = ({ handleClick, activeModal }) => {

    return (
        <>
            <Showcase />
            {activeModal && <Modal onClick={handleClick} />}
            <Bar />
            <Features nfts={nfts} number={8} text={"Inspiration for your next adventure"} />
            <About />
        </>
    )
}

export default Home