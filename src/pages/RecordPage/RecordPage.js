import React from 'react';
import Nav from '../../components/Nav/Nav';
import './RecordPage.css';

function RecordPage() {
    return (
        <div className='recordPage'>
            <div className="recordPage-top">
                <Nav/> 
            </div>

            <div className="place-yellow">
                서울 서대문구 신촌동 2-195
            </div>
        </div>
    );
}

export default RecordPage;