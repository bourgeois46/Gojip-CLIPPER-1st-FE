import React from 'react';
import './ViewOptions.css';

function ViewOptions() {
    return (
        <div className='options-view'>
            <div className='viewOptions-column'>
                <div className='viewOptions-title-in'>내부옵션</div>
                <div className='viewOptions-detail-in'>에어컨, 전자레인지, 옷장</div>
                <div className='viewOptions-title-out'>외부옵션</div>
                <div className='viewOptions-detail-out'>CCTV, 엘리베이터, 공동현관 </div>
            </div>


            
        </div>
    );
}

export default ViewOptions;