import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import about from './about.png';

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
      width: 60,
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
    <div id="about" className="bg-white w-full pt-12 pb-0 md:pt-14" 
      style={{ 
        marginTop: '-1px',
        position: 'relative',
        zIndex: 20
      }}>
      {/* Elemento para forçar fundo branco */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-white" style={{ marginTop: '-12px' }}></div>
      
      {/* Seção de texto */}
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {/* Título com linha abaixo */}
        <div className="mb-8 text-center">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-[#55595c] mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            ESCRITÓRIO:
          </motion.h2>
          
          <motion.div 
            className="h-[2px] bg-[#55595c] mx-auto"
            initial="hidden"
            animate="visible"
            variants={lineAnimate}
            style={{ maxWidth: "60px" }}
          />
        </div>
        
        {/* Layout desktop é de duas colunas, mobile é empilhado */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10 xl:gap-14">
          {/* Coluna de texto */}
          <motion.div 
            className="lg:w-3/5 xl:w-3/5 pb-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="prose prose-md max-w-none text-[#55595c]">
              <motion.p 
                className="mb-6 text-[15px] md:text-[17px] leading-relaxed md:leading-[1.7] text-justify"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                Soave Advogados é um escritório <span className="font-medium">full service</span> com mais de 40 anos de experiência dedicado à defesa dos interesses de clientes como empresas, pessoas físicas, famílias, governos e organizações sem fins lucrativos. Fundado pelos Drs. Sérgio e Carlos Soave (in memoriam), o escritório consolidou ao longo de sua trajetória uma reputação marcada pela seriedade, ética e compromisso com a justiça.
              </motion.p>
              <motion.p 
                className="text-[15px] md:text-[17px] leading-relaxed md:leading-[1.7] text-justify"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                Atualmente sob a direção da Dra. Renata Latuf Soave e do Dr. Caio Soave, o escritório dá continuidade ao legado construído, expandindo sua atuação para novas áreas em resposta às transformações constantes do direito e da sociedade. Nossa abordagem inovadora combina <span className="font-medium">sólida expertise técnica</span> e visão prática do mercado, permitindo identificar com precisão as necessidades jurídicas de cada cliente e oferecer soluções personalizadas.
              </motion.p>
            </div>
          </motion.div>
          
          {/* Coluna da imagem - visível apenas em desktop */}
          <motion.div 
            // ALTERAÇÃO AQUI: Adicionado mt-12 para empurrar a imagem para baixo
            className="hidden lg:block lg:w-2/5 xl:w-2/5 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative"> 
              <motion.img 
                src={about}
                alt="Escritório Soave Advocacia" 
                className="max-w-full h-auto block" 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Imagem full-width para mobile - grudada no final da seção */}
      <motion.div 
        // ALTERAÇÃO AQUI: Trocado mt-0 por mt-8 para criar espaço acima da imagem no mobile
        className="lg:hidden w-full mt-8 relative"
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
        <div className="relative">
          <motion.img 
            src={about}
            alt="Escritório Soave Advocacia" 
            className="max-w-full h-auto block" 
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