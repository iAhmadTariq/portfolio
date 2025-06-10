
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <section
      className="overflow-hidden relative bg-white bg-cover isolate min-h-screen" // added min-h-screen
      id="hero"
      style={{
        backgroundImage: 'url("/Header-background.webp")',
        backgroundPosition: 'center 30%',
        padding: isMobile ? '100px 12px 40px' : '120px 20px 60px'
      }}
    >
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-2/3">
            <div 
              className="pulse-chip mb-3 sm:mb-6 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">👋</span>
              <span>Hello, I'm</span>
            </div>
            
            <h1 
              className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.3s" }}
            >
              Ahmad Tariq
            </h1>
            
            <h2 
              className="text-xl sm:text-2xl lg:text-3xl text-pulse-500 font-semibold mt-2 mb-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.4s" }}
            >
              Mobile Application Developer - Flutter
            </h2>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-950 font-normal text-base sm:text-lg text-left"
            >
              Flutter Developer with proven expertise in building scalable, feature-rich applications. Proficient in state management, backend integrations, and delivering clean, industry-standard solutions across diverse domains.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.7s" }}
            >
              <a 
                href="#contact" 
                className="flex items-center justify-center group w-full sm:w-auto text-center" 
                style={{
                  backgroundColor: '#FE5C02',
                  borderRadius: '1440px',
                  boxSizing: 'border-box',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  fontSize: '14px',
                  lineHeight: '20px',
                  padding: '16px 24px',
                  border: '1px solid white',
                }}
              >
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#projects" 
                className="button-secondary w-full sm:w-auto text-center"
              >
                View My Work
              </a>
            </div>

            {/* Contact Info */}
            <div 
              className="flex flex-wrap gap-4 mt-6 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.9s" }}
            >
              <a href="tel:+923204846384" className="flex items-center gap-2 text-gray-600 hover:text-pulse-500 transition-colors">
                <Phone size={16} />
                <span className="text-sm">+92 320 484 6384</span>
              </a>
              <a href="mailto:dev.ahmadtariq@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-pulse-500 transition-colors">
                <Mail size={16} />
                <span className="text-sm">dev.ahmadtariq@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/ahmad-tariq-/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-pulse-500 transition-colors">
                <Linkedin size={16} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a href="https://github.com/iAhmadTariq" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-pulse-500 transition-colors">
                <Github size={16} />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
          <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[23rem] lg:h-[23rem] mx-auto rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 shadow-lg p-0">
            <img
              src="/profile.png"
              alt="Ahmad Tariq"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
