import React from 'react';
import Nav from '../../components/Nav/Nav';
import './RecordPage.css';
import record_slash from "../../assets/images/record_slash.png";

function RecordPage() {
    return (
        <div className='recordPage'>
            <div className="recordPage-top">
                <Nav/> 
            </div>

            <div className="place-yellow">
                서울 서대문구 신촌동 2-195
            </div>

            <div className='charge-box'>
                <div className="charge-title">비용</div>
                <div className='charge-item-row'>
                    <div className="charge-details">
                        <text className="charge-label-deposit">보증금 / 월세</text>
                        <text className="charge-label-monthly-rent">관리비</text>
                    </div>
                    <div className='line-charge'></div>
                    <div className="charge-details">
                        <div className="charge-item-up">
                            <input type="text" className="deposit-input" placeholder="입력" />
                            <img className='slash' alt='record_slash' src={record_slash}/>
                            <input type="text" className="monthly-rent-input" placeholder="입력" />
                            <span className="charge-unit">원</span>
                        </div>
                        <div className="charge-item-down">
                            <label className="charge-option-yes">
                                <input type="checkbox" className="charge-yes" value="있다" /> 있다
                            </label>
                            <label className="charge-option-no">
                                <input type="checkbox" className="charge-no" value="없다" /> 없다
                            </label>
            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default RecordPage;