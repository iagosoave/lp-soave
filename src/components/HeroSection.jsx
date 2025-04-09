import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import bannerVideo from './banner.webm';

const HeroSection = () => {
  // State and refs
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const inView = useInView(sectionRef);
  const controls = useAnimation();
  
  // Framer Motion scroll animations
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const backgroundScale = useTransform(scrollY, [0, 500], [1, 1.05]);
  const backgroundBrightness = useTransform(scrollY, [0, 300], [1, 0.7]);
  const parallaxY = useTransform(scrollY, [0, 500], [0, -100]);
  const radialGradientX = useTransform(scrollY, [0, 300], ['50%', '60%']);
  const radialGradientY = useTransform(scrollY, [0, 300], ['30%', '35%']);
  const wavePathD = useTransform(
    scrollY,
    [0, 300],
    [
      "M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,261.3C672,277,768,267,864,234.7C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
      "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,240C672,256,768,256,864,229.3C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ]
  );
  
  // Scroll to next section function
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Check for mobile device
  useEffect(() => {
    // Function to check if device is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Listen for resize events
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  // Trigger animations when in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  // Video loading and optimization - with fallback for mobile
  useEffect(() => {
    // Always show section content after a short delay (even if video doesn't load)
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 1000);
    
    if (videoRef.current) {
      // Handle video loaded
      videoRef.current.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
        clearTimeout(timer); // Clear timeout if video loads properly
      });
      
      // Error handling for video
      videoRef.current.addEventListener('error', () => {
        console.log("Video failed to load, using fallback");
        setIsVideoLoaded(true);
        clearTimeout(timer);
      });
      
      // Playback rate adjustment (slower on mobile for performance)
      videoRef.current.playbackRate = isMobile ? 0.4 : 0.6;
      
      // Intersection Observer for video play/pause optimization
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Only auto-play on non-mobile or when not in data-saving mode
            if (!isMobile || !navigator.connection || 
                !['slow-2g', '2g', '3g'].includes(navigator.connection?.effectiveType)) {
              videoRef.current.play().catch(() => {
                // Silent catch - some browsers require user interaction first
                console.log("Autoplay prevented");
              });
            }
          } else {
            videoRef.current?.pause();
          }
        },
        { threshold: 0.1 }
      );
      
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
      
      // Clean up observer and timer
      return () => {
        observer.disconnect();
        clearTimeout(timer);
      };
    }
    
    return () => clearTimeout(timer);
  }, [isMobile]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  const accentBarVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4
      }
    }
  };
  
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  };
  
  // Arrow animation
  const arrowAnimation = {
    y: [0, 10, 0],
    opacity: [0.7, 1, 0.7],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 2,
      ease: "easeInOut"
    }
  };

  // Mobile-optimized conditional rendering
  const renderVideoOrFallback = () => {
    // For mobile or slow connections, use a simpler background
    if (isMobile || (typeof navigator !== 'undefined' && 
        navigator.connection && 
        ['slow-2g', '2g'].includes(navigator.connection.effectiveType))) {
      return (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      );
    }
    
    return (
      <motion.video
        ref={videoRef}
        className="w-full h-full object-cover object-center"
        autoPlay
        loop
        muted
        playsInline
        style={{ 
          filter: `brightness(${backgroundBrightness.get()})`,
        }}
      >
        <source src={bannerVideo} type="video/webm" />
        {/* Fallback for browsers that don't support webm */}
        <p>Your browser doesn't support HTML5 video.</p>
      </motion.video>
    );
  };

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden transition-opacity duration-700"
      style={{ opacity: 1 }} // Force opacity to be visible always
    >
      {/* Background with video/gradient overlay */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay */}
        <motion.div 
          className="absolute inset-0 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            background: `linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.85) 50%, rgba(0, 0, 0, 0.75) 100%)`
          }}
        />
        
        {/* Dynamic radial highlight using Framer Motion */}
        <motion.div 
          className="absolute inset-0 z-10 opacity-20"
          style={{
            background: `radial-gradient(circle at ${radialGradientX} ${radialGradientY}, rgba(37, 99, 235, 0.2) 0%, transparent 70%)`
          }}
        />
        
        {/* Subtle grain texture for added depth */}
        <motion.div 
          className="absolute inset-0 z-10 opacity-5 mix-blend-overlay pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1.5 }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
        
        {/* Background video with Framer Motion parallax effect */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          style={{ 
            y: backgroundY, 
            scale: backgroundScale
          }}
        >
          {renderVideoOrFallback()}
        </motion.div>
      </div>
      
      {/* Main content with Framer Motion animations */}
      <motion.div 
        className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white"
        style={{ y: parallaxY }}
      >
        <motion.div 
          className="max-w-xl md:max-w-3xl pt-20 md:pt-0 sm:pt-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Accent bar */}
          <motion.div 
            className="w-20 h-0.5 bg-gradient-to-r from-blue-300 to-blue-500 mb-8 rounded-full opacity-80"
            variants={accentBarVariants}
            style={{ transformOrigin: 'left' }}
          />
        
          {/* Typography section */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 md:mb-8"
            variants={containerVariants}
          >
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100 font-normal block mb-2"
              variants={itemVariants}
              style={{ 
                WebkitBackgroundClip: 'text'
              }}
            >
              Advocacia especializada
            </motion.span>
            <motion.span className="block drop-shadow-md relative" variants={itemVariants}>
              em direito civil e empresarial
              <motion.span 
                className="absolute -bottom-3 left-0 w-24 h-px bg-gradient-to-r from-blue-300/30 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl font-light mb-10 md:mb-12 text-gray-200 max-w-2xl"
            variants={itemVariants}
          >
            Mais de <span className="relative inline-block">
              <motion.span 
                className="text-blue-300 font-medium"
                whileHover={{ 
                  color: '#93c5fd'
                }}
              >40 anos</motion.span>
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-blue-300/50 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                style={{ transformOrigin: 'left' }}
              />
            </span> de tradição e excelência jurídica em Sorocaba e região.
          </motion.p>
          
          {/* CTA buttons optimized for mobile */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-5 mb-10 sm:mb-14"
            variants={containerVariants}
          >
            {/* Primary CTA - WhatsApp */}
            <motion.a
              href="#contact"
              className="group relative z-10 inline-flex items-center justify-center px-8 py-4 text-white text-base font-medium rounded-sm overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
              }}
            >
              {/* Button glow effect */}
              <motion.span 
                className="absolute -inset-1 bg-blue-400/20 blur-xl rounded-full opacity-0"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 0.5, scale: 1 }}
                transition={{ duration: 0.4 }}
              />
              
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                viewBox="0 0 448 512" 
                fill="currentColor"
                whileHover={{ scale: 1.1 }}
              >
                {/* WhatsApp icon */}
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </motion.svg>
              <span className="relative z-10 inline-flex items-center">
                WhatsApp
                <motion.span 
                  className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-white/80"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1] 
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity
                  }}
                />
              </span>
            </motion.a>
            
            {/* Secondary CTA - Services */}
            <motion.a
              href="#services"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-white bg-transparent backdrop-blur-sm text-base font-medium rounded-sm border border-white/10 overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                borderColor: 'rgba(59, 130, 246, 0.5)'
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(37, 99, 235, 0.1) 100%)'
              }}
            >
              {/* Edge highlight effects */}
              <motion.span 
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.span 
                  className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ 
                    x: '100%',
                    transition: { duration: 1.5, repeat: Infinity } 
                  }}
                />
                <motion.span 
                  className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"
                  initial={{ x: '100%' }}
                  whileHover={{ 
                    x: '-100%',
                    transition: { duration: 1.5, repeat: Infinity } 
                  }}
                />
              </motion.span>
              
              <span className="relative z-10">Nossos serviços</span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </motion.svg>
            </motion.a>
          </motion.div>
          
          {/* Credential indicators - hidden on mobile */}
          <motion.div 
            className="hidden md:flex items-center space-x-10 text-sm text-gray-200"
            variants={fadeInVariants}
          >
            <motion.div 
              className="group flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-blue-300 mr-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
                whileHover={{ color: '#93c5fd' }}
              >
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </motion.svg>
              <span>OAB Certificada</span>
            </motion.div>
            
            <motion.div 
              className="group flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-blue-300 mr-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
                whileHover={{ color: '#93c5fd' }}
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </motion.svg>
              <span className="whitespace-nowrap">
                +1500 Clientes Atendidos
              </span>
            </motion.div>
            
            <motion.div 
              className="group flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-blue-300 mr-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
                whileHover={{ color: '#93c5fd' }}
              >
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </motion.svg>
              <span className="whitespace-nowrap">
                Atendimento Especializado
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Animated wave overlay - responsive and optimized */}
      <AnimatePresence>
        <motion.div 
          className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none h-24 sm:h-32 md:h-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <motion.path
              fill="#ffffff"
              fillOpacity="1"
              d={wavePathD}
            />
          </svg>
        </motion.div>
      </AnimatePresence>
      
      {/* Static arrow indicator, responsive for all devices */}
      <AnimatePresence>
        {inView && (
          <motion.button
            onClick={scrollToNextSection}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 text-white/80 hover:text-white bg-transparent border-none cursor-pointer outline-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.2 }}
            aria-label="Rolar para baixo"
          >
            <ChevronDown 
              className="w-8 h-8 md:w-10 md:h-10"
              strokeWidth={1.5}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;