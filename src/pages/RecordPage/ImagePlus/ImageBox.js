import React, { useState } from 'react';
import './ImageBox.css';
import camera_img from '../../../assets/images/camera_img.png';
import delete_img from '../../../assets/images/delete_img.png';

function ImageBox() {
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files).map(file => URL.createObjectURL(file));
        setSelectedImages(prevImages => [...prevImages, ...files]);
    };

    const handleImageRemove = (index) => {
        setSelectedImages(prevImages => prevImages.filter((img, i) => i !== index));
    };

    return (
        <div className='image-box'>
            <div className='column'>
                <div className='image-title'>사진 추가</div>
                <input type="file" accept="image/*" onChange={handleImageChange} multiple style={{display: 'none'}} id="image-upload" />
                <label htmlFor="image-upload">
                    <img className='camera-img' alt='camera_img' src={camera_img}/>
                </label>
                {selectedImages.map((image, index) => (
                    <div className='selected-view' key={index}>
                        <div className='selected-row'>
                            <img src={image} alt="selected" className='selected' />
                            <div className='selected-line'/>
                            <input type="text" className="selected-input" placeholder="설명입력하기" />
                            <img className='delete-img' alt='delete_img' src={delete_img} onClick={() => handleImageRemove(index)}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageBox;
