import React from 'react';
import styled from "styled-components";
import icon_good from "../../assets/images/icon_good.png";
import icon_bad from "../../assets/images/icon_bad.png";

function IconCheckbox2({ name, type, isChecked, onChange }) {
    return (
        <CheckboxWrapper onClick={onChange}>
            <CheckboxLabel isChecked={isChecked} type={type}>
                {isChecked ? (
                    <CheckedIcon src={type === 'good' ? icon_good : icon_bad} alt={`${type}_icon`} />
                ) : (
                    <UncheckedIcon src={type === 'good' ? icon_good : icon_bad} alt={`${type}_icon`} />
                )}
            </CheckboxLabel>
        </CheckboxWrapper>
    );
}

export default IconCheckbox2;


const CheckboxWrapper = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
`;

const CheckboxLabel = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    width: 36px;
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
