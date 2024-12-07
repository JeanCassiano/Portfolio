import styled from 'styled-components';

// Container do NavBar
export const Container = styled.header`
  position: fixed;
  display: flex; 
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8); 
  color: #fff;
  padding: 1rem 2rem;
  z-index: 2000; 
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
  }
`;

// Logo do portfólio
export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;

  &:hover {
    color: cyan;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

// Menu de navegação
export const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  &.desktop {
    @media (max-width: 768px) {
      display: none;
    }
  }

  &.mobile {
    flex-direction: column;
    gap: 2rem;
  }
`;

// Itens do menu
export const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  transition: color 0.3s ease;
  margin-left: 50px;
  &:hover {
    color: cyan;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

// Botão hambúrguer
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 0.4rem;
  cursor: pointer;
  z-index: 1200;

  div {
    width: 30px;
    height: 3px;
    background-color: #fff;
    border-radius: 5px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  &.open div:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  &.open div:nth-child(2) {
    opacity: 0;
  }

  &.open div:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

// Menu lateral
export const SideMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.4s ease;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

// Botão de fechar
export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: cyan;
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #00bfbf;
  }
`;
