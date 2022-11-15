import styled from "styled-components";

export const Aboutstyle = styled.main`
    padding:4rem 10px;
    margin-top:30px;
    background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
    border: 1px solid #000000;
    width: 100%;

`

export const AboutBody = styled.section`
    display:flex;
    align-items:center;
    justify-content:space-between;

    @media(max-width:767px){
        flex-direction:column-reverse;
    }
`

export const AboutText = styled.div`
    width:100%;
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
    flex-direction:column;
    row-gap:30px;

    h2{
        font-style: normal;
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 60px;
        background: linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 1.1rem;
        line-height: 35px;
        background: linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }

     @media(max-width:767px){
        align-items:center;
        margin-bottom:15px;

         p, h2{
           text-align:center;
       }

       h2{
        font-size:1.4rem;
       }

       p{
        font-size: 1rem;
       }
    }
`

export const AboutIMage = styled.div`

    width:100%;

    img{
        width:100%;
    }


     /* @media(max-width:767px){
       width:80%;
    } */

`
