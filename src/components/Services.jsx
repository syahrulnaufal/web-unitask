import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    title: 'UniRide',
    description: 'Butuh transportasi yang praktis dan aman? Jasa Antar Jemput siap mengantar ke tujuan dengan layanan yang nyaman dan terpercaya! Cocok untuk mahasiswa, pekerja, atau siapa saja yang ingin bepergian tanpa ribet.',
    iconPlaceholder: 'bg-indigo-100 text-indigo-600', // Placeholder style
    iconLogo: 'uniride.png',
  },
  {
    title: 'UniKeep',
    description: 'Proses dengan harga terjangkau untuk mahasiswa agar lebih hemat, pilihan terbaik untuk kalian',
    iconPlaceholder: 'bg-blue-100 text-blue-600',
    iconLogo: 'unikeep.png',
  },
  {
    title: 'UniShoes',
    description: 'Sepatu kotor, kusam, atau berbau tidak sedap? Layanan Cuci Sepatu siap membantu mengembalikan kebersihan dan kesegaran sepatumu dengan perawatan terbaik!',
    iconPlaceholder: 'bg-cyan-100 text-cyan-600',
    iconLogo: 'unishoes.png',
  },
  {
    title: 'UniClean',
    description: 'Punya tumpukan pakaian kotor tapi nggak sempat mencuci? Jasa Laundry hadir sebagai solusi praktis untuk mencuci pakaianmu dengan bersih, wangi, dan rapi tanpa ribet!',
    iconPlaceholder: 'bg-sky-100 text-sky-600',
    iconLogo: 'uniclean.png',
  },
  {
    title: 'UniSend',
    description: 'Butuh barang dari toko atau restoran favorit tapi nggak sempat beli sendiri? Jasa Titip Mahasiswa hadir untuk membantu! Kami menyediakan layanan titip beli makanan, minuman, perlengkapan kuliah, hingga barang lainnya dengan harga terjangkau dan sistem yang mudah.',
    iconPlaceholder: 'bg-blue-100 text-blue-600',
    iconLogo: 'unisend.png',
  },
  {
    title: 'Uniteach',
    description: 'Ingin belajar lebih efektif dengan bimbingan dari mentor berpengalaman? Jasa Mentor hadir untuk membantu kamu mengembangkan keterampilan, meningkatkan pemahaman, dan mencapai target akademik atau profesional dengan lebih cepat!',
    iconPlaceholder: 'bg-indigo-100 text-indigo-600',
    iconLogo: 'uniteach.png',
  },
];

const ServiceCard = ({ title, description, iconPlaceholder, iconLogo, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: false }}
      className="bg-linear-to-b from-[#5AB5DF] hover:scale-105 to-[#1072E9] text-white rounded-xl p-4 sm:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all transition-duration-200 cursor-pointer"
    >
      {/* Icon Placeholder */}
      <div className={`w-16 h-16 rounded-full mb-4 sm:mb-6 flex items-center justify-center ${iconPlaceholder} bg-white`}>
        <img src={`/images/${iconLogo}`} alt="" width={50} height={50}/>
      </div>
      
      <h3 className="text-2xl font-bold mb-2 sm:mb-4">{title}</h3>
      <p className="text-blue-100 text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-500 mb-2">LAYANAN KAMI</h2>
          <p className="text-gray-600 text-lg">UniTask hadir menjadi solusi bagi kamu</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
