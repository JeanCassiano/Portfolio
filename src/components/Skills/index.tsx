import React from 'react';
import { Container, Title, SkillsGrid, Category, SkillItem, Subtitle } from './styles.tsx';

import { FaPython, FaReact, FaNode, FaGitAlt, FaJava} from 'react-icons/fa';
import { SiCplusplus, SiHtml5, SiBootstrap, SiDjango, SiGooglecloud, SiC, SiOracle } from 'react-icons/si';

const SkillsSection: React.FC = () => {
  const skills = [
    {
      category: 'Languages',
      items: [<FaPython />, <SiC/>,  <SiCplusplus />, <FaJava/>],
    },
    {
      category: 'Frontend',
      items: [<FaReact />, <SiHtml5 />, <SiBootstrap />],
    },
    {
      category: 'Backend',
      items: [<FaNode />, <SiDjango />],  
    },
    {
      category: 'Cloud',
      items: [ <SiGooglecloud/>],
    },
    {
      category: 'Databases',
      items: [<SiOracle/>],
    },
    {
      category: 'Tools',
      items: [<FaGitAlt />],
    },
  ];

  return (
    <Container id='skills'>
      <Title>Skills</Title>
      <Subtitle>Conheça um pouco mais sobre as tecnologias que eu domino</Subtitle>
      <SkillsGrid>
        {skills.map((category, index) => (
          <Category key={index}>
            <h3>{category.category}</h3>
            <div>
              {category.items.map((icon, i) => (
                <SkillItem key={i}>{icon}</SkillItem>
              ))}
            </div>
          </Category>
        ))}
      </SkillsGrid>
    </Container>
  );
};

export default SkillsSection;
