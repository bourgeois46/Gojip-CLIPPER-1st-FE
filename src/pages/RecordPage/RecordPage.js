import React , { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import './RecordPage.css';
import ChargeBox from './Charge/ChargeBox';
import HomeBox from './Home/HomeBox';

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

            <ChargeBox isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />
            <HomeBox />
        </div>
    );
}

export default RecordPage;