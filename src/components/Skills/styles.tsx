import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  background-color: #000;
  color: #fff;
`;


export const Title = styled.h1`
  font-size: 3rem;
  color: cyan;
  font-weight: 700;
  margin-top: 100px;
  margin-bottom: 40px;
  text-align: center;
  text-transform: uppercase;
  position: relative; /* Necessário para o posicionamento do pseudo-elemento */
  text-shadow: 
    5px 5px rgba(0, 255, 255, 0.4), 
    10px 10px rgba(0, 255, 255, 0.3),
    15px 15px rgba(0, 255, 255, 0.2 );

  @media (max-width: 768px) {
    margin-top: -75px;
  } 
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #ddd;
  text-align: center;
  margin-top: 5px; /* Espaço entre o título e o subtítulo */
  margin-bottom: 30px;
  max-width: 800px; /* Controla a largura máxima do subtítulo */
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;




export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* Apenas uma coluna em telas menores */
    gap: 30px; /* Reduz o espaçamento */
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr); /* Apenas uma coluna para telas ainda menores */
    gap: 30x; /* Ajuste adicional para telas muito pequenas */
  }
`;

export const Category = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 
    5px 5px rgba(0, 255, 255, 0.5), 
    10px 10px rgba(0, 255, 255, 0.4),
    15px 15px rgba(0, 255, 255, 0.3),
    20px 20px rgba(0, 255, 255, 0.2),
    25px 25px rgba(0, 255, 255, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
  }

  h3 {
    font-size: 1.5rem;
    color: #00e6e6;
    margin-bottom: 15px;
    text-transform: uppercase;
    text-align: start; /* Alinha o título ao início do contêiner */
  }

  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 15px; /* Espaçamento entre os ícones */
    justify-content: center; /* Garante que os ícones estejam centralizados */
  }

  @media (max-width: 768px) {
    box-shadow: 
    2.5px 2.5px rgba(0, 255, 255, 0.5), 
    5px 5px rgba(0, 255, 255, 0.4),
    7.5px 7.5px rgba(0, 255, 255, 0.3),
    10px 10px rgba(0, 255, 255, 0.2),
    12.5px 12.5px rgba(0, 255, 255, 0.1);
  }


`;


export const SkillItem = styled.div`
  display: flex; /* Define o contêiner como Flexbox */
  align-items: center; /* Centraliza o ícone verticalmente */
  justify-content: center; /* Centraliza o ícone horizontalmente */
  background-color: #33334d;
  padding: 0; /* Remove espaçamento interno */
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  width: 80px;
  height: 80px; /* Certifica-se de que o contêiner seja um quadrado */
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    transform: scale(1.1);
    background-color: #00e6e6;
    color: #000;

    svg {
      color: #000; /* Torna o ícone preto ao passar o mouse */
    }
  }

  svg {
    margin-left: 20px;
    font-size: 2.5rem; /* Define o tamanho do ícone */
    color: inherit; /* Preserva a cor original do ícone */
    transition: color 0.3s; /* Anima a transição de cor */
  }
`;
