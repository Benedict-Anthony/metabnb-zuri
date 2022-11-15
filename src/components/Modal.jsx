import React from 'react'
import { H2Style, ModalStyle } from '../styles/Modla.styled'
import x from "../assets/x.png"
import { BsChevronRight } from "react-icons/bs";
import modal1 from "../assets/modal-1.png"
import modal2 from "../assets/modal-2.png"
import { ModalEl, ModalOptions, ModalHeader } from '../styles/Modla.styled';
const Modal = ({ onClick }) => {
    return (
        <ModalStyle>
            <ModalHeader>
                <h3>Connect Wallet</h3>
                <img src={x} alt="X" onClick={onClick} />
            </ModalHeader>
            <H2Style>Choose your preferred wallet:</H2Style>
            <ModalOptions>
                <ModalEl>
                    <div>
                        <img src={modal1} alt="" />
                        <h2>Metamask</h2>
                    </div>
                    <BsChevronRight />
                </ModalEl>

                <ModalEl>
                    <div>
                        <img src={modal2} alt="" />
                        <h2>WalletConnect</h2>
                    </div>
                    <BsChevronRight />
                </ModalEl>
            </ModalOptions>
        </ModalStyle>
    )
}

export default Modal
