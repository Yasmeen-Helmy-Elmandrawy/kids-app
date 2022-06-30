import React from 'react';
import './style.css';
const ArrayVideo = () => {
    return ( 
        <div className="array-video">
            <video className="video-a" controls autoPlay loop>
                <source src="./videos/array.mp4" type="video/mp4" />
                Your Browser Does Not Support Video Tag
            </video>
        </div>
     );
}
export default ArrayVideo;