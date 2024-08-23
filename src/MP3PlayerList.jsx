import React from 'react';
import MP3Player from './MP3Player';

const MP3PlayerList = ({ data }) => {
  return (
    <div className="space-y-8">
      {data.map((item, index) => (
        <MP3Player
          key={index}
          audioSrc={item.audioSrc}
          imageSrc={item.imageSrc}
          imageName={item.imageName}
        />
      ))}
    </div>
  );
};

export default MP3PlayerList;
