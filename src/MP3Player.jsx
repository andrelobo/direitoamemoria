import React, { useState, useRef, useEffect } from 'react';
import { FiPlay, FiPause, FiSkipForward, FiSkipBack, FiVolume2 } from 'react-icons/fi';

const MP3Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Valor inicial do volume
  const [currentTime, setCurrentTime] = useState(0); // Tempo atual
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

  const handleSkipForward = () => {
    audioRef.current.currentTime += 10; // Avança 10 segundos
    if (audioRef.current.currentTime >= audioRef.current.duration) {
      audioRef.current.currentTime = audioRef.current.duration; // Não ultrapassar a duração
    }
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSkipBack = () => {
    audioRef.current.currentTime -= 10; // Retrocede 10 segundos
    if (audioRef.current.currentTime < 0) {
      audioRef.current.currentTime = 0; // Não ir abaixo de 0
    }
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleError = (error) => {
    console.error('Erro ao carregar o áudio:', error);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-darkBlue-900 p-6">
      <div className="mb-6">
        <img
          src="https://via.placeholder.com/200"
          alt="Logo"
          className="w-52 h-52 object-cover"
        />
      </div>
      <div className="max-w-md w-full bg-darkBlue-900 p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <button className="bg-darkRed-900 p-3 rounded-full hover:bg-darkRed-800" onClick={handleSkipBack}>
            <FiSkipBack className="text-red-400 text-xl" /> {/* Ícone de Voltar */}
          </button>
          <button className="bg-darkRed-900 p-3 rounded-full hover:bg-darkRed-800" onClick={handlePlayPause}>
            {isPlaying ? (
              <FiPause className="text-red-400 text-xl" /> // Ícone de Pausa
            ) : (
              <FiPlay className="text-red-400 text-xl" /> // Ícone de Play
            )}
          </button>
          <button className="bg-darkRed-900 p-3 rounded-full hover:bg-darkRed-800" onClick={handleSkipForward}>
            <FiSkipForward className="text-red-400 text-xl" /> {/* Ícone de Avançar */}
          </button>
        </div>
        <div className="flex items-center justify-between">
          <FiVolume2 className="text-red-400 text-xl" /> {/* Ícone de Volume */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full ml-4 bg-darkBlue-800 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MP3Player;
