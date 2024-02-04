import React from 'react';
import styled from "styled-components";
import icon_good from "../../assets/images/icon_good.png";
import icon_bad from "../../assets/images/icon_bad.png";


function IconCheckbox({name, type, isChecked, onChange}) {

    return (
        <CheckboxWrapper>
            <CheckboxInput type="checkbox" id={type} name={name} onChange={onChange} checked={isChecked} />
            <CheckboxLabel htmlFor={type} isChecked={isChecked} type={type}>
                {isChecked ? (
                    <CheckedIcon src={type === 'good' ? icon_good : icon_bad} alt={`${type}_icon`} />
                ) : (
                    <UncheckedIcon src={type === 'good' ? icon_good : icon_bad} alt={`${type}_icon`} />
                )}
            </CheckboxLabel>
        </CheckboxWrapper>
    );
}

export default IconCheckbox;
const CheckboxWrapper = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
`;

const CheckboxInput = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
`;

const CheckboxLabel = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    width: 36px;
    cursor: pointer;
    border-radius: 50%;
    background-color: ${props => props.isChecked ? (props.type === 'good' ? '#FFD800' : '#FF8A00') : 'none'};
    box-sizing: border-box;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: ${props => props.isChecked ? (props.type === 'good' ? '#FFD800' : '#FF8A00') : 'none'};
    }
`;

const CheckedIcon = styled.img`
    width: 20px;
    height: 20px;
`;

const UncheckedIcon = styled.img`
    width: 20px;
    height: 20px;
`;