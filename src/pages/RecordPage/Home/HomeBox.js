import React from 'react';
import Checkbox from '../../../components/CheckBox/Checkbox';
import './HomeBox.css';
import TimeSlider from '../../../components/TimeSlider/TimeSlider';
import IconCheckbox from '../../../components/CheckBox/IconCheckbox';

const homeData = [
    {type: 0, name:"층간소음"},
    {type: 1, name:"외부소음"},
    {type: 2, name:"방간소음"}
]
function HomeBox({ isChecked, handleCheckboxChange, iconChecked, handleIconCheck }) {
    return (
        <div className='home-box'>
            <div className='home-title'>집</div>
            <div className='home-item-row'>
                <div className='home-details'>
                    <text className='home-text1'>평수</text>
                    <text className='home-text2'>건물상태</text>
                    <text className='home-text3'>역과의 거리</text>
                    <text className='home-text4'>소음</text>
                </div>
                <div className='line-home'/>
                <div className='home-details'>
                    <div className='home-item-row'>
                        <input type="text" className="around-input" placeholder="입력" />
                        <span className="around-unit">평</span>
                    </div>
                    <div className='home-item-icon'>
                        <IconCheckbox name="yes" key={0} type="good" isChecked={iconChecked.yes} onChange={handleIconCheck}/>
                        <IconCheckbox name="no" key={1} type="bad" isChecked={iconChecked.no} onChange={handleIconCheck}/>
                    </div>
                    <div className='time-slider'>
                        <TimeSlider />
                    </div>
                    <div className='checkbox-item-row'>
                        {homeData.map((item) => (
                            <Checkbox type={item.type} text={item.name} name={item.name} checked={isChecked[item.name]} onChange={handleCheckboxChange} />
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default HomeBox;