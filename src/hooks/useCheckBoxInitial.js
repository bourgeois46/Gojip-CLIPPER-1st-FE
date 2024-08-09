import { useState } from 'react';

export default function useCheckBoxInitial(initialState) {
    const [checkedItems, setCheckedItems] = useState(initialState);

    const handleCheckboxChange = (event) => {
        const { name } = event.target;
        setCheckedItems(prevState => ({ ...prevState, [name]: !prevState[name] }));
    };

    return [checkedItems, handleCheckboxChange];
}
