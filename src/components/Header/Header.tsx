"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home">
    <header className="min-h-screen relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-[#fbfbfe] z-0"></div>
      <div className="absolute inset-0 bg-[url('/mesh-pattern.png')] opacity-5 z-0"></div>
      
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2f27ce] via-[#433bff] to-[#2f27ce]"></div>
      
      {/* Pattern container - positioned to avoid text content */}
      <div className="absolute top-0 bottom-0 right-0 w-[40%] sm:w-[35%] md:w-[45%] lg:w-[40%] pointer-events-none z-1 overflow-hidden">
        {/* Responsive geometric pattern elements - right side */}
        <div className="absolute top-[10vh] right-[5vw] w-[50%] md:w-[40%] lg:w-[30%] h-[25vh] bg-[#433bff] rounded-lg opacity-90"></div>
        
        <div className="absolute hidden sm:block top-[8vh] right-[calc(5vw+22%)] w-[30%] md:w-[25%] lg:w-[20%] h-[12vh] bg-[#dedcff] rounded-lg opacity-60"></div>
        
        <div className="absolute top-[40vh] right-[12vw] w-[38%] md:w-[30%] lg:w-[25%] h-[12vh] bg-[#050315] rounded-lg opacity-80"></div>
        
        <div className="absolute hidden sm:block top-[25vh] right-[20vw] w-[45%] md:w-[38%] lg:w-[30%] h-[18vh] bg-[#dedcff] rounded-lg opacity-40"></div>
        
        <div className="absolute hidden md:block top-[55vh] right-[15vw] w-[42%] lg:w-[35%] h-[8vh] bg-[#2f27ce] rounded-lg opacity-70"></div>
        
        <div className="absolute hidden md:block top-[65vh] right-[5vw] w-[30%] h-[8vh] bg-[#dedcff] rounded-lg opacity-40"></div>
        
        <div className="absolute bottom-[12vh] right-[10vw] w-[40%] lg:w-[35%] h-[12vh] bg-[#433bff] rounded-lg opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 flex flex-col justify-center items-start h-screen relative z-10">
        <div className="max-w-3xl mr-auto ml-0 md:ml-12 bg-[#fbfbfe]/70 backdrop-blur-sm p-6">
          {/* Subtle label */}
          <div className="inline-block mb-8 pl-3 border-l-2 border-[#433bff]">
            <span className="text-[#2f27ce] font-medium tracking-wide text-sm">WEB & MOBILE DEVELOPER</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#050315] leading-tight">
            I'm KBOY<span className="text-[#433bff]">.</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl mb-10 text-[#050315]/80 leading-relaxed max-w-2xl">
            Crafting elegant digital experiences through clean code and thoughtful design.
          </h2>
          
          <div className="flex flex-wrap gap-5 mt-4">
            <Link 
              href="#projects"
              className="group relative px-7 py-3 overflow-hidden font-medium text-white"
            >
              <span className="absolute inset-0 w-full h-full bg-[#2f27ce] group-hover:bg-[#433bff] transition-colors duration-300"></span>
              <span className="relative flex items-center">
                View My Work
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
            
            <Link 
              href="#contact"
              className="group relative px-7 py-3 overflow-hidden font-medium"
            >
              <span className="absolute inset-0 w-full h-full border border-[#dedcff] group-hover:border-[#2f27ce] transition-colors duration-300"></span>
              <span className="relative text-[#050315] group-hover:text-[#2f27ce] transition-colors duration-300">
                Contact M
              </span>
            </Link>
          </div>
          
          {/* Social icons */}
          <div className="flex gap-6 mt-16">
            <a href="https://github.com/KboyVillahermosa" target="_blank" className="text-[#050315]/60 hover:text-[#433bff] transition-colors" aria-label="GitHub">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/francisco-villahermosa-912399311/" target="_blank" className="text-[#050315]/60 hover:text-[#433bff] transition-colors" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
    </section>
  );
};

export default Header;