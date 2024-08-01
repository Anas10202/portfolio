import React from 'react';
import Navbar from './components/Navbar';
import { Home, About, Projects, Contact } from './pages/index.js';

const App = () => {
  return (
    <main className="bg-yellow-100">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;


