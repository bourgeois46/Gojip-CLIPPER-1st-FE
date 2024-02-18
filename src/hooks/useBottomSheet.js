// 모달 제어
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import usePreviousValue from "./usePreviousValue";

const useBottomSheet = () => {
  const [isOpen, setIsOpen] = useState(true); // 모달 열린 상태로 시작
  const controls = useAnimation();
  const prevIsOpen = usePreviousValue(isOpen); // 모달의 이전 열림 상태를 추적

  // 드래그가 끝났을 때 실행되는 콜백 함수
  // 모달을 드래그하는 동안 호출
  // 드래그의 종료 상태를 기반으로 모달의 상태를 업데이트
  const onDragEnd = (info) => {
    const shouldEnlarge = info?.y < 0; // 위로  드래그했을 때 모달 크기 늘림

    if (shouldEnlarge) {
      // 모달을 위쪽으로 이동
      controls.start({
        y: -500,
      });
    }
  };

  useEffect(() => {
    /*if (prevIsOpen && !isOpen) { // 모달 닫는 기능
      controls.start("hidden");
    }*/
    if (!prevIsOpen && isOpen) {
      controls.start("visible");
    }
  }, [controls, isOpen, prevIsOpen]);

  return { onDragEnd, controls, setIsOpen, isOpen };
};

export default useBottomSheet;
