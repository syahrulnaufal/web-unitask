import React from 'react';
import { motion } from 'framer-motion';

const FindSolution = () => {
  return (
    <section className="relative py-20 px-8 min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-gray-50">
        {/* Background Image Placeholder - In a real app, this would be an img or bg-image */}
        <div className="absolute inset-0 z-0 opacity-50">
             <img src="/images/temukan_solusimu.jpeg" alt="Background" className="w-full h-full object-cover" />
             {/* <div className="w-full h-full bg-blue-200"></div> */}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-4">Temukan Solusimu</h2>
                <p className="text-blue-500 text-base md:text-lg mb-12 max-w-2xl mx-auto">
                    Sekarang anda dapat menghemat waktu dan biaya secara terjangkau, dengan banyak pilihan solusi anda
                </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false }}
                className="bg-white p-4 md:p-6 rounded-xl shadow-xl flex flex-col md:flex-row gap-4 items-center"
            >
                {/* Solusi Dropdown */}
                <div className="flex-1 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2 md:py-0">
                    <button className="flex items-center justify-between w-full text-blue-500 font-medium">
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path></svg>
                            Solusi
                        </span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                </div>

                {/* Range Harga Dropdown */}
                <div className="flex-1 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2 md:py-0">
                     <button className="flex items-center justify-between w-full text-blue-500 font-medium">
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            Range Harga
                        </span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                </div>

                {/* Lokasi Input */}
                <div className="flex-2 w-full md:w-auto px-4 py-2 md:py-0">
                     <div className="flex items-center gap-2 text-blue-500 font-medium">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <input type="text" placeholder="Cari Berdasarkan Lokasi" className="w-full outline-none text-gray-700 placeholder-blue-400 bg-transparent" />
                    </div>
                </div>

                {/* Cari Button */}
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition w-full md:w-auto">
                    Cari
                </button>
            </motion.div>
        </div>
    </section>
  );
};

export default FindSolution;
