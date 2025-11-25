import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Layanan', href: '#services' },
    { name: 'Tentang', href: '#about' }, // Mapped to Footer as requested
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-sm' : ''} py-2 bg-white/80 backdrop-blur-md `}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
              <img src="/images/unitask_logo.png" alt="Unitask Logo" className="h-12 md:h-16 w-auto" />
              <span className={`font-bold text-xl md:hidden text-blue-900`}>Unitask</span>
              <div className="hidden md:flex space-x-8 ml-12">
                {navLinks.map((link) => (
                  <a 
                  key={link.name} 
                  href={link.href} 
                  className={`font-medium transition text-lg text-gray-700 hover:text-blue-600`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
          </div>

          {/* Sign In Button (Desktop) */}
          <div className="hidden md:block ml-4">
            <button className={`px-6 py-2 rounded-full font-bold transition ${scrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-blue-50'}`}>
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg className={`w-8 h-8 text-gray-800`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Sidebar - Rendered via Portal */}
      {createPortal(
        <div className={`fixed inset-0 z-100 flex justify-end transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
          {/* Backdrop */}
          <div 
              className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
              onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Sidebar */}
          <div className={`relative w-64 bg-white h-full shadow-xl p-8 flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="flex justify-between items-center mb-8">
                  <div></div>
                  <button onClick={() => setIsOpen(false)}>
                      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
              </div>
              
              <div className="flex flex-col space-y-4 items-end h-full justify-between">
                  <div className="w-full flex flex-col space-y-4 items-end">
                    <div className="text-2xl font-bold text-blue-600 mb-12">Menu</div>
                    {navLinks.map((link) => (
                      <a 
                      key={link.name} 
                      href={link.href} 
                      className="text-gray-700 font-medium text-xl mb-8 hover:text-blue-600 transition"
                      onClick={() => setIsOpen(false)}
                      >
                            {link.name}
                        </a>
                    ))}
                  </div>                
                  <button className=" bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition w-full mt-4">
                      Sign In
                  </button>
              </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Navbar;
