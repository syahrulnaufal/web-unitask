import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const recommendations = [
  {
    id: 1,
    image: '/images/uniride_feat.jpg',
    title: 'Mempermudah Distribusi Fasilitas Makanan',
  },
  {
    id: 2,
    image: '/images/unisend_feat.jpg',
    title: 'Fitur UniSend Telah Hadir',
  },
  {
    id: 3,
    image: '/images/unishoes_feat.jpg', 
    title: 'Solusi Cepat Untuk Sepatu Kotor Anda',
  },
  {
    id: 4,
    image: '/images/uniteach_feat.jpg',
    title: 'Kesulitan Memahami Materi Kelas? UniTeach Solusimu!',
  },
  {
    id: 5,
    image: '/images/uniclean_feat.jpg',
    title: 'Uniclean Siap Membantu Mencuci Pakaian Anda!',
  },
  {
    id: 6,
    image: '/images/unikeep_feat.jpg',
    title: 'Titip atau Antar Barang? Unikeep Ajaa',
  },
];

const Recommendation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  // Function to handle scroll events and update the active dot based on which item is centered
  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    // Calculate the center point of the visible container area (scroll position + half width)
    const center = container.scrollLeft + container.clientWidth / 2;
    
    let closestIndex = 0;
    let minDistance = Number.MAX_VALUE;

    // Iterate through all child elements (cards) to find the one closest to the center
    Array.from(container.children).forEach((child, index) => {
      // Calculate the center point of the child element relative to the container
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      
      // Calculate distance between container center and child center
      const distance = Math.abs(center - childCenter);
      
      // Update closest index if this child is closer to the center
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  // Function to scroll to a specific card when a dot is clicked
  const scrollTo = (index) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const child = container.children[index];
    
    if (child) {
        // Calculate the scroll position to center the target child:
        // 1. child.offsetLeft: Position of the child inside the container
        // 2. - (container.clientWidth / 2): Move left by half the container width (to put left edge at center)
        // 3. + (child.offsetWidth / 2): Move right by half the child width (to align centers)
        container.scrollTo({
            left: child.offsetLeft - (container.clientWidth / 2) + (child.offsetWidth / 2),
            behavior: 'smooth'
        });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">Rekomendasi Solusi Untukmu</h2>
        </motion.div>

        {/* Scrollable Container */}
        <div 
            ref={containerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto pb-8 gap-8 mb-4 snap-x snap-mandatory scrollbar-hide"
        >
            {recommendations.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: false }}
                    className={`flex flex-col min-w-[300px] md:min-w-[500px] snap-center ${index === recommendations.length - 1 ? 'mr-32' : ''} ${index === 0 ? 'ml-32' : ''}`}
                >
                    <div className="bg-gray-200 rounded-3xl overflow-hidden border-5 border-blue-600 h-64 md:h-80 mb-6 shadow-lg">
                        <img src={item.image} alt={item.title} className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-2xl font-normal text-black leading-tight">{item.title}</h3>
                </motion.div>
            ))}
        </div>

        {/* Scroll Indicators (Dots) */}
        <div className="flex justify-center gap-2 mb-12">
            {recommendations.map((_, index) => (
                <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeIndex === index ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-blue-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            className="flex justify-center"
        >
            {/* <button className="bg-blue-600 text-white px-12 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-lg">
                cari
            </button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Recommendation;
