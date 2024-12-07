import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #000;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: cyan;
  font-weight: 700;
  margin-top: 50px;
  margin-bottom: 40px;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 
    5px 5px rgba(0, 255, 255, 0.4), 
    10px 10px rgba(0, 255, 255, 0.3),
    15px 15px rgba(0, 255, 255, 0.2);
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #ddd;
  text-align: center;
  margin-top: 10px;
  max-width: 800px;
  line-height: 1.6;
  margin-left: auto;
  margin-right: auto;
`;

export const Content = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  width: 100%;
  gap: 50px;
  flex-wrap: wrap; /* Permite empilhar os elementos em telas menores */

  @media (max-width: 768px) {
    flex-direction: column; /* Empilha os elementos em telas menores */
    align-items: center;
    gap: 30px;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  max-width: 600px;

  h2 {
    font-size: 2.5rem;
    color: cyan;
    margin-bottom: 20px;
    border-left: 4px solid cyan;
    padding-left: 15px;
    text-shadow: 
      5px 5px rgba(0, 255, 255, 0.4), 
      10px 10px rgba(0, 255, 255, 0.3),
      15px 15px rgba(0, 255, 255, 0.2);
  }

  p {
    font-size: 1.2rem;
    color: #ddd;
    line-height: 1.8;
    text-align: justify;
  }

  @media (max-width: 768px) {
    text-align: center; /* Centraliza o texto em telas menores */
    h2 {
      text-align: center;
      padding-left: 0;
      border-left: none;
    }
  }
`;

export const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid cyan;
  margin-bottom: 1.5rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    width: 300;
    height: 300px;
    margin-top: 1rem;
    margin-bottom: 0rem;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
