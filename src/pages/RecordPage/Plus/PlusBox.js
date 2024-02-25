import React from 'react';
import './Plus.css'

function PlusBox() {
    return (
        <div className='plus-box'>
            <div className='column'>
                <div className='title-plus'>추가 사항</div>
                <input type="text" className="input" placeholder="추가 사항을 기록해주세요." />
            </div>
        
        </div>
    );
}

export default PlusBox;