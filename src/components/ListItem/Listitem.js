import React from 'react';
import styled, { css } from "styled-components";

function Listitem({name, type}) {
    const isLongName = name.length >= 4;
    return (
        <CheckBoxWrapper key={type}>
            <CheckBoxInput type="checkbox" id={type} name="skills"/>
            <CheckboxLabel htmlFor={type} isLongName={isLongName}>
                <CheckBoxP>{name}</CheckBoxP>
            </CheckboxLabel>
        </CheckBoxWrapper>
    );
}

export default Listitem;

const CheckBoxWrapper = styled.div`
    position: relative;
`;

const CheckboxLabel = styled.label`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 27px;
    cursor: pointer;
    border-radius: 10px;
    background-color: none;
    min-width: 64px;
    box-sizing: border-box;

    ${props => props.isLongName && css`
        padding: 6px 14px 6px 14px;
    `}
`;

const CheckBoxP = styled.p`
    font-size: 13.14px;
    color: black;
`;

const CheckBoxInput = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border:0;

    &:checked + ${CheckboxLabel} {
        background-color: #FFD800;
        color: black;
    }
`;
