import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import about from './about.png';

// Componente completamente redesenhado para garantir imagem full width
const OfficeHistorySection = () => {
  // Animation controls
  const controls = useAnimation();
  
  useEffect(() => {
    const startAnimations = async () => {
      await controls.start('visible');
    };
    startAnimations();
  }, [controls]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };
  
  const lineAnimate = {
    hidden: { width: 0 },
    visible: { 
      width: 80,
      transition: { duration: 0.8, delay: 0.3 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <div id="about" className="bg-white w-full pt-12 md:pt-16" 
      style={{ 
        marginTop: '-1px',
        position: 'relative',
        zIndex: 20
      }}>
      {/* Elemento para forçar fundo branco e prevenir a divisão preta */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-white" style={{ marginTop: '-12px' }}></div>
      
      {/* Seção de texto */}
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Título centralizado */}
        <div className="mb-10 md:mb-14 text-center">
          <motion.h2 
            className="text-2xl md:text-4xl font-bold text-gray-800 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            O ESCRITÓRIO
          </motion.h2>
          
          <motion.div 
            className="h-1 bg-blue-600 mx-auto"
            initial="hidden"
            animate="visible"
            variants={lineAnimate}
            style={{ maxWidth: "80px" }}
          />
        </div>
        
        {/* Layout desktop é de duas colunas, mobile é empilhado */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10 xl:gap-16">
          {/* Coluna de texto */}
          <motion.div 
            className="lg:w-3/5 xl:w-3/5 pb-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="prose prose-lg max-w-none text-gray-700">
              <motion.p 
                className="mb-5"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                Somos um tradicional escritório de advocacia na cidade de Sorocaba e Região, que há muitos anos vem defendendo os interesses de nossos clientes com eficiência, dedicação e agilidade. Nossos sócios fundadores, Dr. Sérgio Soave e Dr. Carlos Soave trouxeram à advocacia regional nos anos 1980 um jeito inovador e eficiente de resolução de conflitos nas mais diversas áreas do direito, inspirando colegas de classe e principalmente a sua família.
              </motion.p>
              
              <motion.p 
                className="mb-5"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
              >
                Nos anos 2000 a esposa do Dr. Carlos, a sócia Dra. Renata Latuf Soave integrou a banca do escritório, com foco nas áreas de direito de família e contencioso cível. A paixão passou de geração para geração e Dr. Caio Soave, filho de Carlos e Renata, agregou seus conhecimentos e experiência abrangendo a área trabalhista e empresarial com foco na assessoria jurídica preventiva.
              </motion.p>
              
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.7 }}
              >
                Atualmente, com o triste falecimento do sócio fundador Carlos Augusto Latorre Soave no ano de 2021, e de Sérgio Soave no ano de 2022, a equipe de advogados, sócios e associados, continuam expandindo com muita dedicação, zelo e eficiência todos os conhecimentos deixados pelos grandiosos advogados (homens, amigos, maridos, pais e avôs) que foram, defendendo os interesses de seus clientes.
              </motion.p>
            </div>
          </motion.div>
          
          {/* Coluna da imagem - visível apenas em desktop */}
          <motion.div 
            className="hidden lg:block lg:w-2/5 xl:w-2/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative h-[450px] overflow-hidden">
              <motion.img 
                src={about}
                alt="Escritório Soave Advocacia" 
                className="w-full h-full object-cover object-center rounded-sm shadow-lg"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Imagem full-width para mobile - completamente fora do container */}
      <motion.div 
        className="lg:hidden w-full mt-0 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{
          width: '100vw',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          left: '50%',
          position: 'relative'
        }}
      >
        <div className="h-[400px] overflow-hidden">
          <motion.img 
            src={about}
            alt="Escritório Soave Advocacia" 
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default OfficeHistorySection;