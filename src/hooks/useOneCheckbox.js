import { useState } from 'react';

export default function useOneCheckbox() {
    const [isOneChecked, setIsOneChecked] = useState({ yes: false, no: false });

    const handleOneCheckboxChange = (e) => {
        const { name } = e.target;
        setIsOneChecked(prevState => {
            if (prevState[name]) {
                // 체크박스가 이미 선택되어 있다면 원상태로 돌린다.
                return { yes: false, no: false };
            } else {
                // 체크박스가 선택되지 않았다면 선택한 체크박스만 true로 설정한다.
                return { yes: name === 'yes', no: name === 'no' };
            }
        });
    };

    return [isOneChecked, handleOneCheckboxChange];
}