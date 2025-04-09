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
  
  const navItems = [
    { title: 'Home', href: '#home' },
    { title: 'O Escritório', href: '#about' },
    { title: 'Áreas de Atuação', href: '#areas' },
    { title: 'Localização', href: '#location' },
    { title: 'Contato', href: '#contact' }
  ];
  
  const socialItems = [
    { icon: Instagram, href: 'https://instagram.com/soaveadvocacia', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/soaveadvocacia', label: 'Facebook' },
    { icon: Phone, href: 'https://wa.me/5515999999999', label: 'WhatsApp' }
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
                <item.icon size={20} className="transition-transform hover:scale-110" />
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
      
      {/* Menu mobile aprimorado */}
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