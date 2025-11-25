import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
          <p className="text-gray-600 text-lg">Silakan hubungi kami untuk informasi lebih lanjut</p>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
            <form className="space-y-6">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition" />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition" />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Pesan</label>
                    <textarea rows="4" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"></textarea>
                </div>
                <button type="button" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition">
                    Kirim Pesan
                </button>
            </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
