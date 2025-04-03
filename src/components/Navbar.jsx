// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import soaveLogo from './soave.logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Detectar scroll para mudar a transparência do navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { title: 'Home', href: '#home' },
    { title: 'O Escritório', href: '#about' },
    { title: 'Áreas de Atuação', href: '#areas' },
    { title: 'Localização', href: '#location' },
    { title: 'Contato', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <img 
              src={soaveLogo} 
              alt="Soave Advocacia" 
              className="h-12 sm:h-14 md:h-16 transition-all" 
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium relative group transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-blue-800' : 'text-white hover:text-blue-200'
                }`}
              >
                {item.title}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </a>
            ))}
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu mobile - corrigido */}
      {isOpen && (
        <div className="md:hidden bg-white fixed top-20 left-0 right-0 shadow-lg z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-700 hover:text-blue-800 block px-3 py-2 text-base font-medium relative group"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;