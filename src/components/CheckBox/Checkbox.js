import React from 'react'
import styled from "styled-components";
import checkedImage from '../../assets/images/check.png'

function Checkbox({ text, checked, onChange, name}) {
    return (
        <>
            <StyledInput type="checkbox" id={text} name={name} checked={checked} onChange={onChange}/>
            <StyledLabel htmlFor={text}>
                <StyledP>{text}</StyledP>
            </StyledLabel>
        </>
    )
}

export default Checkbox;

const StyledLabel = styled.label`
position: relative;
display: flex;
align-items: center;
user-select: none;
cursor: default;

&:before {
    display: block;
    content: "";
    height: 21.7px;
    width: 20.93px;
    background-color: white;
    border: 0.66px solid #C8C8C8;
}

&:after {
    position: absolute;
    top: 49.9%;
    left: 0;
    border: 0.66px solid transparent;
    transform: translateY(-50%);
    opacity: 0;
    display: block;
    content: "";
    height: 21.7px;
    width: 20.93px;
    background-image: url(${checkedImage});
    background-size: 40% 40%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #FFEF64;
}

input[type="checkbox"]:checked + &:after {
    opacity: 1;
}



`;
const StyledInput = styled.input`
    position: absolute;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    white-space: nowrap;
    width: 1px;

`;

const StyledP = styled.p`
    margin-left: 5.85px;
    font-size : 13.14px;
    color: black; 
`;
