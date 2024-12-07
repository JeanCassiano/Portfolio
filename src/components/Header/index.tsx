import React, { useState, useEffect } from 'react';
import { Container, Circle, Photo, TextContainer, ArrowDiv } from './styles.tsx';
import profileImage from '../../assets/imgs/header_pic3.png'; // Importe a imagem aqui
import { FaCaretDown } from 'react-icons/fa';

const Header: React.FC = () => {
  // eslint-disable-next-line
  const phrases = [
    'Desenvolvedor Front-End',
    'Estudante',
    'Engenheiro de Computação',
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const [text, setText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [phraseIndex, setPhraseIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false); 

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      if (currentIndex > 0) {
        const interval = setInterval(() => {
          setText((prevText) => prevText.slice(0, prevText.length - 1));
          setCurrentIndex((prevIndex) => prevIndex - 1);
        }, 50);
        return () => clearInterval(interval);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(false); 
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length); 
        }, 500);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentIndex < currentPhrase.length) {
        const interval = setInterval(() => {
          setText((prevText) => prevText + currentPhrase[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 75);
        return () => clearInterval(interval); 
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true); 
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentIndex, phraseIndex, isDeleting, phrases]);

  
  return (
    <Container id='home'>
      <Circle>
        <Photo src={profileImage} alt="Sua Foto" /> {/* Usando a imagem importada */}
      </Circle>

      <TextContainer>
        <h1>Oi, meu nome é <span style={{ color: 'cyan'}}>Jean Cassiano</span></h1>
        <p>
          E eu sou um {text}
        </p>
        
      </TextContainer>
      <ArrowDiv>
        <a onClick={() => scrollToSection('about')}><FaCaretDown className="arrow" /></a>
      </ArrowDiv>
    </Container>
  );
};

export default Header;
