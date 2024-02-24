import React from 'react';
import './ViewToilet.css';
import yellow_good from '../../../../assets/images/yellow_good.png';
import red_bad from '../../../../assets/images/red_bad.png';

function ViewToilet() {
    const toiletItems = ['변기', '세면대', '싱크대', '샤워기', '온수', '타일 상태'];

    return (
        <div className='toilet-view'>
            <div className='viewToilet-title'>화장실</div>
            <div className='viewToilet-item-row'>
                <div className='viewToilet-details'>
                    {toiletItems.map((item, index) => (
                        <text key={index} className={`viewToilet-text${index + 1}`}>{item}</text>
                    ))}
                </div>
                <div className='line-viewToilet'/>
                <div className='viewToilet-details'>
                    <img className='viewToilet-img1' src={yellow_good} alt='yellow_good'/>
                    <img className='viewToilet-img2' src={yellow_good} alt='yellow_good'/>
                    <img className='viewToilet-img3' src={yellow_good} alt='yellow_good'/>
                    <img className='viewToilet-img4' src={yellow_good} alt='yellow_good'/>
                    <img className='viewToilet-img5' src={yellow_good} alt='yellow_good'/>
                    <img className='viewToilet-img6' src={yellow_good} alt='yellow_good'/>
                </div>
            </div>
        </div>
    );
}

export default ViewToilet;