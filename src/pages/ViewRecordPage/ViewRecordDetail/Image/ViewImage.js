import React from 'react';
import './ViewImage.css';
import ex_img from '../../../../assets/images/ex_img.png';

function ViewImage() {
    return (
        <div className='image-view'>
            <div className='viewImage-column'>
                <div className='viewImage-title'>이미지</div>
                <div className='viewImage-row'>
                    <img className='viewImage-img' src={ex_img} alt='ex_img'/>
                    <div className='viewImage-line'/>
                    <div className='viewImage-detail'>복층 오피스텔임!</div>
                </div>
            </div>
            
        </div>
    );
}

export default ViewImage;