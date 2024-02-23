import { useState } from 'react';

export default function useOneCheckbox() {
    const [isOneChecked, setIsOneChecked] = useState({ yes: false, no: false });

    const handleOneCheckboxChange = (e) => {
        const { name } = e.target;
        setIsOneChecked(prevState => {
            const newState = prevState[name] ? { yes: false, no: false } : { yes: name === 'yes', no: name === 'no' };
            console.log("New state:", newState); // 상태 변경 로깅
            return newState;
        });
    };

    return [isOneChecked, handleOneCheckboxChange];
}