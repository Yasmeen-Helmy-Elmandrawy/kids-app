import React from 'react';
import './style.css';
const SequenceVideo = () => {
    return ( 
        <div className="sequence-video">
            <video className="video-s" controls autoPlay loop>
                <source src="./videos/sequence.mp4" type="video/mp4" />
                Your Browser Does Not Support Video Tag
            </video>
        </div>
     );
}
export default SequenceVideo;