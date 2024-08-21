import React, { useState, useRef } from 'react';

const MP3Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const stopPlayback = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const changeVolume = (e) => {
    const volumeValue = e.target.value;
    audioRef.current.volume = volumeValue;
    setVolume(volumeValue);
  };

  const skipTime = (seconds) => {
    audioRef.current.currentTime += seconds;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-darkBlue-900 text-lightBlue">
      <h1 className="text-2xl font-bold mb-4">MP3 Player</h1>
      <audio ref={audioRef} src="/audio1.mp3"></audio>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => skipTime(-10)}
          className="bg-lightBlue text-darkBlue-900 py-2 px-4 rounded-md hover:bg-lightBlue-600"
        >
          Previous 10s
        </button>

        <button
          onClick={togglePlayPause}
          className="bg-lightBlue text-darkBlue-900 py-2 px-4 rounded-md hover:bg-lightBlue-600"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>

        <button
          onClick={stopPlayback}
          className="bg-lightBlue text-darkBlue-900 py-2 px-4 rounded-md hover:bg-lightBlue-600"
        >
          Stop
        </button>

        <button
          onClick={() => skipTime(10)}
          className="bg-lightBlue text-darkBlue-900 py-2 px-4 rounded-md hover:bg-lightBlue-600"
        >
          Next 10s
        </button>
      </div>

      <div className="mt-4">
        <label htmlFor="volume" className="mr-2">Volume</label>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={changeVolume}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default MP3Player;
