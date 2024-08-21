import React, { useState, useRef, useEffect } from 'react';
import { FiPlay, FiPause, FiVolume2 } from 'react-icons/fi';

const MP3Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Valor inicial do volume
  const [currentTime, setCurrentTime] = useState(0); // Tempo atual
  const [duration, setDuration] = useState(0); // Duração total da música
  const audioRef = useRef(new Audio('./audio1.mp3'));

  // Atualiza o volume do áudio quando o estado de volume mudar
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  // Atualiza o tempo atual do áudio em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentTime(audioRef.current.currentTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Atualiza a duração total da música
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
      {/* Placeholder para a logo */}
      <div className="mb-4 w-48 h-48 bg-gray-300 border border-darkRed-900 flex items-center justify-center">
        <span className="text-darkRed-900 text-lg">Logo</span>
      </div>
      <div className="flex justify-center items-center mb-6">
        <button className="bg-darkRed-900 p-3 rounded-full hover:bg-darkRed-700" onClick={handlePlayPause}>
          {isPlaying ? (
            <FiPause className="text-white text-xl" /> // Ícone de Pausa
          ) : (
            <FiPlay className="text-white text-xl" /> // Ícone de Play
          )}
        </button>
      </div>
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
      <div className="flex items-center w-full justify-between">
        <FiVolume2 className="text-darkRed-900 text-xl" /> {/* Ícone de Volume */}
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
    </div>
  );
};

export default MP3Player;
