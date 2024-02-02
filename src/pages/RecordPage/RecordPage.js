import React , { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import './RecordPage.css';
import record_slash from "../../assets/images/record_slash.png";
import Checkbox from '../../components/CheckBox/Checkbox';
import Listitem from '../../components/ListItem/Listitem'


const chargeData = [
    {type:0, name:"수도세"},
    {type:1, name:"난방비"},
    {type:2, name:"전기세"},
    {type:3, name:"인터넷비"}
];

function RecordPage() {
    const [isChecked, setIsChecked] = useState({ yes: false, no: false });

    const handleCheckboxChange = (e) => {
        const { name } = e.target;
        setIsChecked((prevState) => {
            if (prevState[name]) {
                // 체크박스가 이미 선택되어 있다면 원상태로 돌린다.
                return { yes: false, no: false };
            } else {
                // 체크박스가 선택되지 않았다면, 선택한 체크박스만 true로 설정한다.
                return { yes: name === 'yes', no: name === 'no' };
            }
        });
    };

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
                    
                            <Checkbox key={0} text={"있다"} name='yes' checked={isChecked.yes} onChange={handleCheckboxChange} />
                            <Checkbox key={1} text={"없다"} name='no' checked={isChecked.no} onChange={handleCheckboxChange}/>
                        </div>
                    </div>
                </div>
                <div className='list-item'>
                    <div className='list-item-row'>
                        {chargeData.map((item) => (
                            <Listitem type={item.type} name={item.name} />
                        ))}
                    </div>
                    <div className='maintenance-row'>
                        <input type="text" className="maintenance-input" placeholder="입력" />
                        <span className="maintenance-unit">원</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default RecordPage;