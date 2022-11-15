import styled from "styled-components";

export const BarStyle = styled.section`
    margin-top:30px;
    background: hsla(319, 65%, 38%, 1);
    width: 100%;
    padding: 10px 5px;
`
export const BarElements = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
`
export const BarImage = styled.div`
    width:6rem;
    img{
        width: 100%;
    }

    @media(max-width:600px){
        img{
            width:4rem;
        }
    }

`