// components/HistoriaSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Landmark, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import carlos from './carlos.png';
import carlos2 from './carlos2.jpg';

const HistoriaSection = () => {
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  
  // Array com as imagens do carrossel
  const carouselImages = [
    {
      src: carlos,
      alt: "Escritório Soave Advogados - Fachada",
  
    },
    {
      src: carlos2,
      alt: "Escritório Soave Advogados - Equipe",
     
    }
  ];
  
  // Detectar se é dispositivo móvel
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Verificação inicial
    checkIfMobile();
    
    // Atualizar ao redimensionar a janela
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  // Detectar quando a seção estiver visível na tela
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

  // Auto-play do carrossel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(timer);
  }, [carouselImages.length]);

  // Navegar para slide anterior
  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  // Navegar para próximo slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  // Variantes de animação
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

  // Variantes para o carrossel
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const slideTransition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 }
  };

  return (
    <section 
      id="historia" 
      className="py-16 md:py-24 relative bg-white overflow-hidden"
      ref={sectionRef}
    >
      {/* Elemento de design de fundo sutil */}
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
        {/* Título com animação simplificada */}
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
            {/* Elemento decorativo simples */}
            <motion.div 
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#55595c]"
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: 48, opacity: 1 } : { width: 0, opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            ></motion.div>
            
            {/* Título principal */}
            <motion.h2 
              className="text-3xl md:text-4xl font-light text-gray-900 tracking-wider text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { 
                y: 0, 
                opacity: 1,
                textShadow: isMobile ? undefined : [
                  '0px 0px 0px rgba(0,0,0,0)', 
                  '0px 0px 2px rgba(85,89,92,0.1)', 
                  '0px 0px 0px rgba(0,0,0,0)'
                ]
              } : {}}
              transition={{ 
                duration: 0.6,
                textShadow: !isMobile ? {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                } : undefined
              }}
            >
              NOSSA HISTÓRIA
            </motion.h2>
            
            {/* Subtítulo */}
            <motion.span 
              className="text-xs text-[#55595c] font-medium tracking-widest block mt-1 text-center"
              initial={{ opacity: 0, y: 5 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              TRADIÇÃO & EXCELÊNCIA
            </motion.span>
          </motion.div>
          
          {/* Linha decorativa simples */}
          <motion.div 
            className="h-px bg-[#55595c] mx-auto mt-6 w-16"
            variants={lineVariants}
          ></motion.div>
        </motion.div>
        
        {/* Conteúdo principal com layout minimalista */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Coluna do carrossel */}
          <motion.div 
            className="order-2 lg:order-1"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Container do carrossel */}
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                {/* Borda elegante */}
                <div className="absolute inset-0 border border-gray-200 rounded-lg z-10"></div>
                
                {/* Efeito sutil no canto */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#55595c]/5 to-transparent z-10"></div>
                
                {/* Carrossel de imagens */}
                <div className="relative w-full h-[500px] overflow-hidden bg-gray-50">
                  <AnimatePresence mode="wait" custom={currentSlide}>
                    <motion.img
                      key={currentSlide}
                      src={carouselImages[currentSlide].src}
                      alt={carouselImages[currentSlide].alt}
                      className="absolute inset-0 w-full h-full object-contain"
                      custom={currentSlide}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={slideTransition}
                    />
                  </AnimatePresence>
                  
                  {/* Overlay para melhor contraste dos controles */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-5"></div>
                </div>
                
                {/* Controles do carrossel */}
                <div className="absolute inset-0 flex items-center justify-between p-4 z-20">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-white/80 hover:bg-white text-[#55595c] 
                             shadow-md hover:shadow-lg transition-all duration-200 
                             backdrop-blur-sm border border-white/20"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-white/80 hover:bg-white text-[#55595c] 
                             shadow-md hover:shadow-lg transition-all duration-200 
                             backdrop-blur-sm border border-white/20"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Indicadores (dots) */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentSlide 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Caption da imagem atual */}
                {carouselImages[currentSlide].caption && (
                  <div className="absolute bottom-4 right-4 flex items-center justify-center z-20">
                    <div className="bg-white/90 shadow-sm px-3 py-1.5 rounded-md text-xs font-medium text-[#55595c] flex items-center">
                      <Landmark className="h-3.5 w-3.5 mr-1.5" />
                      <span>{carouselImages[currentSlide].caption}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
          
          {/* Coluna do texto - design minimalista */}
          <motion.div 
            className="order-1 lg:order-2"
            variants={itemVariants}
          >
            <div className="relative p-2 md:p-4">
              {/* Ícone de direito aprimorado */}
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 text-[#55595c] mr-4 shadow-sm border border-gray-100">
                  <Scale className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-medium text-[#55595c] tracking-wide">Nossa Trajetória</h3>
                  <div className="h-0.5 bg-gradient-to-r from-[#55595c] to-transparent w-20 mt-1"></div>
                </div>
              </div>
              
              {/* Texto principal com estilo aprimorado */}
              <motion.div
                className="prose prose-gray max-w-none"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <p className="text-gray-700 leading-relaxed mb-6">
                  Soave Advogados Associados é um competente e respeitado escritório de advocacia localizado em Sorocaba, com mais de 40 anos de excelência em diversas áreas do direito. Fundado pelos Drs. Sérgio e Carlos Soave (in memorian), o escritório inovrou na resolução de conflitos, inspirando colegas e familiares.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Com a integração dos advogados Dra. Renata Latuf Soave e Dr. Caio Soave, a atuação se expandiu em resposta às necessidades e especializações do ordenamento jurídico.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Elemento decorativo minimalista na parte inferior */}
        {!isMobile && (
          <motion.div 
            className="mt-16 flex justify-center items-center"
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