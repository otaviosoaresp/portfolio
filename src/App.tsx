import React from 'react';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience';
import Works from './components/Works/Works';
import Techlogies from './components/Techlogies/Techlogies';


const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Hero />
          <About />
          <Experience />
          <Techlogies />
          <Works />
        </div>
      </BrowserRouter>
    </I18nextProvider>
  )
}

export default App
