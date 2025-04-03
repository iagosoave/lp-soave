// components/LocationSection.jsx
import React from 'react';

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título com design minimalista refinado */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide">LOCALIZAÇÃO</h2>
          <div className="w-16 h-px bg-blue-700 mx-auto mt-4"></div>
        </div>
        
        {/* Conteúdo de Localização */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Informações de contato */}
          <div className="bg-white p-8 shadow-sm">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Nosso Endereço</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-700 leading-relaxed">
                    Rua José Maria Hanickel, 150 - Conj. 71<br />
                    Edifício Tokyo - Portal da Colina<br />
                    Sorocaba/SP - CEP 18047-360
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-700">(15) 99716-0075</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-700">contato@soaveadvocacia.com.br</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Horário de Atendimento</h4>
              <div className="space-y-2">
                <p className="text-gray-700">xxxx</p>
              </div>
            </div>
            
            <div className="mt-10">
              <a 
                href="#contact" 
                className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-sm shadow-sm text-white bg-blue-700 hover:bg-blue-800 transition-colors duration-300"
              >
                Agende uma consulta
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Mapa incorporado */}
          <div className="h-96 lg:h-auto bg-white shadow-sm overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.4747724388735!2d-47.451483799999996!3d-23.515232599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58a930d245555%3A0x7b75e85019aff0eb!2sEdif%C3%ADcio%20Tokyo!5e0!3m2!1spt-BR!2sbr!4v1712179652830!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Escritório Soave Advocacia"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
        
        {/* Texto de acessibilidade */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Localizado em uma região privilegiada de Sorocaba, nosso escritório oferece fácil acesso 
            e estacionamento nas proximidades. Estamos prontos para recebê-lo com a comodidade e 
            profissionalismo que você merece.
          </p>
          <a 
            href="https://goo.gl/maps/7b75e85019aff0eb"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-800 transition-colors duration-300"
          >
            <span>Ver rotas no Google Maps</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;