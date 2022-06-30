import React from 'react';
import './style.css';
const FunctionVideo = () => {
    return ( 
        <div className="function-video">
            <video className="video-f" controls autoPlay loop>
                <source src="./videos/function.mp4" type="video/mp4" />
                Your Browser Does Not Support Video Tag
            </video>
        </div>
     );
}
export default FunctionVideo;