import React from 'react';
import HomePage from './components/landingPage';
import About from './components/aboutPage';
import Projects from './components/projectsPage';
import Contacts from './components/contactPage';
import BackTop from './components/footerPage';
import './components/style.css';

function App() {
  return (
    <div className="App">
          <HomePage />
          <About />
          <Projects />
          <Contacts />
          <BackTop />
    </div>
  );
}

export default App;
