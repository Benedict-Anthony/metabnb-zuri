import React, { useState, useEffect } from 'react';
import { Container } from '../styles/Container.styled';
import logo from "../assets/logo.png";
import { navLinks } from '../scripts/navLinks';
import { Link, useLocation } from 'react-router-dom';
import Button from './shared/Button';
import { AiOutlineBars } from "react-icons/ai";



import { HeaderStyles, NavStyles, LogoStyles, NavLInks, NavLinkItem } from '../styles/NavBar.styled';
const NavBar = ({ handleClick }) => {
    const [activeMenu, setActiveMenu] = useState(false)
    const location = useLocation()
    useEffect(() => {
        setActiveMenu(false)
    }, [location])
    return (
        <HeaderStyles>
            <Container>
                <NavStyles>
                    <LogoStyles>
                        <img src={logo} alt="" />
                        <h2>Metabnb</h2>
                    </LogoStyles>

                    <NavLInks className={`${activeMenu && "active"}`}>
                        {navLinks.length > 0 && navLinks.map((item) => (
                            <NavLinkItem key={item.id}>
                                {item.page ? <Link to={item.path}>{item.name}</Link> : <a href={`#${item.name}`}>{item.name}</a>}
                            </NavLinkItem>
                        ))}

                    </NavLInks>

                    <Button color={"#fff"} bgColor={"hsla(319, 65%, 38%, 1)"} text={"connect wallet"} handleClick={handleClick} />
                    <AiOutlineBars onClick={() => setActiveMenu(!activeMenu)} />

                </NavStyles>
            </Container>
        </HeaderStyles>
    )
}

export default NavBar