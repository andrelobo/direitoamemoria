// MP3Player.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FiPlay, FiPause, FiVolume2, FiRewind, FiFastForward } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

const MP3Player = ({ audioSrc, imageSrc, imageName }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(new Audio(audioSrc));

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentTime(audioRef.current.currentTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
    };

    audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [audioSrc]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      console.log('Audio paused');
    } else {
      audioRef.current.play().catch(handleError);
      console.log('Audio playing');
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };

  const handleTimeChange = (event) => {
    const newTime = parseFloat(event.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleError = (error) => {
    console.error('Erro ao carregar o áudio:', error);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-darkBlue-900 rounded-lg shadow-md flex flex-col items-center">
      <img src="/logo.png" alt="Logo" className="mb-4 w-60 h-16 object-contain" />
      <div className="mb-4 w-48 h-128">
        <img src={imageSrc} alt={imageName} className="object-cover w-full h-full" />
      </div>
      <div className="text-white text-2xl mb-2">{imageName}</div>
      <div className="w-full mb-4">
        <input
          type="range"
          min="0"
          max={duration}
          step="0.1"
          value={currentTime}
          onChange={handleTimeChange}
          className="w-full  rounded-xl"
        />
      </div>
      <div className="flex justify-center items-center mb-6">
        <button className="p-3 rounded-full hover:bg-darkRed-700" onClick={() => audioRef.current.currentTime -= 10}>
          <FiRewind className="text-white text-[2.5rem]" />
        </button>
        <button className="p-3 mx-4 rounded-full hover:bg-darkRed-700" onClick={handlePlayPause}>
          {isPlaying ? (
            <FiPause className="text-white text-[2.5rem]" />
          ) : (
            <FiPlay className="text-white text-[2.5rem]" />
          )}
        </button>
        <button className="p-3 rounded-full hover:bg-darkRed-700" onClick={() => audioRef.current.currentTime += 10}>
          <FiFastForward className="text-white text-[2.5rem]" />
        </button>
      </div>
      <div className="flex items-center w-full justify-between mb-6">
        <FiVolume2 className="text-white text-[2.5rem]" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full ml-4 bg-darkRed-900 rounded-lg"
        />
      </div>
      <a href="https://www.instagram.com/direitoamemoria" target="_blank" rel="noopener noreferrer" className="mt-4">
        <FaInstagram className="text-darkRed-900 text-4xl hover:text-darkRed-700" />
      </a>
    </div>
  );
};

export default MP3Player;
