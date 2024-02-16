// 모달 구현
import useBottomSheet from "../../hooks/useBottomSheet";
import * as S from "./BottomSheet.style";
import Header from "./Header";
import { useMotionValue, useTransform } from "framer-motion";
import roompic from "../../assets/images/room-pic.png";
import { useState } from "react";

const BottomSheet = ({ children }) => {
  const { onDragEnd, controls } = useBottomSheet();
  const dragY = useMotionValue(0); // 모달의 y 위치를 추적
  const [boldClickedViewEntire, setBoldClickedViewEntire] = useState(false);
  const [boldClickedViewCollection, setBoldClickedViewCollection] =
    useState(false);
  const [showCollectionModal, setShowCollectionModal] = useState(false);

  // 모달을 위로 드래그할 때 모달의 높이를 동적으로 조절
  const height = useTransform(dragY, [0, -100], [200, "100vh"]);

  const handleViewEntireClick = () => {
    setBoldClickedViewEntire(true);
    setBoldClickedViewCollection(false);
  };

  const handleViewCollectionClick = () => {
    setBoldClickedViewEntire(false);
    setBoldClickedViewCollection(true);
    setShowCollectionModal(true);
  };

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
        visible: { y: 0 }, // 전체 화면이 보여지도록
      }}
      dragConstraints={{ top: 100, bottom: 0 }}
      dragElastic={0.2}
      style={{ overflow: "hidden", height }} // 높이를 동적으로 조절
    >
      <Header />
      <S.ContentWrapper>
        {children}
        <S.Gu>서대문구</S.Gu>
        <S.Line />
        <S.FilterContainer>
          <S.SetFilter>필터 설정</S.SetFilter>
          <S.ViewEntire
            boldClicked={boldClickedViewEntire}
            onClick={handleViewEntireClick}
          >
            전체기록보기
          </S.ViewEntire>
          <S.ViewCollection
            boldClicked={boldClickedViewCollection}
            left={250}
            onClick={handleViewCollectionClick}
          >
            컬렉션별로 보기
          </S.ViewCollection>
          <S.Line top={150} />
        </S.FilterContainer>

        <S.HouseInfo>
          <S.Image
            src={roompic}
            alt="roompic"
            //onClick={}
          />
          <S.TextInfoContainer>
            <S.TextInfo>이름</S.TextInfo>
            <S.TextInfo>월세</S.TextInfo>
            <S.TextInfo>위치상세</S.TextInfo>
          </S.TextInfoContainer>
          <S.Line top={320} />
        </S.HouseInfo>

        <S.HouseInfo>
          <S.Image
            src={roompic}
            alt="roompic"
            //onClick={}
          />
          <S.TextInfoContainer>
            <S.TextInfo>이름</S.TextInfo>
            <S.TextInfo>월세</S.TextInfo>
            <S.TextInfo>위치상세</S.TextInfo>
          </S.TextInfoContainer>
          <S.Line top={320} />
        </S.HouseInfo>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default BottomSheet;
