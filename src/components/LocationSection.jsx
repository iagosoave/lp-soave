// components/LocationSection.jsx
import React from 'react';

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título minimalista */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extralight tracking-widest text-gray-900">LOCALIZAÇÃO</h2>
          <div className="w-10 h-px bg-blue-600 mx-auto mt-3"></div>
        </div>
        
        {/* Container principal com ênfase no mapa */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Mapa incorporado - ocupando mais espaço */}
            <div className="lg:col-span-9 h-[450px] md:h-[550px] relative">
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
            
            {/* Informações de contato minimalistas */}
            <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-center bg-gray-50">
              <div className="space-y-6">
                {/* Endereço */}
                <div className="flex">
                  <div className="flex-shrink-0 w-8 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 leading-relaxed text-sm font-light">
                      Rua José Maria Hanickel, 150<br />
                      Conj. 71 - Edifício Tokyo<br />
                      Portal da Colina<br />
                      Sorocaba/SP - CEP 18047-360
                    </p>
                  </div>
                </div>
                
                {/* Telefone */}
                <div className="flex">
                  <div className="flex-shrink-0 w-8 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 text-sm font-light">(15) 99716-0075</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex">
                  <div className="flex-shrink-0 w-8 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 text-sm font-light">contato@soaveadvocacia.com.br</p>
                  </div>
                </div>
                
                {/* Horário */}
                <div className="flex pt-3 border-t border-gray-200">
                  <div className="flex-shrink-0 w-8 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 text-sm font-light">xxxx</p>
                  </div>
                </div>
                
                {/* Link do Google Maps discreto */}
                <div className="flex pt-3 border-t border-gray-200">
                  <div className="flex-shrink-0 w-8 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <a 
                      href="https://goo.gl/maps/7b75e85019aff0eb"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-gray-700 text-sm font-light hover:text-blue-600 transition-colors duration-300"
                    >
                      Ver rotas no Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;