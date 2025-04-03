// components/HeroSection.jsx
import React from 'react';
import banner from './banner.png';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Imagem de fundo com overlay - melhor posicionamento no mobile */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={banner}
            alt="Soave Advocacia"
            className="w-full h-full object-cover object-left-center sm:object-left md:object-left-center lg:object-center scale-100"
            // Ajustes:
            // - Posicionamento mais à esquerda para mostrar melhor o logo em dispositivos móveis
            // - object-left-center para dar foco ao logo no mobile
            // - Mantém object-center apenas em desktop (lg)
          />
        </div>
      </div>
      
      {/* Conteúdo principal da home */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
        <div className="max-w-xl md:max-w-3xl pt-20 md:pt-0 sm:pt-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4 md:mb-6">
            Advocacia especializada em direito civil e empresarial
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-6 md:mb-8 text-gray-200">
            Mais de 40 anos de tradição e excelência jurídica em Sorocaba e região.
          </p>
          
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-3 bg-blue-700 hover:bg-blue-800 text-white text-sm md:text-base font-medium rounded-sm transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
            Entre em contato
          </a>
        </div>
      </div>
      
      {/* Ondas na parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20 md:h-32 block"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L48,144C96,128,192,96,288,101.3C384,107,480,149,576,149.3C672,149,768,107,864,90.7C960,75,1056,85,1152,96C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;