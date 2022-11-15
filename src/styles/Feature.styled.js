import styled from "styled-components";

export const FeatureStyle = styled.main`
    margin:30px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    justify-content: space-between;
    align-items: center;
    gap: 10px;

`

export const H2Style = styled.h2`
        font-family: 'Red Rose';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 60px;
        color: #000000;
        text-align:center;
        margin:10px 0;
    
    @media(max-width:680px){
            font-size:1.4rem;
            line-height: 30px;

        
    }
    `