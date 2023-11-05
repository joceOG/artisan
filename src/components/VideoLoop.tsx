import React from 'react';
import video from '../assets/videoartisan.mp4';

const VideoLoop = () => {
  return (
    <div>
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoLoop;
