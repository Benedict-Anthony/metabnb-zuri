import styled from "styled-components";

export const FooterStyle = styled.section`
    width:100%;
    background: hsla(256, 1%, 11%, 1);
    padding: 20px 0;
    color:#FFF;
    overflow:hidden;
`

export const FooterBody = styled.footer`
    width:100%;
    display: flex;
    align-items:center;
    justify-content:space-between;
    flex-wrap:wrap;
    
     @media(max-width:667px){
        flex-direction:column-reverse;
        text-align:center;
        gap: 30px;
    }
    
`

export const FooterMeta = styled.footer`
    display: flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    gap:30px;

   
`


export const FooterLogo = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:20px;
    font-size:20px;

    img{
        width:30px;
    }
    
`

export const FooterIcons = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    gap:30px;
    margin-bottom:20px;

    svg{
        font-size:15px;
    }
    
`

export const FooterCopyRight = styled.div`
    margin-top: 17px;
    p{
        word-spacing:10px;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
    }
`

export const FooterLinks = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
`