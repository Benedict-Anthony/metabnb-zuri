import styled from "styled-components";

export const ShowcaseStyle = styled.section`
    margin-top:70px;
    width:100%;

`

export const ShowcaseMain = styled.main`
    display:flex;
    justify-content:space-between;
    align-items:center;
    column-gap:30px;
    min-height:50vh;

     @media(max-width:767px){
        flex-direction:column;
    }
`

export const TextFormDiv = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
    flex-direction:column;
    row-gap:30px;
    height: 100%;



    h2{
        font-style: normal;
        font-weight: 400;
        font-size: 56px;
        line-height: 140%;
        letter-spacing: -0.02em;
        color: #434343;

        span{
           color:hsla(319, 65%, 38%, 1) 
        }
    }

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 35px;
        color: #434343;
    }

     @media(max-width:768px){
        row-gap:10px;
       h2{
        font-size:1.5rem;
       }

       p{
        font-size:1.2rem;
       }
    }
`


export const ShowcaseForm = styled.form`
    position:relative;
    width: 80%;
    display: flex;
    justify-content:center;
    align-items:center;

    input{
        width: 100%;
        padding: 10px 6px;
        background: rgba(247, 247, 247, 0.1);
        border: 1px solid #A3A3A3;
        border-radius: 8px;
        font-family:inherit;
        font-size:14px;
    }

    button{
        position: absolute;
        top:0;
        right: 0;
        bottom:0;
        border-radius: 0px 8px 8px 0px;
        padding: 10px 30px;
        
    }

     @media(max-width:768px){
        width:100%;
    }
`


export const ImageDiv = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    column-gap:10px;
    height: 100%;

    div{
        width:100%;
        img{
            width: 100%;
            /* height: 176px; */
        }
    }

     @media(max-width:767px){
       div{
        margin-top:20px;
        img{
         width:100%;
        }
       }
    }
`
export const ImageDiv1 = styled.div`
    align-self:flex-end;
    justify-self:flex-end;
    margin-top:5rem;
`

export const ImageDiv2 = styled.div`
    align-self:flex-end;
    justify-self:flex-end;
    margin-bottom:5rem;
`
