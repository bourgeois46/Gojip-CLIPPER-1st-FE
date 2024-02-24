import React from 'react';
import './Options.css'
import Listitem from '../../../components/ListItem/Listitem';

function OptionsBox() {

    const inItems1 = [
        {type:0, name:"에어컨"},
        {type:1, name:"냉장고"},
        {type:2, name:"세탁기"},
        {type:3, name:"전자레인지"},
        
    ];
    const inItems2 = [
        {type:4, name:"가스레인지"},
        {type:5, name:"인덕션"},
        {type:6, name:"침대"},
        {type:7, name:"책상"},
    ];
    const inItems3 = [
        {type:8, name:"옷장"},
        {type:9, name:"TV"},
        {type:10, name:"공유기"},
        {type:11, name:"컴퓨터"},
    ];
    const inItems4 = [
        {type:12, name:"도어락"},
        {type:13, name:"환풍기"},
    ];

    const outItems1 = [
        {type:0, name:"주차장"},
        {type:1, name:"CCTV"},
        {type:2, name:"엘리베이터"},
        {type:3, name:"관리실"},

    ]

    const outItems2 = [
        {type:4, name:"공동현관"},
        {type:5, name:"분리배출 공간"},
    ]
    return (
        <div className='options-box'>
        <div className='column'>
            <div className='title-in'>내부 옵션</div>
            <div className='row-item'>
            {inItems1.map((item) => (
                        <Listitem className='list' type={item.type} name={item.name} />
            ))}
            </div>
            <div className='row-item'>
            {inItems2.map((item) => (
                        <Listitem className='list' type={item.type} name={item.name} />
            ))}
            </div>
            <div className='row-item'>
            {inItems3.map((item) => (
                        <Listitem className='list' type={item.type} name={item.name} />
            ))}
            </div>
            <div className='row-item'>
            {inItems4.map((item) => (
                        <Listitem className='list' type={item.type} name={item.name} />
            ))}
            </div>

            <div className='title-out'>외부 옵션</div>
            <div className='row-item'>
            {outItems1.map((item) => (
                        <Listitem className='list' type={item.type} name={item.name} />
            ))}
            </div>
            <div className='row-item'>
            {outItems2.map((item) => (
                        <Listitem className='list' type={item.type} name={item.name} />
            ))}
            </div>
    

        </div>

        </div>
    );
}

export default OptionsBox;