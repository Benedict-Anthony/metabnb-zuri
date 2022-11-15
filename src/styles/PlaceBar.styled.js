import styled from 'styled-components';

export const PlaceBarStyles = styled.section`
    width: 100%;
    margin:30px 0;

`

export const PlaceBarUl = styled.ul`
    margin-top:30px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    column-gap:10px;

    li{
        font-family: 'Red Rose';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #434343;
    }

    @media(max-width:990px){
        position:absolute;
        top:75px;
        left:20px;
        display:grid;
        grid-template-columns:repeat(3, 1fr);
        width: 50%;
        background: #fff;
        z-index:10;
        height: 50vh;
        box-shadow:2px 2px 4px rgba(0,0,0,.4);
        padding: 10px 20px;
        border-radius:8px;  
        clip-path: circle(1.1% at 50% 50%);
        opacity:0;
        
        &.active{
            clip-path: circle(70.7% at 50% 50%);
            opacity:1;

        }
    }
    @media(max-width:600px){
       width:80%;
       grid-template-columns:repeat(2, 1fr);
        li{
       font-size:16px;

        }
        
    }
`
export const Locationstyles = styled.li`
    display:inline-flex;
    align-items:center;
    justify-content:center;
    column-gap:10px;
    background: linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%);
    border: 1px solid #B4B4B4;
    border-radius: 8px;
    padding:3px 4px;

    &.mobile{
        position:absolute;
        right:20px;
        display:none;
    }

    @media(max-width:990px){
        display:none;
        &.mobile{
            display: flex;
        }



    
    }
   
`