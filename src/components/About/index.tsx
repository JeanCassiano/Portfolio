import React from 'react';
import { 
  Container, 
  Content, 
  TextContainer, 
  Title, 
  Subtitle,
  Circle,
  Photo
} from './styles.tsx';
import profileImage from '../../assets/imgs/profile.jpg'; // Importe a imagem aqui

const About: React.FC = () => {

  return (
    <Container id="about">
      
        {/* Título principal da seção */}
        <Title>Sobre Mim</Title>
        <Subtitle>Conheça mais sobre a minha trajetória e as tecnologias que domino.</Subtitle>
        <Content>
        {/* Seção Sobre Mim */}
        <TextContainer>
          <h2>Sobre mim</h2>
          <p>
            Olá! Eu sou o Jean Cassiano, um apaixonado por tecnologia e desenvolvimento de software.
            Com uma base sólida em engenharia de computação e uma forte orientação para resultados,
            estou sempre em busca de novos desafios que me permitam crescer e aprender.
            Tenho bastante conhecimento em Front-end, pricncipalmente com React, mas também tenho
            interesse em aprender mais sobre back-end e outras áreas da tecnologia. Além disso, tenho conhecimentos
            em Base de Dados, Estrutura de Dados, Machine Learning, Redes Neurais e diversas Linguagens de Programação.
          </p>
        </TextContainer>

        <Circle>
        <Photo src={profileImage} alt="Sua Foto" /> {/* Usando a imagem importada */}
      </Circle>
      </Content>

    </Container>
  );
};

export default About;
