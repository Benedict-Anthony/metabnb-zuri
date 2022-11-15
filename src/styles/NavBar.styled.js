import styled from "styled-components";

export const HeaderStyles = styled.header`
    width: 100%;
    background-color:#fff;
    padding: 10px 0;
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:15;
`

export const NavStyles = styled.nav`
     display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;

     svg{
        font-size:20px;
        color:hsla(319, 65%, 38%, 1);
        display: none;
    }

    @media(max-width:680px){
        svg{
            display:block;
        }
    }
`

export const LogoStyles = styled.div`
    display:flex;
    align-items:center;
    justify-content:center; 
    z-index:20;

    img{
        width: 30px;
    }

    h2{
        background:linear-gradient(91.47deg, #DC3E88 18.25%, #B840AE 43.34%, #843FE8 78.18%);
         -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size:2rem;
    }

    @media(max-width:768px){
        img{
            width: 20px;
        }
        h2{
            font-size:1.3rem;
        }
    }
`

export const NavLInks = styled.ul`
    display:flex;
    align-items:center;
    justify-content:space-between;
    column-gap:20px;

   


    @media(max-width:680px){
       position: absolute;
       z-index:15;
       top:0;
       left:100%;
       width: 85%;
       height:80vh;
       background: #fff;
       flex-flow:column;
       justify-content:center;
       gap:40px;
       text-transform:uppercase;
       box-shadow:2px 2px 1px hsla(319, 65%, 38%, 1);
       border-radius:8px;


       &.active{
            left:0;
       }
       li{
        a{
            font-weight:700;

        }
       }
    }
`

export const NavLinkItem = styled.li`
    a{
        font-family: 'Red Rose';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 25px;
        color: #434343;
    }

`
