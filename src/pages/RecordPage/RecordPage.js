import React , { useState } from 'react';

import './RecordPage.css';
import ChargeBox from './Charge/ChargeBox';
import HomeBox from './Home/HomeBox';
import useOneCheckbox from '../../hooks/useOneCheckbox';
import useCheckbox from '../../hooks/useCheckbox';
import RoomBox from './Room/RoomBox';
import ToiletBox from './Toilet/ToiletBox';
import OptionsBox from './Options/OptionsBox';
import PlusBox from './Plus/PlusBox';
import ImageBox from './ImagePlus/ImageBox';
import CollectionBox from './Collection/CollectionBox';
import record_pre from '../../assets/images/record_pre.png';


function RecordPage() {
    const [isOneChecked, handleOneCheckboxChange] = useOneCheckbox();
    const [isChecked, handleCheckboxChange] = useCheckbox();
    const [iconChecked, handleIconCheck] = useOneCheckbox();

    return (
        <div className='recordPage'>
            <div className='content'>
                <div className="place-yellow">
                    서울 서대문구 신촌동 2-195
                </div>

                <ChargeBox isChecked={isOneChecked} handleCheckboxChange={handleOneCheckboxChange} />
                <HomeBox isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} iconChecked={iconChecked} handleIconCheck={handleIconCheck}/>
                <RoomBox isChecked={isOneChecked} handleCheckboxChange={handleOneCheckboxChange} />
                <ToiletBox/>
                <OptionsBox/>
                <PlusBox/>
                <ImageBox/>
                <CollectionBox/>
            </div>

            <div className='row-bottom'>
                <img className='record-pre' src={record_pre} alt='record_pre'/>
                <button className='btn-bottom'>이 집 체크하러가기</button>
            </div>
        </div>
    );
}

export default RecordPage;
