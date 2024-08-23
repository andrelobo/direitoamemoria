import React from 'react';
import MP3Player from './MP3Player';

const data = [
  {
    audioSrc: '/audio1.mp3', // Caminho para o arquivo de áudio na pasta public
    imageSrc: '/raymunda-maria.png', // Caminho para a imagem na pasta public
    imageName: 'Raymunda Maria', // Nome da imagem
  },
];

const MP3PlayerList = () => {
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
