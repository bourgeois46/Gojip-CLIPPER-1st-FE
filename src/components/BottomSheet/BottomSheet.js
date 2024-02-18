import useBottomSheet from "../../hooks/useBottomSheet";
import * as S from "./BottomSheet.style";
import Header from "./Header";
import { useMotionValue, useTransform } from "framer-motion";
import roompic from "../../assets/images/room-pic.png";
import { useState, useRef, useEffect } from "react";
import CollectionModal from "../Modal/CollectionModal";

const BottomSheet = ({ children }) => {
  const { onDragEnd, controls } = useBottomSheet();
  const dragY = useMotionValue(0); // 모달의 y 위치를 추적
  const [clickedViewEntire, setClickedViewEntire] = useState(true);
  const [clickedViewCollection, setClickedViewCollection] = useState(false);
  const [showCollectionModal, setShowCollectionModal] = useState(false);
  const modalRef = useRef(null); // 모달의 ref 생성

  // 모달을 위로 드래그할 때 모달의 높이를 동적으로 조절
  const height = useTransform(dragY, [0, -100], [200, "100vh"]);

  const handleViewEntireClick = () => {
    setClickedViewEntire(true);
    setClickedViewCollection(false);
  };

  const handleViewCollectionClick = () => {
    setClickedViewEntire(false);
    setClickedViewCollection(true);
    setShowCollectionModal(true); // 컬렉션 보기 모달
  };

  useEffect(() => {
    // 외부를 클릭했을 때 모달이 열려있으면 닫기
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowCollectionModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            clicked={clickedViewEntire}
            onClick={handleViewEntireClick}
          >
            전체기록보기
          </S.ViewEntire>
          <S.ViewCollection
            clicked={clickedViewCollection}
            left={250}
            onClick={handleViewCollectionClick}
          >
            컬렉션별로 보기
          </S.ViewCollection>
          <S.Line top={150} />
        </S.FilterContainer>

        <S.HouseInfo>
          <S.Image src={roompic} alt="roompic" />
          <S.TextInfoContainer>
            <S.TextInfo>이름</S.TextInfo>
            <S.TextInfo>월세</S.TextInfo>
            <S.TextInfo>위치상세</S.TextInfo>
          </S.TextInfoContainer>
          <S.Line top={320} />
        </S.HouseInfo>

        <S.HouseInfo>
          <S.Image src={roompic} alt="roompic" />
          <S.TextInfoContainer>
            <S.TextInfo>이름</S.TextInfo>
            <S.TextInfo>월세</S.TextInfo>
            <S.TextInfo>위치상세</S.TextInfo>
          </S.TextInfoContainer>
          <S.Line top={320} />
        </S.HouseInfo>
      </S.ContentWrapper>
      {showCollectionModal && (
        <CollectionModal onClose={() => setShowCollectionModal(false)} />
      )}
    </S.Wrapper>
  );
};

export default BottomSheet;
