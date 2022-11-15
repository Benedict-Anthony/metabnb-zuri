import styled from "styled-components";

export const CardStyle = styled.article`
    background: linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%);
    border: 1px solid #D7D7D7;
    border-radius: 15px;
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    flex-direction:column;
    padding: 15px;

`

export const CardImage = styled.div`
    width: 100%;
    img{
        width: 100%;
    }
`

export const CardBody = styled.div`
    margin-top:10px;
`

export const CardText = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    column-gap:20px;
    margin-top:14px;

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 13px;
        color: #434343;

    }
    
    h2{
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 13px;
        color: #434343;
    }
`

export const CardStars = styled.div`

    margin-top:20px;
    svg{
        margin:0 5px;
        width: 12px;
        height: 12px;
        color:hsla(319, 65%, 38%, 1);
    }
`