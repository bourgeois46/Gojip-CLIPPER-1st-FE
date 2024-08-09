import React from "react";
import styled, { css } from "styled-components";

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 14px;
  width: 250px;
  z-index: 101;
  margin-top: -200px;
`;

const CollectionOptions = styled.div`
  margin-top: 10px;
  flex-direction: column;
  display: flex;
  position: relative;
`;

const OptionButton = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: inherit;
  cursor: pointer;
`;

const Line = styled.div`
  position: absolute;
  border: none;
  border-top: 1px solid #eeeeee;
  top: 30px;
  width: 220px;
  left: 20px;

  ${({ top }) =>
    top &&
    css`
      top: ${top}px;
    `}
`;

const CollectionModal = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <CollectionOptions>
          <OptionButton onClick={onClose}>기본</OptionButton>
          <Line />
          <OptionButton>종로구</OptionButton>
          <Line top={60} />
          <OptionButton>역세권</OptionButton>
          <Line top={93} />
          <OptionButton>학교 근처</OptionButton>
        </CollectionOptions>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CollectionModal;
