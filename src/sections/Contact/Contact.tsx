"use client";
import { FaGithub, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header with minimal styling */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#050315] mb-4">Get In Touch</h2>
            <div className="h-0.5 w-12 bg-[#433bff] mx-auto mb-6"></div>
            <p className="text-[#050315]/70 max-w-2xl mx-auto">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
          </div>
          
          {/* Two-column layout with minimal styling */}
          <div className="flex flex-col md:flex-row gap-16 mb-16">
            {/* Left column - Contact info */}
            <div className="md:w-1/2 space-y-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[#050315]">Location</h3>
                <p className="text-[#050315]/70">Cebu City, Philippines</p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[#050315]">Contact Details</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:franciscovillahermosa@gmail.com" 
                    className="flex items-center text-[#050315]/80 hover:text-[#2f27ce] transition-all"
                  >
                    <FaEnvelope className="mr-3 text-[#2f27ce]" />
                   villahermosafrancisco6@gmail.com
                  </a>
                  <a 
                    href="tel:+639123456789" 
                    className="flex items-center text-[#050315]/80 hover:text-[#2f27ce] transition-all"
                  >
                    <svg className="w-5 h-5 mr-3 text-[#2f27ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    +63 956 463 5763
                  </a>
                </div>
              </div>
              
              {/* Simple CTA Button */}
              <div className="pt-4">
                <a 
                  href="mailto:franciscovillahermosa@gmail.com" 
                  className="inline-flex items-center text-[#2f27ce] font-medium hover:text-[#433bff] transition-all border-b border-[#2f27ce] pb-0.5 hover:border-[#433bff]"
                >
                  Let's Talk About Your Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right column - Social media */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-[#050315] mb-8">Connect With Me</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <a 
                  href="https://github.com/KboyVillahermosa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#050315]/80 hover:text-[#2f27ce] transition-all"
                >
                  <FaGithub className="text-xl" />
                  <span>GitHub</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/francisco-villahermosa-912399311/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#050315]/80 hover:text-[#2f27ce] transition-all"
                >
                  <FaLinkedinIn className="text-xl" />
                  <span>LinkedIn</span>
                </a>
                
                <a 
                  href="https://mail.google.com/mail/u/0/#inbox"
                  className="flex items-center gap-3 text-[#050315]/80 hover:text-[#2f27ce] transition-all"
                >
                  <FaEnvelope className="text-xl" />
                  <span>Email</span>
                </a>
                
                <a 
                  href="https://www.facebook.com/kboy.villahermosa.2024" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#050315]/80 hover:text-[#2f27ce] transition-all"
                >
                  <FaFacebookF className="text-xl" />
                  <span>Facebook</span>
                </a>
                
                <a 
                  href="https://www.instagram.com/villahermosakboy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#050315]/80 hover:text-[#2f27ce] transition-all"
                >
                  <FaInstagram className="text-xl" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;