import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FindSolution from './components/FindSolution';
import Recommendation from './components/Recommendation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <FindSolution />
      <Recommendation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
