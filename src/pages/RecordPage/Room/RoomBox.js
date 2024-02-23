import React from 'react';
import './RoomBox.css';
import Checkbox from '../../../components/CheckBox/Checkbox';
import OneCheckbox from '../../../components/CheckBox/OneCheckBox';
import useCheckBoxInitial from '../../../hooks/useCheckBoxInitial';

const roomData1 = [
    {type: 0, name:"남향"},
    {type: 1, name:"북향"},
    {type: 2, name:"서향"},
    {type: 3, name:"동향"}
]

const roomData2 = [
    {type: 0, name:"개별난방"},
    {type: 1, name:"공동난방"}
]


function RoomBox({ isChecked, handleCheckboxChange }) {

    const initialState = { ok1: false, ok2: false, ok3: false, ok4: false };
    const [checkedItems, handleOneCheckboxChange] = useCheckBoxInitial(initialState);
    

    return (
        <div className='room-box'>
        <div className="room-title">비용</div>
        <div className='room-item-row'>
            <div className="room-details">
                <text className="room-label-1">채광</text>
                <text className="room-label-2">보일러</text>
                <text className="room-label-3">곰팡이</text>
                <text className="room-label-4">웃풍</text>
                <text className="room-label-5">벌레</text>
                <text className="room-label-6">벽지 오염</text>
            </div>
            <div className='line-room'></div>
            <div className="room-details">
                <div className="room-item-down1">
                    {roomData1.map((item) => (
                            <Checkbox type={item.type} text={item.name} name={item.name} checked={isChecked[item.name]} onChange={handleCheckboxChange} />
                    ))}
                </div>
                <div className="room-item-down2">
                    {roomData2.map((item) => (
                            <Checkbox type={item.type} text={item.name} name={item.name} checked={isChecked[item.name]} onChange={handleCheckboxChange} />
                    ))}
                </div>
                <div className="checkbox1">
                    <OneCheckbox key={0} name='ok1' checked={checkedItems['ok1']} onChange={handleOneCheckboxChange} />
                </div>
                <div className="checkbox2">
                    <OneCheckbox key={1} name='ok2' checked={checkedItems['ok2']} onChange={handleOneCheckboxChange} />
                </div>
                <div className="checkbox3">
                    <OneCheckbox key={2} name='ok3' checked={checkedItems['ok3']} onChange={handleOneCheckboxChange} />
                </div>
                <div className="checkbox4">
                    <OneCheckbox key={3} name='ok4' checked={checkedItems['ok4']} onChange={handleOneCheckboxChange} />
                </div>
            </div>
        </div>
    </div>
    );
}

export default RoomBox;