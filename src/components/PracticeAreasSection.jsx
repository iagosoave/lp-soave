// components/PracticeAreasSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Scale, 
  HeartPulse, 
  Users, 
  Briefcase, 
  Clock, 
  Building2, 
  ShieldCheck 
} from 'lucide-react';

const PracticeAreasSection = () => {
  // Estado para controlar o card expandido/em foco
  const [activeCard, setActiveCard] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  
  // Detectar quando a seção estiver visível na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Efeito de scroll suave para os links de âncora
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.getElementById(href.substring(1));
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  const areas = [
    {
      id: 'civil',
      title: 'Contencioso Cível',
      icon: <Scale className="h-6 w-6" />,
      description: 'Com uma visão multidisciplinar nossa abordagem auxilia os clientes a gerenciar seus problemas de litígio mais críticos em vários setores abrangidos pelo direito civil.'
    },
    {
      id: 'medico',
      title: 'Direito Médico',
      icon: <HeartPulse className="h-6 w-6" />,
      description: 'Contamos com equipe especializada em Direito Médico para mediar questões jurídicas envolvendo a prática médica e serviços de saúde, defendendo os interesses de profissionais de saúde, pacientes e instituições.'
    },
    {
      id: 'familia',
      title: 'Família e Sucessões',
      icon: <Users className="h-6 w-6" />,
      description: 'Com ampla experiência em direito de família e sucessões, nosso escritório busca prestar serviços de alta qualidade para resolver conflitos existentes como divórcio, alimentos, inventário e partilha de bens.'
    },
    {
      id: 'trabalhista',
      title: 'Trabalhista',
      icon: <Briefcase className="h-6 w-6" />,
      description: 'Nossos advogados estão preparados para defender os interesses de clientes, principalmente nas defesas trabalhistas e ajuizamento de ações, fornecendo os melhores resultados na solução dos conflitos.'
    },
    {
      id: 'previdenciario',
      title: 'Previdenciário',
      icon: <Clock className="h-6 w-6" />,
      description: 'Nossa equipe oferece um serviço ao cliente prático e ágil no ambito previdenciário, buscando a implementação de benefícios dos mais variados tipos, além de auxílio e planejamento da aposentadoria.'
    },
    {
      id: 'tributario',
      title: 'Tributário',
      icon: <Building2 className="h-6 w-6" />,
      description: 'Prestamos serviços de assessoria tributária de forma a adequar os problemas decorrentes de impostos, taxas e tarifas às soluções mais viáveis economicamente e com menor impacto para nossos clientes.'
    },
    {
      id: 'preventiva',
      title: 'Assessoria Preventiva',
      icon: <ShieldCheck className="h-6 w-6" />,
      description: 'Possuímos recursos adequados e advogados qualificados na assessoria preventiva para lidar com transações substanciais e desenvolver planejamento jurídico-financeiro que evite demandas judiciais onerosas.'
    }
  ];

  // Variantes de animação para framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.3
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
    hidden: { y: -30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut"
      }
    }
  };

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: "4rem", 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  const staggerDelay = 0.1;

  // Animar partículas de fundo
  const particleCount = 12;
  const renderBackgroundParticles = () => {
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full bg-blue-200 opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      );
    }
    return particles;
  };

  return (
    <section 
      id="areas" 
      className="py-20 md:py-28 relative bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      ref={sectionRef}
    >
      {/* Elementos de design de fundo aprimorados */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-blue-50 to-transparent opacity-70"></div>
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-50 blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gray-100 blur-3xl opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-50/10 via-transparent to-gray-50/20"></div>
      
      {/* Partículas animadas para dar dinamismo ao fundo */}
      {renderBackgroundParticles()}
      
      {/* Linhas decorativas */}
      <motion.div 
        className="absolute top-40 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-30"
        animate={{ 
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-60 left-0 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-30"
        animate={{ 
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      ></motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título com animação aprimorada e melhor alinhamento */}
        <motion.div 
          className="text-center mb-24 flex flex-col items-center justify-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="relative inline-flex flex-col items-center"
            variants={titleVariants}
          >
            {/* Elementos decorativos ao redor do título - reposicionados para melhor alinhamento */}
            <motion.div 
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300"
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: 48, opacity: 1 } : { width: 0, opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            ></motion.div>
            
            <motion.div
              className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { 
                scale: [0, 1.2, 1],
                opacity: [0, 0.8, 0.2]
              } : {}}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <div className="w-full h-full rounded-full bg-blue-200 animate-ping opacity-30 duration-1000"></div>
            </motion.div>
            
            <motion.div
              className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { 
                scale: [0, 1.2, 1],
                opacity: [0, 0.8, 0.2]
              } : {}}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <div className="w-full h-full rounded-full bg-blue-200 animate-ping opacity-30 duration-800 delay-700"></div>
            </motion.div>
            
            {/* Título principal com texto centralizado e melhor posicionamento */}
            <motion.h2 
              className="text-3xl md:text-4xl font-light text-gray-900 tracking-wider text-center w-full"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { 
                y: 0, 
                opacity: 1,
                textShadow: ['0px 0px 0px rgba(0,0,0,0)', '0px 0px 8px rgba(59,130,246,0.2)', '0px 0px 0px rgba(0,0,0,0)']
              } : {}}
              transition={{ 
                duration: 1,
                textShadow: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            >
              ÁREAS DE ATUAÇÃO
            </motion.h2>
            
            {/* Subtítulo alinhado diretamente abaixo do título, no mesmo container */}
            <motion.span 
              className="text-xs text-blue-600 font-medium tracking-widest block mt-1 text-center"
              initial={{ opacity: 0, y: 5 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              EXPERTISE JURÍDICA
            </motion.span>
          </motion.div>
          
          {/* Linha decorativa animada - centralizada adequadamente */}
          <motion.div 
            className="h-px bg-gradient-to-r from-transparent via-blue-700 to-transparent mx-auto mt-8 w-16"
            variants={lineVariants}
            animate={isInView ? { 
              width: ["0%", "4rem", "4rem"],
              x: ["-1rem", "0rem", "0rem"]
            } : {}}
            transition={{ duration: 1, times: [0, 0.7, 1] }}
          ></motion.div>
        </motion.div>
        
        {/* Grid de cards com animações aprimoradas */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {areas.map((area, index) => (
            <motion.div 
              key={area.id}
              className={`group relative overflow-hidden rounded-lg transition-all duration-500 ease-in-out ${activeCard === area.id ? 'shadow-xl' : 'shadow-md hover:shadow-xl'} backdrop-blur-sm bg-white/95`}
              variants={itemVariants}
              custom={index}
              transition={{ delay: index * staggerDelay }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              onMouseEnter={() => setActiveCard(area.id)}
              onMouseLeave={() => setActiveCard(null)}
              id={area.id}
            >
              {/* Efeito de gradiente na borda superior */}
              <div 
                className={`h-1 w-full absolute top-0 left-0 right-0 transition-all duration-700 ease-in-out ${activeCard === area.id ? 'bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800' : 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200'}`}
              ></div>
              
              {/* Efeito de brilho ao passar o mouse */}
              <div 
                className={`absolute -inset-px bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 ${activeCard === area.id ? 'opacity-10' : 'group-hover:opacity-5'} transition-opacity duration-700 rounded-lg blur-md`}
              ></div>
              
              <div className="p-7 md:p-8 relative z-10">
                {/* Ícone animado com design aprimorado */}
                <div className="flex items-center mb-6">
                  <motion.div 
                    className={`relative w-16 h-16 rounded-xl flex items-center justify-center mr-5 transition-all duration-500 ease-in-out overflow-hidden ${activeCard === area.id ? 'bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 shadow-md' : 'bg-gray-50 text-gray-500 group-hover:bg-blue-50/80 group-hover:text-blue-500'}`}
                    whileHover={{ rotate: [0, -2, 2, 0], scale: 1.05 }}
                    animate={activeCard === area.id ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    {/* Elemento de decoração no ícone */}
                    <div className={`absolute inset-0 bg-gradient-to-tr from-blue-200/0 via-blue-400/10 to-transparent rounded-xl opacity-0 transition-opacity duration-500 ${activeCard === area.id ? 'opacity-100' : 'group-hover:opacity-40'}`}></div>
                    
                    {/* Efeito de brilho no ícone */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 rotate-12 rounded-xl"
                      animate={activeCard === area.id ? { 
                        x: ['-100%', '100%'],
                        opacity: [0, 0.4, 0] 
                      } : {}}
                      transition={{ 
                        duration: 1.5, 
                        ease: "easeInOut",
                        repeat: activeCard === area.id ? Infinity : 0,
                        repeatDelay: 3
                      }}
                    />
                    
                    <motion.div
                      className="relative z-10"
                      animate={activeCard === area.id ? { 
                        scale: [1, 1.15, 1],
                        rotate: [0, -3, 3, 0] 
                      } : {}}
                      transition={{ 
                        duration: 0.8, 
                        ease: "easeInOut"
                      }}
                    >
                      {area.icon}
                    </motion.div>
                    
                    {/* Círculo de efeito */}
                    <motion.div 
                      className="absolute -inset-1 border border-blue-200/70 rounded-xl opacity-0"
                      animate={activeCard === area.id ? { 
                        opacity: [0, 0.7, 0],
                        scale: [0.8, 1.2]
                      } : {}}
                      transition={{ 
                        duration: 2, 
                        ease: "easeOut",
                        repeat: activeCard === area.id ? Infinity : 0,
                        repeatDelay: 1
                      }}
                    />
                  </motion.div>
                  
                  <div>
                    <motion.h3 
                      className={`text-lg md:text-xl font-medium transition-colors duration-300 tracking-wide ${activeCard === area.id ? 'text-blue-800' : 'text-gray-900 group-hover:text-blue-700'}`}
                      animate={activeCard === area.id ? { 
                        x: [0, 5, 0],
                        textShadow: ['0px 0px 0px rgba(0,0,0,0)', '0px 0px 4px rgba(59,130,246,0.3)', '0px 0px 0px rgba(0,0,0,0)']
                      } : {}}
                      transition={{ duration: 0.7 }}
                    >
                      {area.title}
                    </motion.h3>
                    <motion.div 
                      className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full mt-1.5"
                      initial={{ width: 0, opacity: 0 }}
                      animate={activeCard === area.id 
                        ? { width: "100%", opacity: 1 } 
                        : { width: "0%", opacity: 0, transition: { duration: 0.3 } }
                      }
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                </div>
                
                {/* Descrição com animações aprimoradas */}
                <div 
                  className={`relative overflow-hidden transition-all duration-700 ease-in-out ${activeCard === area.id ? 'max-h-60 translate-y-0' : 'max-h-36 group-hover:max-h-40'}`}
                >
                  <motion.div
                    initial={false}
                    animate={activeCard === area.id ? { 
                      y: [5, 0],
                      opacity: [0.9, 1]
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <p className={`text-sm leading-relaxed ${activeCard === area.id ? 'text-gray-700' : 'text-gray-600'}`}>
                      {area.description}
                    </p>
                    
                    {/* Elemento visual para destacar pontos-chave */}
                    <div className={`mt-3 transition-all duration-700 ease-in-out ${activeCard === area.id ? 'opacity-100' : 'opacity-0 hidden'}`}>
                      <div className="flex items-center space-x-2">
                        <motion.div 
                          className="h-1 w-1 rounded-full bg-blue-500"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        />
                        <span className="text-xs text-blue-700 font-medium">Expertise especializada</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Efeito de gradiente no final do texto quando em hover */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/95 to-transparent transition-opacity duration-500 ${activeCard === area.id ? 'opacity-0' : 'opacity-100'}`}
                  ></div>
                </div>
                
                {/* Indicador visual interativo */}
                <div className="mt-4 flex justify-end items-center">
                  <motion.div 
                    className={`h-1 w-0 bg-blue-500 rounded-full transition-all duration-700 ease-in-out ${activeCard === area.id ? 'w-1/4' : 'group-hover:w-1/6'}`}
                    animate={activeCard === area.id ? { width: ["0%", "25%"] } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </div>
              
              {/* Efeito de reflexo ao passar o mouse */}
              <div 
                className={`absolute top-0 left-0 right-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out opacity-0 ${activeCard === area.id ? 'opacity-30' : 'group-hover:opacity-20'}`}
              ></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Elemento decorativo final */}
        <motion.div 
          className="mt-20 md:mt-24 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div 
            className="h-0.5 w-4 bg-blue-400 mx-1 rounded-full"
            animate={{ width: [4, 16, 4] }}
            transition={{ 
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          ></motion.div>
          <motion.div 
            className="h-0.5 w-8 bg-blue-600 mx-1 rounded-full"
            animate={{ width: [8, 32, 8] }}
            transition={{ 
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.2
            }}
          ></motion.div>
          <motion.div 
            className="h-0.5 w-4 bg-blue-400 mx-1 rounded-full"
            animate={{ width: [4, 16, 4] }}
            transition={{ 
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.4
            }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;