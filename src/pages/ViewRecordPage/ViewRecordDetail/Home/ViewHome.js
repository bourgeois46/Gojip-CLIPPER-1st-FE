import React from 'react';
import './ViewHome.css';
import yellow_good from '../../../../assets/images/yellow_good.png';
import red_bad from '../../../../assets/images/red_bad.png';

function ViewHome() {
    return (
        <div className='home-view'>
            <div className='viewHome-title'>집</div>
            <div className='viewHome-item-row'>
                <div className='viewHome-details'>
                    <text className='viewHome-text1'>평수</text>
                    <text className='viewHome-text2'>건물상태</text>
                    <text className='viewHome-text3'>역과의 거리</text>
                    <text className='viewHome-text4'>소음</text>
                </div>
                <div className='line-viewHome'/>
                <div className='viewHome-details'>
                    <div className='viewHome-item-row1'>
                        <div className='viewHome_item1'>14</div>
                        <div className='viewHome_item2'>평</div>
                    </div>
                    <img className='viewHome_img' src={yellow_good} alt='yellow_good'/>
                    <div className='viewHome-item-row2'>
                        <div className='viewHome_item3'>약</div>
                        <div className='viewHome_item4'>10</div>
                        <div className='viewHome_item5'>분</div>
                    </div>
                    <div className='viewHome_item6'>없음</div>
                </div>
            </div>
            
        </div>
    );
}

export default ViewHome;