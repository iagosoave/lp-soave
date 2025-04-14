import React from 'react';
import predio from './predio.jpg';

const LocationSection = () => {
  return (
    <>
      <div className="relative py-16 md:py-24 bg-gray-900 overflow-hidden h-[400px] md:h-[500px]">
  {/* Seção de chamada jurídica com fundo e alinhamento responsivo */}

  {/* Imagem de fundo */}
  <div className="absolute inset-0">
    <img
      src={predio}
      alt="Edifício Tokyo"
      className="w-full h-full object-cover opacity-40 object-[center_30%] md:object-[center_70%]"
    />
    <div className="absolute inset-0 bg-black opacity-70"></div>
  </div>

  {/* Container de conteúdo com alinhamento preciso */}
  <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="w-full md:w-[45%] text-left space-y-6">
      {/* Título com animação sutil */}
      <h2 className="text-2xl md:text-4xl font-extralight text-white leading-tight tracking-wide">
        PRECISA DE 
        <br />
        <span className="font-semibold tracking-widest">AJUDA JURÍDICA?</span>
      </h2>

      {/* Subtítulo elegante */}
      <p className="text-gray-300 font-light text-sm md:text-base">
        Entre em contato agora mesmo
        <br className="hidden md:block" /> 
        com nossa equipe especializada
      </p>

      {/* Botão de chamada com hover suave */}
      <a
        href="https://wa.me/5515997160075"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-md text-white 
        bg-[#55595c] hover:bg-gray-700 transition-colors duration-300 shadow-lg"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 448 512">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
        FALE CONOSCO PELO WHATSAPP
      </a>
    </div>
  </div>
</div>
      {/* Location Section */}
      <section id="localizacao" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extralight tracking-widest text-gray-900">LOCALIZAÇÃO</h2>
            <div className="w-10 h-px bg-[#55595c] mx-auto mt-3"></div>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Map */}
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
              
              {/* Contact Info */}
              <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-center bg-gray-50">
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex">
                    <div className="flex-shrink-0 w-8 flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#55595c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  
                  {/* Phone */}
                  <div className="flex">
                    <div className="flex-shrink-0 w-8 flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#55595c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#55595c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 text-sm font-light">contato@soaveadvocacia.com.br</p>
                    </div>
                  </div>
                  
                  {/* Hours */}
                  <div className="flex pt-3 border-t border-gray-200">
                    <div className="flex-shrink-0 w-8 flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#55595c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 text-sm font-light">Segunda a Sexta: 9h às 18h</p>
                    </div>
                  </div>
                  
                  {/* Google Maps Link */}
                  <div className="flex pt-3 border-t border-gray-200">
                    <div className="flex-shrink-0 w-8 flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#55595c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <a 
                        href="https://goo.gl/maps/7b75e85019aff0eb"
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-gray-700 text-sm font-light hover:text-[#55595c] transition-colors duration-300"
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
    </>
  );
};

export default LocationSection;