// 이전값 추적
// 모달의 열림 및 닫힘 상태를 추적
import { useEffect, useRef } from "react";

const usePreviousValue = (value) => {
  const previousValueRef = useRef();

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return previousValueRef.current;
};

export default usePreviousValue;
