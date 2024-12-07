import React from 'react';
import './style.css';
import styled from 'styled-components';
interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
}

const Container = styled.div`

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


const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #ddd;
  text-align: center;
  margin-top: 10px; /* Espaço entre o título e o subtítulo */
  max-width: 800px; /* Controla a largura máxima do subtítulo */
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  margin-bottom: 100px;
`;


const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, description }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-date">{date}</div>
      <div className="timeline-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const timelineData = [
    { date: '2017', title: 'Ensino Médio Integrado ao Técnico', description: 'Comecei um curso de administração integrado ao ensino médio na ETEC Arnaldo Pereira Cheregatti' },
    { date: '2019', title: 'Premiado como melhor aluno na CUCo', description: 'Fui premiado como melhor aluno do 3º Ensino Médio da minha escola pela CUCo (Competição USP de Conhecimentos' },
    { date: '2019', title: 'Formado no Ensino Técnico', description: 'Terminei meu ensino técnico em administração, bem como meu ensino médio' },
    { date: '2022', title: 'Ingresso na Universidade de São Paulo (USP)', description: 'Ingressei na Universidade de São Paulo no curso de Engenharia de Computação' },
    { date: '2022', title: 'Ingresso na SAEComp', description: 'Me tornei membro da SAEComp (Secretaria Acadêmica da Engenharia de Computação), lá fui responsável pelo desenvolvimento do site do nosso curso, bem como bots e scripts com a API do Google e Notion' },
    { date: '2023', title: 'Projetos Sociais', description: 'Me tornei professor bolsista para um projeto de extensão PUB, onde fui designado para ensinar lógica de programação e robótica para alunos do ensino fundamental e médio' },
    { date: '2023', title: 'Diretor da SAEComp', description: 'Me tornei Diretor da Diretoria Técnica da SAEComp. Como diretor eu comandava um pequeno time que exercia funções relacionadas ao Front-end e Back-end do site da Engenharia de Computação, bem como desenvolvimento de bots' },
    { date: '2024', title: 'Iniciação Científica', description: 'Ingressei em uma Iniciação Científica com foco em combate a fake news e deep fake, utilizando conceitos de inteligência artifical' }
  ];

  return (
    <Container id='timeline'>
    <section className="timeline-section">
      <Title>Minha Linha do Tempo</Title>
      <Subtitle>Um pouquinho de como foi minha vida até aqui</Subtitle>
      <div className="timeline-items">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            date={item.date}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
    </Container>
  );
};

export default Timeline;
