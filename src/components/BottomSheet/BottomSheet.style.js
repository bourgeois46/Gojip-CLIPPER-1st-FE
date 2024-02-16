import { motion } from "framer-motion";
import styled from "styled-components";
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

export { Wrapper, HeaderWrapper, HandleBar, ContentWrapper };
