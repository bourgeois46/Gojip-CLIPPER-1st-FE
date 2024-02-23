import React from 'react';
import IconCheckbox from '../../../components/CheckBox/IconCheckbox';
import './ToiletBox.css';
import useOneCheckbox from '../../../hooks/useOneCheckbox';

function ToiletBox(){

    const [iconChecked1, handleIconCheck1] = useOneCheckbox();
    const [iconChecked2, handleIconCheck2] = useOneCheckbox();
    const [iconChecked3, handleIconCheck3] = useOneCheckbox();
    const [iconChecked4, handleIconCheck4] = useOneCheckbox();
    const [iconChecked5, handleIconCheck5] = useOneCheckbox();
    const [iconChecked6, handleIconCheck6] = useOneCheckbox();

    return(
        <div className='toilet-box'>
            <div className='toilet-title'>화장실</div>
            <div className='toilet-item-row'>
                <div className='toilet-details'>
                    <text className='toilet-text1'>변기</text>
                    <text className='toilet-text2'>세면대</text>
                    <text className='toilet-text3'>싱크대</text>
                    <text className='toilet-text4'>샤워기</text>
                    <text className='toilet-text5'>온수</text>
                    <text className='toilet-text6'>타일 상태</text>
                </div>
                <div className='line-toilet'/>
                <div className='toilet-details'>
                    <div className='toilet-item-icon'>
                        <IconCheckbox name="yes" key={0} type="good" isChecked={iconChecked1.yes} onChange={(e) => handleIconCheck1(e)}/>
                        <IconCheckbox name="no" key={1} type="bad" isChecked={iconChecked1.no} onChange={(e) => handleIconCheck1(e)}/>
                    </div>
                    <div className='toilet-item-icon'>
                        <IconCheckbox name="yes" key={0} type="good" isChecked={iconChecked2.yes} onChange={(e) => handleIconCheck2(e)}/>
                        <IconCheckbox name="no" key={1} type="bad" isChecked={iconChecked2.no} onChange={(e) => handleIconCheck2(e)}/>
                    </div>
                    <div className='toilet-item-icon'>
                        <IconCheckbox name="yes" key={0} type="good" isChecked={iconChecked3.yes} onChange={(e) => handleIconCheck3(e)}/>
                        <IconCheckbox name="no" key={1} type="bad" isChecked={iconChecked3.no} onChange={(e) => handleIconCheck3(e)}/>
                    </div>
                    <div className='toilet-item-icon'>
                        <IconCheckbox name="yes" key={0} type="good" isChecked={iconChecked4.yes} onChange={(e) => handleIconCheck4(e)}/>
                        <IconCheckbox name="no" key={1} type="bad" isChecked={iconChecked4.no} onChange={(e) => handleIconCheck4(e)}/>
                    </div>
                    <div className='toilet-item-icon'>
                        <IconCheckbox name="yes" key={0} type="good" isChecked={iconChecked5.yes} onChange={(e) => handleIconCheck5(e)}/>
                        <IconCheckbox name="no" key={1} type="bad" isChecked={iconChecked5.no} onChange={(e) => handleIconCheck5(e)}/>
                    </div>
                    <div className='toilet-item-icon'>
                        <IconCheckbox name="yes" key={0} type="good" isChecked={iconChecked6.yes} onChange={(e) => handleIconCheck6(e)}/>
                        <IconCheckbox name="no" key={1} type="bad" isChecked={iconChecked6.no} onChange={(e) => handleIconCheck6(e)}/>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}

export default ToiletBox;