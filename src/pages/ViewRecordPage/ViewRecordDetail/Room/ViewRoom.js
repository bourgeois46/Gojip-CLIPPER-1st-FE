import React from 'react';
import './ViewRoom.css';
import icon_yes from '../../../../assets/images/icon_yes.png';
import icon_no from '../../../../assets/images/icon_no.png';

function ViewRoom() {
    return (
        <div className='room-view'>
        <div className="viewRoom-title">비용</div>
        <div className='viewRoom-item-row'>
            <div className="viewRoom-details">
                <text className="viewRoom-label-1">채광</text>
                <text className="viewRoom-label-2">보일러</text>
                <text className="viewRoom-label-3">곰팡이</text>
                <text className="viewRoom-label-4">웃풍</text>
                <text className="viewRoom-label-5">벌레</text>
                <text className="viewRoom-label-6">벽지 오염</text>
            </div>
            <div className='line-viewRoom'></div>
            <div className="viewRoom-details">
                <div className='viewRoom-item1'>남향</div>
                <div className='viewRoom-item2'>공동난방</div>
                <img className='viewRoom-item3' src={icon_no}/>
                <img className='viewRoom-item4' src={icon_no}/>
                <img className='viewRoom-item5' src={icon_no}/>
                <img className='viewRoom-item6' src={icon_yes}/>
            </div>
        </div>
    </div>
    );
}

export default ViewRoom;