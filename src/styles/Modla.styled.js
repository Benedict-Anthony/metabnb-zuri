import styled from 'styled-components';

export const ModalStyle = styled.section`
    width: 600px;  
    height: 326px;
    margin: auto;
    background: #FFFFFF;
    border-radius: 16px;
    position: absolute;
    transform: translate(-50%, -50%);
    box-shadow:2px 4px 2px rgba(0,0,0,.5);
    top:50%;
    left:50%;
    padding:20px;
    

    &::after{
        content:'';
        height:1px;
        position: absolute;
        background: #333333;
        top:66px;
        right:0;
        left:0;

    }

    @media(max-width:767px){
        width: 90%;
    }
`
export const ModalHeader = styled.div`
    display: flex;
    align-items:center;
    justify-content:space-between;
    

    h3{
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        color: #333333;
    }

    img{
       width: 24px;
        height: 24px;
        cursor: pointer;
    }
`

export const H2Style = styled.h2`
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #333333;
        margin-top:40px;
`

export const ModalOptions = styled.div`
    display: flex;
    align-items:flex-start;
    justify-content:flex-start;
    flex-flow:column;
`
export const ModalEl = styled.div`
    margin-top:20px;
    width: 100%;
    display: flex;
    align-items:center;
    justify-content:space-between;
     padding: 12px 20px;
        background: #F8F9FA;
        border: 1px solid #CFD8DC;
        border-radius: 12px;
    gap:40px;

    &:hover{
        background: #ccc;
        cursor:pointer;
    }

    div {
        width: 100%;
        display: flex;
        align-items:center;
        justify-content:flex-start;
        /* margin:20px 0; */
       

        h2{
            font-family: 'Sora';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 23px;
            margin-left:10px;
            color: #000000;
        }
    }
`




