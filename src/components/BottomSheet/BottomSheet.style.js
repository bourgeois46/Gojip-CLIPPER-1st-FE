import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { BOTTOM_SHEET_HEIGHT } from "../../constants";
import { BOTTOM_SHEET_WIDTH } from "../../constants";

const Wrapper = styled(motion.div)`
  flex-direction: column;
  position: fixed;
  z-index: 10;
  top: 93vh; // 첫 화면
  left: 0;
  right: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: ${BOTTOM_SHEET_HEIGHT}px;
  width: ${BOTTOM_SHEET_WIDTH}px;
  margin: 0 auto;
  overflow-y: scroll;
`;

const HeaderWrapper = styled(motion.div)`
  height: 28px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: relative;
  padding-top: 16px;
  padding-bottom: 4px;
`;

const HandleBar = styled(motion.div)`
  width: 50px;
  height: 4px;
  border-radius: 2px;
  background-color: #c4c4c4;
  margin: auto;
`;

const ContentWrapper = styled.div`
  height: 80vh;
  padding: 10px;
`;

const Gu = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  font-style: Inter;
  font-weight: bold;
  text-align: center;
  background-color: #ffef64;
  width: 100px;
`;

const Line = styled.div`
  position: absolute;
  border: none;
  border-top: 1px solid #ccc;
  top: 120px;
  width: 400px;
  left: 0;

  ${({ top }) =>
    top &&
    css`
      top: ${top}px;
    `}
`;

const FilterContainer = styled.div`
  justify-content: space-between;
`;

const SetFilter = styled.div`
  position: absolute;
  font-style: Inter;
  font-weight: bold;
  top: 125px;
`;

const ViewEntire = styled.div`
  position: absolute;
  font-style: Inter;
  top: 125px;
  left: 125px;
  cursor: pointer;

  ${({ left }) =>
    left &&
    css`
      left: ${left}px;
    `}

  ${({ clicked }) =>
    clicked &&
    css`
      font-weight: bold;
    `}
`;

const ViewCollection = styled.div`
  position: absolute;
  font-style: Inter;
  top: 125px;
  left: 125px;
  cursor: pointer;

  ${({ left }) =>
    left &&
    css`
      left: ${left}px;
    `}

  ${({ boldClicked }) =>
    boldClicked &&
    css`
      font-weight: bold;
    `}
`;

const HouseInfo = styled.div`
  width: 400px;
  height: 150px;
  margin-top: 50px;
  top: 50px;
`;

const Image = styled.img`
  margin-left: 30px;
  margin-right: auto;
  margin-top: 50px;
  width: 55px;
  height: 55px;
`;

const TextInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextInfo = styled.div`
  position: relative;
  top: -60px;
  left: 150px;
  font-style: Inter;
  font-size: 16px;
`;

const TextInfoA = styled.div`
  position: relative;
  top: -103px;
  left: 230px;
  font-style: Inter;
  font-size: 14px;
  color: #616161;
`;

export {
  Wrapper,
  HeaderWrapper,
  HandleBar,
  ContentWrapper,
  Gu,
  Line,
  FilterContainer,
  SetFilter,
  HouseInfo,
  Image,
  TextInfo,
  TextInfoContainer,
  ViewCollection,
  ViewEntire,
  TextInfoA,
};
