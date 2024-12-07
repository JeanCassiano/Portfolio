import styled, {keyframes} from 'styled-components';


const rotate = keyframes`
  0%{
      transform:translateY(0px);
  }

  60%{
    transform:translateY(0px);
  }

  70%{
    transform:translateY(10px);
  }
  80%{
    transform:translateY(0px);
  }
  90%{
    transform:translateY(10px);
  }
  100%{
    transform:translateY(0px);
  }
`;

// Container principal do Header
export const Container = styled.header`

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 95vh;
  background-color: #000;
  color: white;
  flex-direction: column;
  text-align: center;
  padding: 2rem;
`;

// Círculo onde a foto vai ficar
export const Circle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

// Foto do perfil
export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Container de texto
export const TextContainer = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  
  // Efeito de cursor piscando
  p::after {
    content: '|';
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    0% { visibility: visible; }
    50% { visibility: hidden; }
    100% { visibility: visible; }
  }
`;


export const ArrowDiv = styled.div`
  width: 100%;
  margin-top: 20px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  font-size: 7rem;

  .arrow {
    color: white;
    animation: ${rotate} 2s infinite;
    transition: color 0.3s ease-in;

    &:hover {
      color: cyan;
    }
  }

  /* Ajusta a distância da seta para telas menores */
  @media (max-width: 768px) {
    position: relative; /* Permite controle baseado no fluxo do conteúdo */
    margin-top: 30px; /* Define a distância acima da seta */
    bottom: auto; /* Remove a posição fixa */
  }
`;