import React, { useState } from 'react';
import Slider from 'react-slider';
import styled from 'styled-components';

function TimeSlider() {
    const [value, setValue] = useState(0);

    const TrackWithThumb = styled.div`
        position: relative;
        z-index: 2;
    `;

    const ThumbWithTrack = styled.div`
        position: relative;
        z-index: 3;
    `;

    const Track = (props, state) => (
        <TrackWithThumb>
            <StyledTrack {...props} index={state.index} />
        </TrackWithThumb>
    );

    const Thumb = (props, state) => (
        <ThumbWithTrack>
            <StyledThumb {...props} />
        </ThumbWithTrack>
    );

    const tickWidth = 3; 
    const sliderWidth = 225; 

    const ticks = [0, 10, 20, 30].map((tick) => {
        let left;
        if (tick === 0) {
            left = 0; // 슬라이더의 시작에 위치하는 틱
        } else if (tick === 30) {
            left = sliderWidth - tickWidth; // 슬라이더의 끝에 위치하는 틱
        } else {
            left = Math.round(tick / 30 * sliderWidth - tickWidth / 2); // 그 외의 틱
        }
        return (
            <TickContainer key={tick} style={{left: `${left}px`}}>
                <Tick />
                <TickLabel>{tick}분</TickLabel>
            </TickContainer>
        );
    });

    return (
        <div style={{position: 'relative', height: '9px', width: '225px', backgroundColor: '#F4F4F4',}}>
            {ticks}
            <Slider
                value={value}
                onChange={(val) => { setValue(val); console.log(`Current value: ${val}`);}}
                onAfterChange={(val) => console.log(`Selected value: ${val}`)} 
                min={0} 
                max={30} 
                step={1} 
                renderTrack={Track}
                renderThumb={Thumb}
            />
        </div>
    );
}

export default TimeSlider;

const StyledTrack = styled.div`
    position: relative;
`;

const StyledThumb = styled.div`
    height: 28px;
    width: 6px;
    text-align: center;
    background-color: #FFEF64;
    border-radius: 20px;
    outline: none;
    top: -8.2px;
    box-shadow: 0.5px 0.5px 0.5px 0.5px #C8C8C8;
`;

const TickContainer = styled.div`
    position: absolute;
    height: 17px;
    width: 3px;
    border-radius: 20px;
    background-color: black;
    top: -3px;
`;

const Tick = styled.div`
    height: 17px;
    width: 3px;
    border-radius: 20px;
    background-color: black;
`;

const TickLabel = styled.div`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 7px;
    text-align: center;
    white-space: nowrap;
`;
