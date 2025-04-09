// components/Footer.jsx
import React from 'react';
import soave from './soave.logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 text-gray-600 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Conteúdo principal do footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Logo e descrição */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <div className="mb-4">
              <img 
                src={soave}
                alt="Soave Advocacia" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs text-center md:text-left mt-2">
              Excelência jurídica personalizada com foco em resultados e atendimento humanizado.
            </p>
          </div>
          
          {/* Links rápidos */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 text-sm">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 text-sm">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#areas" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 text-sm">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#localizacao" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 text-sm">
                  Localização
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Informações de contato */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Rua José Maria Hanickel, 150<br />
                    Conj. 71 - Edifício Tokyo<br />
                    Sorocaba/SP - CEP 18047-360
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <a href="tel:+5515997160075" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 text-sm">
                    (15) 99716-0075
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <a href="mailto:contato@soaveadvocacia.com.br" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 text-sm">
                    contato@soaveadvocacia.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Horário de atendimento e redes sociais */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Siga-nos</h3>
            <div className="flex space-x-3 mb-6">
              <a 
                href="https://www.facebook.com/SoaveAdvocacia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-blue-600 hover:bg-blue-50 hover:border-blue-100 transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              
              <a 
                href="https://www.instagram.com/soaveadvocacia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-blue-600 hover:bg-blue-50 hover:border-blue-100 transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Horário</h3>
            <p className="text-gray-500 text-sm">xxxx</p>
          </div>
        </div>
        
        {/* Separador elegante */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs">
            &copy; {currentYear} Soave Advocacia. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-xs text-gray-400 hover:text-blue-600 transition-colors duration-300">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;