"use client";
import { FaGithub, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#fbfbfe] to-[#f5f5ff] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#433bff]/10 to-transparent rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#433bff]/10 to-transparent rounded-full -ml-48 -mb-48"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-1/4 left-[15%] w-8 h-8 bg-[#433bff]/5 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-[20%] w-12 h-12 bg-[#433bff]/10 rounded-lg rotate-45 animate-float-delay"></div>
      <div className="absolute bottom-1/4 left-[40%] w-6 h-6 bg-[#433bff]/8 rounded-full animate-float-slow"></div>
      
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#050315]">Get In Touch</h2>
        <p className="text-center text-[#050315]/70 mb-16 max-w-2xl mx-auto">
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>
        
        {/* Social media icons - centered aesthetic layout */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <a 
              href="mailto:franciscovillahermosa@gmail.com"
              className="group"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(47,39,206,0.3)]">
                <FaEnvelope className="text-3xl text-[#050315] transition-all duration-300 group-hover:text-[#2f27ce]" />
              </div>
              <p className="text-center mt-3 text-[#050315]/80 font-medium">Email</p>
            </a>
            
            <a 
              href="https://github.com/KboyVillahermosa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(47,39,206,0.3)]">
                <FaGithub className="text-3xl text-[#050315] transition-all duration-300 group-hover:text-[#2f27ce]" />
              </div>
              <p className="text-center mt-3 text-[#050315]/80 font-medium">GitHub</p>
            </a>
            
            <a 
              href="https://linkedin.com/in/francisco-villahermosa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(47,39,206,0.3)]">
                <FaLinkedinIn className="text-3xl text-[#050315] transition-all duration-300 group-hover:text-[#2f27ce]" />
              </div>
              <p className="text-center mt-3 text-[#050315]/80 font-medium">LinkedIn</p>
            </a>
            
            <a 
              href="https://facebook.com/francisco.villahermosa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(47,39,206,0.3)]">
                <FaFacebookF className="text-3xl text-[#050315] transition-all duration-300 group-hover:text-[#2f27ce]" />
              </div>
              <p className="text-center mt-3 text-[#050315]/80 font-medium">Facebook</p>
            </a>
            
            <a 
              href="https://instagram.com/kboy_villahermosa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(47,39,206,0.3)]">
                <FaInstagram className="text-3xl text-[#050315] transition-all duration-300 group-hover:text-[#2f27ce]" />
              </div>
              <p className="text-center mt-3 text-[#050315]/80 font-medium">Instagram</p>
            </a>
          </div>
        </div>
        
        {/* Contact info - minimalist style */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-12">
            <span className="relative inline-block">
              <h3 className="text-2xl font-semibold text-[#050315] mb-2">Location</h3>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2f27ce] to-transparent"></span>
            </span>
            <p className="text-[#050315]/70 text-lg mt-4">Cebu City, Philippines</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a 
              href="mailto:franciscovillahermosa@gmail.com" 
              className="px-6 py-3 bg-white border border-[#dedcff] rounded-full shadow-sm hover:shadow-md hover:border-[#2f27ce]/30 transition-all flex items-center"
            >
              <FaEnvelope className="text-[#2f27ce] mr-2" />
              <span className="text-[#050315]/80">franciscovillahermosa@gmail.com</span>
            </a>
            
            <a 
              href="tel:+639123456789" 
              className="px-6 py-3 bg-white border border-[#dedcff] rounded-full shadow-sm hover:shadow-md hover:border-[#2f27ce]/30 transition-all"
            >
              <span className="text-[#050315]/80">+63 912 345 6789</span>
            </a>
          </div>
        </div>
        
        {/* Call to action - gradient style */}
        <div className="text-center">
          <div className="inline-block relative p-1 bg-gradient-to-r from-[#2f27ce] via-[#433bff] to-[#2f27ce] rounded-lg">
            <a 
              href="mailto:franciscovillahermosa@gmail.com" 
              className="block bg-white hover:bg-opacity-95 text-[#2f27ce] font-medium px-8 py-3 rounded-md transition-all"
            >
              <span className="flex items-center">
                Let's Talk About Your Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;