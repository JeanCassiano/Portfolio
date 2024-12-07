import React from 'react';
import NavBar from './components/NavBar/index.tsx';
import Header from './components/Header/index.tsx';
import About from './components/About/index.tsx';
import Timeline from './components/TimeLine/index.tsx';
import Skills from './components/Skills/index.tsx';
import Contact from './components/Contact/index.tsx';
import Footer from './components/Footer/index.tsx';
import { GlobalStyles } from './GlobalStyles/styles.tsx';
import './index.css'
function App() {
  return (
    <div className="App">
      <GlobalStyles>
      <NavBar />
      <Header/>
      <About/>
      <Skills/>
      <Timeline/>
      <Contact/>
      <Footer/>
      </GlobalStyles>
      {/* Outras seções do portfólio, como 'Home', 'Sobre', etc. */}
    </div>
  );
}

export default App;
