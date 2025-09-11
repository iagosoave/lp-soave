// components/HistoriaSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Import images
import carlos from './carlos.png';
import sergio from './Sergio.jpeg';
import renata from './renata.jpeg';
import caio from './caio.png';
import caio_renata from './caio_renata.jpeg';

const teamMembers = [
  {
    name: "Dr. Carlos Soave",
    title: "Fundador (in memorian)",
    image: carlos,
    description: ""
  },
  {
    name: "Dr. Sérgio Soave",
    title: "Fundador (in memorian)",
    image: sergio,
    description: ""
  },
  {
    name: "Dra. Renata Latuf Soave",
    title: "Sócia-proprietária",
    image: renata,
    description: ""
  },
  {
    name: "Dr. Caio Soave",
    title: "Sócio-proprietário",
    image: caio,
    description: ""
  },
];

const HistoriaSection = () => {
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: isMobile ? 0.1 : 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isMobile]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "4rem",
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section
      id="historia"
      className="py-16 md:py-24 relative bg-white overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gray-50 to-transparent opacity-50"></div>

      {!isMobile && (
        <>
          <div className="absolute top-1/3 right-10 w-64 h-64 rounded-full bg-gray-100 blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 left-10 w-40 h-40 rounded-full bg-gray-100 blur-3xl opacity-20"></div>
          <motion.div
            className="absolute top-1/2 left-0 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-30"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16 flex flex-col items-center justify-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="relative inline-flex flex-col items-center"
            variants={titleVariants}
          >
            <motion.div
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#55595c]"
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: 48, opacity: 1 } : { width: 0, opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            ></motion.div>

            <motion.h2
              className="text-3xl md:text-4xl font-light text-gray-900 tracking-wider text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? {
                y: 0,
                opacity: 1,
              } : {}}
              transition={{ duration: 0.6 }}
            >
              NOSSA HISTÓRIA
            </motion.h2>

            <motion.span
              className="text-xs text-[#55595c] font-medium tracking-widest block mt-1 text-center"
              initial={{ opacity: 0, y: 5 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              TRADIÇÃO & EXCELÊNCIA
            </motion.span>
          </motion.div>

          <motion.div
            className="h-px bg-[#55595c] mx-auto mt-6 w-16"
            variants={lineVariants}
          ></motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Coluna da imagem caio_renata - SEM ANIMAÇÃO */}
          <motion.div
            className="order-2 lg:order-1 relative"
            variants={itemVariants}
          >
            <div className="absolute inset-0 border border-gray-300 z-10"></div>
            <img
              src={caio_renata}
              alt="Dra. Renata Latuf Soave e Dr. Caio Soave"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Coluna do texto */}
          <motion.div
            className="order-1 lg:order-2"
            variants={itemVariants}
          >
            <div className="relative p-2">
              <div className="flex items-center mb-6">
                
                <div className="flex flex-col">
                  <h3 className="text-xl font-medium text-[#55595c] tracking-wide">Nossa Trajetória</h3>
                  <div className="h-0.5 bg-gradient-to-r from-[#55595c] to-transparent w-20 mt-1"></div>
                </div>
              </div>

              <motion.div
                className="prose prose-gray max-w-none"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                  Soave Advogados Associados é um escritório de advocacia localizado em Sorocaba, com mais de 40 anos de história. Fundado pelos Drs. Sérgio e Carlos Soave (in memorian), o escritório consolidou uma reputação de excelência e compromisso com a justiça.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Hoje sob a direção dos advogados Dra. Renata Latuf Soave e Dr. Caio Soave, o escritório dá continuidade ao legado, expandindo sua atuação para novas áreas em resposta às contínuas transformações do direito.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- Seção NOSSOS ADVOGADOS --- */}
        <motion.div
          className="text-center mb-12 flex flex-col items-center justify-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-light text-gray-900 tracking-wider mb-4"
            variants={titleVariants}
          >
            NOSSOS ADVOGADOS
          </motion.h3>
          <motion.div
            className="h-px bg-[#55595c] mx-auto mt-2 w-16"
            variants={lineVariants}
          ></motion.div>
        </motion.div>
        
        {/* --- CARDS MINIMALISTAS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              {/* Container da Imagem com Aspect Ratio Fixo */}
              <div className="relative w-full aspect-[3/4] bg-gray-50 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Conteúdo do Card - Minimalista */}
              <div className="p-5">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-sm text-[#55595c] font-medium">
                  {member.title}
                </p>
                {member.description && (
                  <>
                    <div className="w-8 h-px bg-gray-300 my-3"></div>
                    <p className="text-sm text-gray-600">
                      {member.description}
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {!isMobile && (
          <motion.div
            className="mt-24 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent via-[#55595c] to-transparent opacity-30"></div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HistoriaSection;