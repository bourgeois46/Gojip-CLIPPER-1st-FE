import React from 'react';
import Checkbox from '../../../components/CheckBox/Checkbox';
import './HomeBox.css';
import TimeSlider from '../../../components/TimeSlider/TimeSlider'

function HomeBox() {
    return (
        <div>
            <div className='timeSlider'>
                <TimeSlider />
            </div>
        </div>
    );
}

export default HomeBox;