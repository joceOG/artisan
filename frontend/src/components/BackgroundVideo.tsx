import React from 'react';
import video from '../assets/artisan.mp4'

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted>
        <source src={video}/>
        {/* Add additional source tags for other video formats if needed */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
