// components/AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative border-t-0"
      style={{ marginTop: '-1px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título com design minimalista */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">O ESCRITÓRIO</h2>
          <div className="w-16 h-px bg-blue-700 mx-auto mt-4"></div>
        </div>
        
        {/* Grid container com espaço negativo */}
        <div className="max-w-5xl mx-auto">
          {/* Texto principal com tipografia limpa */}
          <div className="space-y-8 mb-20">
            <p className="text-gray-700 leading-relaxed">
              Somos um tradicional escritório de advocacia na cidade de Sorocaba e Região, que há muitos anos vem 
              defendendo os interesses de nossos clientes com eficiência, dedicação e agilidade. Nossos sócios 
              fundadores, Dr. Sérgio Soave e Dr. Carlos Soave trouxeram à advocacia regional nos anos 1980 um jeito 
              inovador e eficiente de resolução de conflitos nas mais diversas áreas do direito, inspirando colegas 
              de classe e principalmente a sua família.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Nos anos 2000 a esposa do Dr. Carlos, a sócia Dra. Renata Latuf Soave integrou a banca do escritório, 
              com foco nas áreas de direito de família e contencioso cível.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              A paixão passou de geração para geração e Dr. Caio Soave, filho de Carlos e Renata, agregou seus 
              conhecimentos e experiência abrangendo a área trabalhista e empresarial com foco na assessoria 
              jurídica preventiva.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Além disso, diversos profissionais da área juridica, colegas advogados e estagiários, contribuíram 
              para a formação e o sucesso de um escritório familiar com competência para atender as mais complexas 
              demandas judiciais.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Atualmente, com o triste falecimento do sócio fundador Carlos Augusto Latorre Soave no ano de 2021, 
              e de Sérgio Soave no ano de 2022, a equipe de advogados, sócios e associados, continuam expandindo 
              com muita dedicação, zelo e eficiência todos os conhecimentos deixados pelos grandiosos advogados 
              (homens, amigos, maridos, pais e avôs) que foram, defendendo os interesses de seus clientes e 
              buscando resolver os conflitos atuais do ordenamento jurídico.
            </p>
          </div>
        </div>
        
        {/* Linha divisória sutil */}
        <div className="w-full h-px bg-gray-100 my-12"></div>
        
        {/* Valores com design minimalista */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="group">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4 
                            group-hover:bg-blue-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-900">Tradição</h3>
            </div>
            <p className="text-gray-600 pl-14">Mais de 40 anos de experiência jurídica em Sorocaba e região.</p>
          </div>
          
          <div className="group">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4
                            group-hover:bg-blue-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-900">Confiança</h3>
            </div>
            <p className="text-gray-600 pl-14">Compromisso com a defesa dos interesses de nossos clientes.</p>
          </div>
          
          <div className="group">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4
                            group-hover:bg-blue-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-900">Eficiência</h3>
            </div>
            <p className="text-gray-600 pl-14">Soluções jurídicas inovadoras e eficientes para cada caso.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;