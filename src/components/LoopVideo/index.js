import React from 'react';
import './style.css';
const LoopVideo = () => {
    return ( 
        <div className="loop-video">
            <video className="video-l" controls autoPlay loop>
                <source src="./videos/loop.mp4" type="video/mp4" />
                Your Browser Does Not Support Video Tag
            </video>
        </div>
     );
}
export default LoopVideo;