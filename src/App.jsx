import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FindSolution from './components/FindSolution';
import Recommendation from './components/Recommendation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const imageUrls = [
        '/images/unitask_logo.png',
        '/images/bg_hero.png',
        // '/images/uniride_feat.jpg',
        // '/images/unisend_feat.jpg',
        // '/images/unishoes_feat.jpg',
        // '/images/uniteach_feat.jpg',
        // '/images/uniclean_feat.jpg',
        // '/images/unikeep_feat.jpg',
        // Add other critical images here
      ];

      const cacheImages = async (src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // Resolve even on error to avoid getting stuck
        });
      };

      await Promise.all(imageUrls.map((src) => cacheImages(src)));
      
      // Add a small delay for smoother transition
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    preloadImages();
  }, []);

  return (
    <div className="font-sans">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Services />
          <FindSolution />
          <Recommendation />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
