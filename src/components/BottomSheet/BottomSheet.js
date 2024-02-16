// 모달 구현
import useBottomSheet from "../../hooks/useBottomSheet";
import * as S from "./BottomSheet.style";
import Header from "./Header";
import { useMotionValue, useTransform } from "framer-motion";

const BottomSheet = ({ children }) => {
  const { onDragEnd, controls } = useBottomSheet();
  const dragY = useMotionValue(0); // 모달의 y 위치를 추적하는 변수

  // 모달을 위로 드래그할 때 모달의 높이를 동적으로 조절하는 애니메이션
  const height = useTransform(dragY, [0, -100], [200, "100vh"]);

  return (
    <S.Wrapper
      drag="y"
      onDragEnd={(event, info) => {
        onDragEnd(event, info);
        dragY.set(0); // 드래그가 끝나면 모달의 y 위치 초기화
      }}
      initial={{ y: 200 }}
      animate={controls}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 400,
      }}
      variants={{
        visible: { y: 0 }, // 전체 화면이 보여지도록 변경
        hidden: { y: "100%" },
      }}
      dragConstraints={{ top: 100, bottom: 0 }}
      dragElastic={0.2}
      style={{ overflow: "hidden", height }} // 높이를 동적으로 조절
    >
      <Header />
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </S.Wrapper>
  );
};

export default BottomSheet;
