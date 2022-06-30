import React from 'react';
import './style.css';
const BasicVideo = () => {
    return ( 
        <div className="basic-video">
            <video className="video-b" controls autoPlay loop>
                <source src="./videos/Basic.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
     );
}
export default BasicVideo;