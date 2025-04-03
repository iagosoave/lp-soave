// components/PracticeAreasSection.jsx
import React, { useState } from 'react';

const PracticeAreasSection = () => {
  // Estado para controlar o card expandido/em foco
  const [activeCard, setActiveCard] = useState(null);

  const areas = [
    {
      id: 'civil',
      title: 'Contencioso Cível',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      description: 'Com uma visão multidisciplinar nossa abordagem auxilia os clientes a gerenciar seus problemas de litígio mais críticos em vários setores abrangidos pelo direito civil.'
    },
    {
      id: 'medico',
      title: 'Direito Médico',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      description: 'Contamos com equipe especializada em Direito Médico para mediar questões jurídicas envolvendo a prática médica e serviços de saúde, defendendo os interesses de profissionais de saúde, pacientes e instituições.'
    },
    {
      id: 'familia',
      title: 'Família e Sucessões',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: 'Com ampla experiência em direito de família e sucessões, nosso escritório busca prestar serviços de alta qualidade para resolver conflitos existentes como divórcio, alimentos, inventário e partilha de bens.'
    },
    {
      id: 'trabalhista',
      title: 'Trabalhista',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Nossos advogados estão preparados para defender os interesses de clientes, principalmente nas defesas trabalhistas e ajuizamento de ações, fornecendo os melhores resultados na solução dos conflitos.'
    },
    {
      id: 'previdenciario',
      title: 'Previdenciário',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Nossa equipe oferece um serviço ao cliente prático e ágil no ambito previdenciário, buscando a implementação de benefícios dos mais variados tipos, além de auxílio e planejamento da aposentadoria.'
    },
    {
      id: 'tributario',
      title: 'Tributário',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: 'Prestamos serviços de assessoria tributária de forma a adequar os problemas decorrentes de impostos, taxas e tarifas às soluções mais viáveis economicamente e com menor impacto para nossos clientes.'
    },
    {
      id: 'preventiva',
      title: 'Assessoria Preventiva',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: 'Possuímos recursos adequados e advogados qualificados na assessoria preventiva para lidar com transações substanciais e desenvolver planejamento jurídico-financeiro que evite demandas judiciais onerosas.'
    }
  ];

  return (
    <section id="areas" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título com design minimalista refinado */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide">ÁREAS DE ATUAÇÃO</h2>
          <div className="w-16 h-px bg-blue-700 mx-auto mt-4"></div>
        </div>
        
        {/* Grid de cards com design aprimorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {areas.map((area) => (
            <div 
              key={area.id} 
              className={`group bg-white relative overflow-hidden transition-all duration-500 ease-in-out
                ${activeCard === area.id ? 'ring-2 ring-blue-500 shadow-lg transform -translate-y-1' : 'hover:shadow-md'}
                `}
              onMouseEnter={() => setActiveCard(area.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Borda superior com transição de cor */}
              <div className={`h-1 w-full absolute top-0 left-0 right-0 transition-colors duration-700 ease-in-out
                ${activeCard === area.id ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
              
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-5">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-all duration-500 ease-in-out
                    ${activeCard === area.id ? 'bg-blue-100 text-blue-800' : 'bg-gray-50 text-blue-700'}`}>
                    {area.icon}
                  </div>
                  <h3 className={`text-lg font-medium transition-colors duration-300 
                    ${activeCard === area.id ? 'text-blue-800' : 'text-gray-900'}`}>
                    {area.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {area.description}
                </p>
                
                <div className="flex justify-end items-center">
                  <a 
                    href={`#${area.id}`} 
                    className={`inline-flex items-center text-xs font-medium transition-all duration-500 ease-in-out
                      ${activeCard === area.id ? 'text-blue-800' : 'text-blue-600 opacity-0 group-hover:opacity-100'}`}
                  >
                    <span>Saiba mais</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 ml-1 transition-transform duration-500 ease-in-out
                        ${activeCard === area.id ? 'transform translate-x-1' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Texto de chamada para ação */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Nosso compromisso é oferecer soluções jurídicas eficientes e personalizadas para cada caso, 
            com a excelência e dedicação que fazem parte da tradição do escritório Soave Advocacia.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-sm shadow-sm text-white bg-blue-700 hover:bg-blue-800 transition-colors duration-300"
          >
            Entre em contato para uma consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;