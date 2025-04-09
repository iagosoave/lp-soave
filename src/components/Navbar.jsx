import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Phone } from 'lucide-react';
import soaveLogo from './soave.logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  
  // Detectar scroll e seção ativa
  useEffect(() => {
    const handleScroll = () => {
      // Efeito de sombra
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Detectar seção atual para navegação ativa
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveItem(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Itens de navegação atualizados - removido "Contato"
  const navItems = [
    { title: 'Home', href: '#home' },
    { title: 'O Escritório', href: '#about' },
    { title: 'Áreas de Atuação', href: '#areas' },
    { title: 'Localização', href: '#localizacao' } // Corrigido o href para #localizacao
  ];
  
  const socialItems = [
    { icon: Instagram, href: 'https://instagram.com/soaveadvocacia', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/soaveadvocacia', label: 'Facebook' },
    { 
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="20" height="20">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      ), 
      href: 'https://wa.me/5515997160075', 
      label: 'WhatsApp' 
    }
  ];
  
  // Smooth scroll para as seções
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      
      setActiveItem(targetId);
      
      if (isOpen) {
        setIsOpen(false);
      }
    }
  };
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - à esquerda em mobile, centralizado em desktop */}
          <div className="flex-shrink-0 md:absolute md:left-4 lg:left-8">
            <img
              src={soaveLogo}
              alt="Soave Advocacia"
              className="h-12 sm:h-14 md:h-16 transition-all"
            />
          </div>
          
          {/* Links de navegação - centralizados */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-1 lg:space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 text-sm font-medium relative group transition-all duration-300 ${
                    activeItem === item.href.substring(1) 
                      ? 'text-blue-800' 
                      : 'text-gray-700 hover:text-blue-800'
                  }`}
                >
                  {item.title}
                  <span 
                    className={`absolute inset-x-0 bottom-0 h-0.5 bg-blue-800 transform transition-transform duration-300 ease-out ${
                      activeItem === item.href.substring(1) 
                        ? 'scale-x-100' 
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`} 
                  />
                </a>
              ))}
            </div>
          </div>
          
          {/* Redes sociais - à direita */}
          <div className="hidden md:flex items-center space-x-4">
            {socialItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-800 transition-colors duration-300"
                aria-label={item.label}
              >
                {typeof item.icon === 'function' 
                  ? <item.icon />
                  : <item.icon size={20} className="transition-transform hover:scale-110" />
                }
              </a>
            ))}
          </div>
          
          {/* Botão do menu mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-800 transition-colors duration-300"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menu principal</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu mobile atualizado */}
      {isOpen && (
        <div className="md:hidden bg-white fixed top-20 left-0 right-0 shadow-lg z-50 border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-1 divide-y divide-gray-100">
            {/* Navegação */}
            <div className="py-2">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-3 py-3 text-base font-medium rounded-md transition-colors duration-300 ${
                    activeItem === item.href.substring(1) 
                      ? 'text-blue-800 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-800 hover:bg-gray-50'
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </div>
            
            {/* Redes sociais no mobile */}
            <div className="py-3">
              <p className="px-3 pb-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Redes Sociais
              </p>
              <div className="flex items-center justify-start space-x-6 px-3 pt-2">
                {socialItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-800 transition-colors duration-300"
                    aria-label={item.label}
                  >
                    {typeof item.icon === 'function' 
                      ? <item.icon />
                      : <item.icon size={22} />
                    }
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;