import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen bg-white overflow-hidden font-sans">
      {/* Background Gradient */}
      {/* <div className="absolute inset-x-4 top-24 bottom-4 rounded-3xl bg-linear-to-br from-blue-600 via-purple-500 to-indigo-600 opacity-90 -z-10 overflow-hidden"> */}
        {/* Abstract shapes/blobs for more detail if needed */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-blue-500/50 to-purple-500/50 mix-blend-overlay"></div> */}
      {/* </div> */}
      <div className='w-full md:h-screen h-screen absolute top-0 left-0 right-0 z-10 sm:px-16 px-0 pt-24'>
        <div className='bg-cover bg-center bg-no-repeat hero-section-bg w-full h-full bg-[url("/images/bg_hero.png")] rounded-t-4xl overflow-hidden'></div>
      </div>

      <div className="max-w-7xl mx-auto sm:px-28 px-6 md:pt-30 pt-30 pb-16 flex flex-col gap-12 lg:gap-0 lg:flex-row items-center min-h-screen ">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="lg:w-3/5 h-[80vh] lg:h-fit flex flex-col justify-around text-white z-10 pb-8"
        >
          <div className='h-5'></div>
          <p className="text-sm md:text-base font-semibold tracking-wider mb-4 text-blue-100 uppercase">
            Desain Lebih Cerdas, Bukan Lebih Keras
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Hidup Mahasiswa Lebih Mudah dan Praktis
          </h1>
          <p className="text-base md:text-xl text-blue-100 mb-8 max-w-lg leading-relaxed">
            Mahasiswa zaman now butuh solusi cepat dan efisien untuk berbagai kebutuhan sehari-hari. UniTask hadir sebagai platform digital yang menghubungkan mahasiswa dengan berbagai layanan yang mempermudah kehidupan kampus
          </p>
          
          <div className='flex justify-center sm:justify-start'>
            <div className="flex space-x-4 sm:flex-row flex-col gap-4 sm:gap-0 ">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full w-[200px] font-bold hover:bg-blue-50 transition shadow-lg">
                Temukan Solusi
              </button>
              <button className="border-2 border-white/50 text-white px-8 py-3 rounded-full w-[200px] font-bold hover:bg-white/10 transition backdrop-blur-sm">
                Kontak
              </button>
            </div>
          </div>
        
        </motion.div>

        {/* Right Content - Phone Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
          className="md:w-2/5 relative mt-12 md:mt-0 flex justify-center z-10"
        >
            {/* Mockup Container */}
            <div className="relative w-[200px] h-[430px] bg-white rounded-2xl shadow-2xl border-3 border-white overflow-hidden">
                <img src="/images/app1.jpeg" alt="Phone Mockup" className="w-full h-full object-cover" />
            </div>

            {/* Second Phone (Partially visible behind) */}
             <div className="absolute top-12 -right-12 w-[280px] h-[550px] bg-white rounded-[2.5rem] shadow-xl border-8 border-gray-100 -z-10 opacity-80 transform rotate-6 overflow-hidden">
              <img src="/images/app2.jpeg" alt="Phone Mockup" className="w-full h-full object-cover" />
             </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
