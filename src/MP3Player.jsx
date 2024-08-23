// MP3Player.js
import React, { useState, useRef, useEffect } from 'react';
import { FiPlay, FiPause, FiVolume2, FiRewind, FiFastForward } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

const MP3Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(new Audio('/audio1.mp3'));

  const logoSrc = '/logo.png'; // Logo não dinâmico
  const imageSrc = '/raymunda-maria.png'; // Caminho da imagem
  const imageName = 'Raymunda Maria'; // Nome da imagem

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
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(handleError);
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
      <img src={logoSrc} alt="Logo" className="mb-4 w-50 h-14 object-contain" />
      <div className="mb-4 w-48 h-128">
        <img src={imageSrc} alt={imageName} className="object-cover w-full h-full" />
      </div>
      <div className="text-white text-2xl font-bold mb-2">{imageName}</div>
      <div className="w-full mb-4">
        <input
          type="range"
          min="0"
          max={duration}
          step="0.1"
          value={currentTime}
          onChange={handleTimeChange}
          className="w-full bg-darkRed-900 rounded-lg"
        />
      </div>
      <div className="flex justify-center items-center mb-6">
        <button className="bg-darkRed-900 p-3 rounded-full hover:bg-darkRed-700" onClick={() => audioRef.current.currentTime -= 10}>
          <FiRewind className="text-white text-xl" />
        </button>
        <button className="bg-darkRed-900 p-3 mx-4 rounded-full hover:bg-darkRed-700" onClick={handlePlayPause}>
          {isPlaying ? (
            <FiPause className="text-white text-xl" />
          ) : (
            <FiPlay className="text-white text-xl" />
          )}
        </button>
        <button className="bg-darkRed-900 p-3 rounded-full hover:bg-darkRed-700" onClick={() => audioRef.current.currentTime += 10}>
          <FiFastForward className="text-white text-xl" />
        </button>
      </div>
      <div className="flex items-center w-full justify-between mb-6">
        <FiVolume2 className="text-darkRed-900 text-xl" />
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
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mt-4">
        <FaInstagram className="text-darkRed-900 text-2xl hover:text-darkRed-700" />
      </a>
    </div>
  );
};

export default MP3Player;
