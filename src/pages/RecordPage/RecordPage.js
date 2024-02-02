import React , { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import './RecordPage.css';
import record_slash from "../../assets/images/record_slash.png";
import Checkbox from '../../components/CheckBox/Checkbox';
import Listitem from '../../components/ListItem/Listitem'


function RecordPage() {
    const [isChecked, setIsChecked] = useState({ yes: false, no: false });
   //const [isListVisible, setListVisible] = useState(false); // Listitem 컴포넌트가 보이는지 상태를 관리하는 state


    const handleCheckboxChange = (e) => {
        const { name } = e.target;
        setIsChecked({ yes: name === 'yes', no: name === 'no' });

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
                <Listitem name="공간" type="공간" />
                <Listitem name="분리배출공간" type="분리배출공간" />
                </div>
            </div>

        </div>
    );
}

export default RecordPage;