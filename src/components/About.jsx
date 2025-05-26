"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, slideIn, textVariant } from '../motion';

const About = () => {
  const informations = [
    {
      title: "Introduction",
      content: "Hello, I'm Oussama—a passionate Full Stack Developer and AI enthusiast. My journey in technology is driven by curiosity and a desire to create impactful solutions. I thrive in the dynamic intersection of web development and data science, constantly pushing the boundaries of what's possible. From building interactive web applications to deploying machine learning models, I enjoy the challenge of transforming complex problems into elegant solutions that deliver real value. My approach combines technical expertise with creative thinking, ensuring that every project I undertake is both functionally robust and user-friendly.",
    },
    {
      title: "Technical Expertise",
      content: "My technical toolkit spans multiple domains: On the web development front, I specialize in React, Node.js, and modern JavaScript frameworks for creating responsive, dynamic applications. In the mobile realm, I leverage Flutter to build cross-platform solutions with native-like performance. What truly excites me is my growing expertise in AI and data science—from implementing deep learning models with TensorFlow and PyTorch to developing data analysis pipelines that extract actionable insights. I'm particularly interested in the practical applications of computer vision and natural language processing, areas where I've been developing specialized knowledge.",
    },
    {
      title: "Professional Journey",
      content: "My academic foundation began with a Baccalaureate in Mathematics (17.86/20), which led me to the Higher National School of Computer Science. There, I cultivated strong algorithmic thinking and computer architecture knowledge. Beyond academics, I've embraced self-directed learning in web development, AI, and data science. This parallel path has equipped me with practical skills in designing and implementing both front-end interfaces and back-end systems. My experience extends to data analysis and machine learning projects, where I've developed predictive models and interactive data visualizations that bridge the gap between complex information and accessible insights.",
    },
    {
      title: "Services",
      content: "I offer comprehensive technical solutions across several domains: Full stack web development with React, Next.js, and Node.js—delivering seamless, responsive applications tailored to specific business needs. Cross-platform mobile development using Flutter—creating consistent experiences across iOS and Android. Data science and AI solutions—from data cleaning and analysis to implementing machine learning models for prediction, classification, or recommendation systems. My services include end-to-end project management, from requirement analysis and architecture design to development, testing, and deployment, always ensuring high-quality deliverables that exceed expectations.",
    },
    {
      title: "Open to Opportunities",
      content: "I'm actively seeking collaborative opportunities where I can apply my unique combination of development and data science skills. Whether it's building innovative web applications, developing AI-powered features, or creating data visualization tools, I'm eager to contribute to projects that push technological boundaries. I value environments that foster learning and creativity, where I can continue to grow as a professional while delivering significant value. My commitment to deadlines, attention to detail, and passion for quality make me a reliable team member. If you're looking for someone who brings both technical expertise and fresh perspectives, I'd be excited to discuss how we can work together.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (currentIndex < informations.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const previous = () => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(currentIndex - 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  // Auto progress through cards (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < informations.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 15000); // Change card every 15 seconds

    return () => clearInterval(interval);
  }, [currentIndex, informations.length]);

  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  // Progress indicator
  const ProgressIndicator = () => (
    <div className="flex justify-center space-x-2 mt-4">
      {informations.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentIndex === index 
              ? "w-6" 
              : "hover:bg-gray-400"
          }`}
          style={{
            backgroundColor: currentIndex === index ? '#7127BA' : '#374151'
          }}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex justify-center items-center lg:pt-12 mb-20"
      id="about"
      style={{ backgroundColor: '#11071f' }}
    >
      <div className="w-[95%] sm:w-[85%] lg:w-[80%] flex flex-col justify-center items-center">
        <motion.h2
          variants={textVariant(0.5)}
          className="mt-10 text-sm md:text-md text-center font-medium text-white"
        >
          Get to know
        </motion.h2>
        <motion.h1
          variants={textVariant(0.5)}
          className="mb-6 md:mb-10 text-2xl md:text-3xl text-center font-bold"
          style={{ color: '#7127BA' }}
        >
          About Me
        </motion.h1>
        
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="min-h-[60vh] md:min-h-[50vh] w-full flex justify-center items-center"
        >
          <div className="w-full relative overflow-hidden rounded-lg shadow-md"
               style={{ 
                 backgroundColor: '#1a0f2e',
                 border: '2px solid #7127BA'
               }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="px-4 py-6 md:px-8 md:py-8"
              >
                <h3 className="text-xl md:text-2xl font-bold text-center mb-4"
                    style={{ color: '#7127BA' }}>
                  {informations[currentIndex].title}
                </h3>
                
                <div className="prose max-w-none">
                  <p className="text-sm md:text-base text-center md:text-left leading-relaxed text-white">
                    {informations[currentIndex].content}
                  </p>
                </div>
                
                {/* Card number indicator */}
                <div className="absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-medium"
                     style={{ 
                       backgroundColor: 'rgba(113, 39, 186, 0.1)',
                       color: '#7127BA'
                     }}>
                  {currentIndex + 1}/{informations.length}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
        
        {/* Progress indicator */}
        <ProgressIndicator />
        
        {/* Navigation buttons */}
        <div className="w-[75%] md:w-[60%] flex flex-row items-center justify-between md:justify-evenly mt-6">
          <button
            onClick={previous}
            className={`px-3 md:px-4 py-2 w-24 md:w-32 rounded-md transition-all duration-300 flex items-center justify-center ${
              currentIndex === 0 ? "opacity-70" : "hover:opacity-90"
            }`}
            style={{
              backgroundColor: currentIndex === 0 ? '#374151' : '#7127BA',
              color: 'white'
            }}
            disabled={currentIndex === 0 || isAnimating}
            aria-label="Previous slide"
          >
            <span className="mr-1">←</span> Previous
          </button>
          
          <button
            onClick={next}
            className={`px-3 md:px-4 py-2 w-24 md:w-32 rounded-md transition-all duration-300 flex items-center justify-center ${
              currentIndex === informations.length - 1 ? "opacity-70" : "hover:opacity-90"
            }`}
            style={{
              backgroundColor: currentIndex === informations.length - 1 ? '#374151' : '#7127BA',
              color: 'white'
            }}
            disabled={currentIndex === informations.length - 1 || isAnimating}
            aria-label="Next slide"
          >
            Next <span className="ml-1">→</span>
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default About;