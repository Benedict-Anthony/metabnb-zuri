import React from 'react'
import styled from "styled-components";


const FooterLInk = ({ arr, title }) => {
    return (
        <Link>
            <h3>{title}</h3>
            {arr.map((item) => (
                <li key={item.id}> <a href="/">{item.path}</a> </li>
            ))}
        </Link>
    )
}

export default FooterLInk

const Link = styled.ul`
    text-transform:capitalize;
    h3{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
        margin-bottom:13px;
    }

    li{
        a{
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 35px;
            color: #F1F3F9;

        }
    }
`
