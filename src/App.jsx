import React from 'react';
import MP3PlayerList from './MP3PlayerList';

const App = () => {
 
  const data = [
    {
      name: 'apolinaria-maria-da-conceicao',
      audioSrc: 'apolinaria-maria-da-conceicao.mp3',
      imageSrc: 'apolinaria-maria-da-conceicao.png',
      imageName: 'Apolinária Maria da Conceição',
    },
    {
      name: 'belizario-da-conceicao',
      audioSrc: 'belizario-da-conceicao.mp3',
      imageSrc: 'belizario-da-conceicao.png',
      imageName: 'Belizário da Conceição',
    },
    {
      name: 'florinda',
      audioSrc: 'florinda.mp3',
      imageSrc: 'florinda.png',
      imageName: 'Florinda',
    },
    {
      name: 'gertrudes-maria-da-conceicao',
      audioSrc: 'gertrudes-maria-da-conceicao.mp3',
      imageSrc: 'gertrudes-maria-da-conceicao.png',
      imageName: 'Gertrudes Maria da Conceição',
    },
    {
      name: 'gualberto-antonio-da-silva',
      audioSrc: 'gualberto-antonio-da-silva.mp3',
      imageSrc: 'gualberto-antonio-da-silva.png',
      imageName: 'Gualberto Antônio da Silva',
    },
    {
      name: 'marcelino-de-souza',
      audioSrc: 'marcelino-de-souza.mp3',
      imageSrc: 'marcelino-de-souza.png',
      imageName: 'Marcelino de Souza',
    },
    {
      name: 'maria-da-conceicao',
      audioSrc: 'maria-da-conceicao.mp3',
      imageSrc: 'maria-da-conceicao.png',
      imageName: 'Maria da Conceição',
    },
    {
      name: 'maria-geminiana',
      audioSrc: 'maria-geminiana.mp3',
      imageSrc: 'maria-geminiana.png',
      imageName: 'Maria Geminiana',
    },
    {
      name: 'paula-da-conceicao',
      audioSrc: 'paula-da-conceicao.mp3',
      imageSrc: 'paula-da-conceicao.png',
      imageName: 'Paula da Conceição',
    },
    {
      name: 'severa',
      audioSrc: 'severa.mp3',
      imageSrc: 'severa.png',
      imageName: 'Severa',
    },
    {
      name: 'tome-ferreira',
      audioSrc: 'tome-ferreira.mp3',
      imageSrc: 'tome-ferreira.png',
      imageName: 'Tomé Ferreira',
    },
  ];

  const characterName = window.location.pathname.split('/').pop(); // Obtém o nome do personagem da URL

  const characterData = data.filter(item => item.name === characterName);

  if (characterData.length === 0) {
    return <div>Personagem não encontrado</div>;
  }

  return (
    <div>
      <MP3PlayerList data={characterData} />
    </div>
  );
};

export default App;
