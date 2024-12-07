import React, { useState } from 'react';
import { Container, Logo, Nav, NavItem, Hamburger, SideMenu, CloseButton } from './styles.tsx';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Função para rolar suavemente
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMenu(); // Fecha o menu se for mobile
    }
  };

  return (
    <>
      {/* NavBar principal */}
      <Container>
        <Logo onClick={() => scrollToSection('home')}>Jean Cassiano</Logo>
        {/* Navegação Desktop */}
        <Nav className="desktop">
          <NavItem onClick={() => scrollToSection('home')}>Home</NavItem>
          <NavItem onClick={() => scrollToSection('about')}>Sobre</NavItem>
          <NavItem onClick={() => scrollToSection('skills')}>Skills</NavItem>
          <NavItem onClick={() => scrollToSection('timeline')}>TimeLine</NavItem>
          <NavItem onClick={() => scrollToSection('contact')}>Contato</NavItem>
        </Nav>

        {/* Botão Hambúrguer */}
        <Hamburger onClick={toggleMenu} className={isOpen ? 'open' : ''}>
          <div />
          <div />
          <div />
        </Hamburger>
      </Container>

      {/* Menu Lateral Mobile */}
      <SideMenu isOpen={isOpen}>
        <CloseButton onClick={closeMenu}>×</CloseButton>
        <Nav className="mobile">
          <NavItem onClick={() => scrollToSection('home')}>Home</NavItem>
          <NavItem onClick={() => scrollToSection('about')}>Sobre</NavItem>
          <NavItem onClick={() => scrollToSection('skills')}>Skills</NavItem>
          <NavItem onClick={() => scrollToSection('timeline')}>TimeLine</NavItem>
          <NavItem onClick={() => scrollToSection('contact')}>Contato</NavItem>
        </Nav>
      </SideMenu>
    </>
  );
};

export default NavBar;
