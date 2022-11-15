import styled from "styled-components";

export const ButtonStyle = styled.button`
        padding:7px 20px;
        font-family: 'Red Rose';
        font-style: normal;
        border-radius:8px;
        border:none;
        outline:0;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: ${({ color }) => color};
        background-color:${({ bg }) => bg};
        text-transform:capitalize;
        cursor:pointer;

        &:hover{
            transform: scale(.95);
        }


        @media(max-width:480px){
            padding:7px 10px;
            font-size: .8rem;
            
        }
`