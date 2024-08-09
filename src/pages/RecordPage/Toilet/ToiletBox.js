import React, { useState } from 'react';
import IconCheckbox2 from '../../../components/CheckBox/IconCheckbox2';
import './ToiletBox.css';

function ToiletBox() {
    const toiletItems = ['변기', '세면대', '싱크대', '샤워기', '온수', '타일 상태'];
    const [isChecked, setChecked] = useState(Array(toiletItems.length).fill({ good: false, bad: false }));

    const handleChange = (index, type) => {
        setChecked(prevChecked => prevChecked.map((item, idx) => index === idx ? { ...item, [type]: !item[type], [type === 'good' ? 'bad' : 'good']: false } : item));
    };

    return (
        <div className='toilet-box'>
            <div className='toilet-title'>화장실</div>
            <div className='toilet-item-row'>
                <div className='toilet-details'>
                    {toiletItems.map((item, index) => (
                        <text key={index} className={`toilet-text${index + 1}`}>{item}</text>
                    ))}
                </div>
                <div className='line-toilet'/>
                <div className='toilet-details'>
                    {toiletItems.map((item, index) => (
                        <div key={index} className='toilet-item-icon'>
                            <IconCheckbox2 name={`${item}-good`} type='good' isChecked={isChecked[index].good} onChange={() => handleChange(index, 'good')} />
                            <IconCheckbox2 name={`${item}-bad`} type='bad' isChecked={isChecked[index].bad} onChange={() => handleChange(index, 'bad')} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ToiletBox;
