import { useState } from 'react';

export default function useCheckbox() {
    const [isChecked, setIsChecked] = useState({});

    const handleCheckboxChange = (e) => {
        const { name } = e.target;
        setIsChecked((prevState) => ({
            ...prevState,
            [name]: !prevState[name],
        }));
    };

    return [isChecked, handleCheckboxChange];
}