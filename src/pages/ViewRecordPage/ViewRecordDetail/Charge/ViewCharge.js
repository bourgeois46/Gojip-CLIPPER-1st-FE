import React from 'react';
import './ViewCharge.css'

function ViewCharge() {
        return (
            <div className='charge-view'>
                <div className="charge-title-v">비용</div>
                <div className='charge-item-row-v'>
                    <div className="charge-details-v">
                        <text className="charge-label-deposit-v">보증금 / 월세</text>
                        <text className="charge-label-monthly-rent-v">관리비</text>
                    </div>
                    <div className='line-charge-v'></div>
                    <div className="charge-details-v">
                        <div className='item-row-v'>
                            <div className='deposit-v'>400</div>
                            <div className='slash-v'>/</div>
                            <div className='monthly-v'>50</div>
                            <div className='unit-v'>만원</div>
                        </div>
                        <div className='item-row-v1'>
                            <div className='maintenance-detail-v'>수도세, 난방비</div>
                            <div className='maintenance-v'>총</div>
                            <div className='maintenance-real-v'>40,000</div>
                            <div className='maintenance-unit-v'>원</div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default ViewCharge;