"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiCalendar, HiArrowNarrowRight } from "react-icons/hi";
import { FaTrophy, FaCertificate, FaAward } from "react-icons/fa";

const Achievements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section id="achievements" className="py-28 bg-gradient-to-b from-white to-[#fbfbfe]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header with refined styling */}
          <div className={`text-center mb-20 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block px-3 py-1 bg-[#f0f0ff] text-[#2f27ce] text-sm font-medium rounded-full mb-4">Recognition</span>
            <h2 className="text-4xl font-bold text-[#050315] mb-4">Achievements & Awards</h2>
            <div className="h-1 w-12 bg-[#433bff] mx-auto mb-6 rounded-full"></div>
            <p className="text-[#050315]/70 max-w-2xl mx-auto">
              Recognitions and milestones from my academic and professional journey
            </p>
          </div>

          {/* Timeline section with improved visual appeal */}
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left column - Trophy animation with subtle effects */}
            <div className={`md:w-2/5 transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="h-full flex items-center justify-center">
                <div className="relative w-full h-80 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#fcfcff] to-[#f5f5ff] rounded-xl border border-[#dedcff] shadow-lg shadow-[#dedcff]/20 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#dedcff]/30 group-hover:border-[#c8c5ff]">
                    <div className="relative w-3/4 h-3/4 transform transition-transform duration-700 group-hover:scale-105">
                      <FaTrophy className="w-full h-full text-[#2f27ce] opacity-5" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <FaTrophy className="text-[#2f27ce] text-8xl filter drop-shadow-lg" />
                          <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#f0f0ff] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                            <span className="text-[#2f27ce] font-bold">2023</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Timeline with enhanced visual design */}
            <div className={`md:w-3/5 transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative pl-8 border-l-2 border-[#3b27ce]/30 before:absolute before:left-[-5px] before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-[#3b27ce]">
                
                {/* Timeline item 1 - Dean's List with improved spacing */}
                <div className="mb-16 relative group">
                  <div className="absolute -left-[23px] top-0 w-10 h-10 rounded-full bg-white border-2 border-[#3b27ce] flex items-center justify-center shadow-sm transform transition-transform duration-300 group-hover:scale-110">
                    <div className="w-6 h-6 rounded-full bg-[#3b27ce] flex items-center justify-center">
                      <HiCalendar className="text-white text-sm" />
                    </div>
                  </div>
                  <div className="pl-6">
                    <h3 className="text-xl font-bold text-[#050315] mb-1">Dean's List</h3>
                    <p className="text-[#050315]/70 text-sm mb-2">University of Southern Philippines Foundation (Fall 2022 - Fall 2023)</p>
                    <p className="text-[#050315]/80 leading-relaxed">
                      Consistently maintained academic excellence, achieving placement on the Dean's List for multiple semesters due to outstanding performance across all courses.
                    </p>
                  </div>
                </div>

                {/* Timeline item 2 - Hackathon with improved spacing */}
                <div className="mb-16 relative group">
                  <div className="absolute -left-[23px] top-0 w-10 h-10 rounded-full bg-white border-2 border-[#3b27ce] flex items-center justify-center shadow-sm transform transition-transform duration-300 group-hover:scale-110">
                    <div className="w-6 h-6 rounded-full bg-[#3b27ce] flex items-center justify-center">
                      <FaAward className="text-white text-xs" />
                    </div>
                  </div>
                  <div className="pl-6">
                    <h3 className="text-xl font-bold text-[#050315] mb-1">3rd Place, Hackathon CCS, 2023</h3>
                    <p className="text-[#050315]/70 text-sm mb-2">University Competition</p>
                    <p className="text-[#050315]/80 leading-relaxed">
                      Recognized for creating an innovative job search platform that connects job seekers with opportunities using modern technologies and intuitive design.
                    </p>
                  </div>
                </div>

                {/* Timeline item 3 - Certificate with improved spacing */}
                <div className="mb-16 relative group">
                  <div className="absolute -left-[23px] top-0 w-10 h-10 rounded-full bg-white border-2 border-[#3b27ce] flex items-center justify-center shadow-sm transform transition-transform duration-300 group-hover:scale-110">
                    <div className="w-6 h-6 rounded-full bg-[#3b27ce] flex items-center justify-center">
                      <FaCertificate className="text-white text-xs" />
                    </div>
                  </div>
                  <div className="pl-6">
                    <h3 className="text-xl font-bold text-[#050315] mb-1">Certificate of Appreciation</h3>
                    <p className="text-[#050315]/70 text-sm mb-2">2024 Cebu Interschool HACKATHON</p>
                    <p className="text-[#050315]/80 leading-relaxed">
                      Participated in the cross-university hackathon, collaborating with peers to develop innovative solutions to real-world problems using cutting-edge technologies.
                    </p>
                  </div>
                </div>

                {/* Action buttons with improved styling */}
                <div className="flex flex-wrap gap-5 mt-10">
                  <Link 
                    href="https://drive.google.com/file/d/13Xwqqh-S4xyTBjqTjTZIneMs6kbvAhsH/view?usp=sharing"
                    target="_blank"
                    className="inline-flex items-center px-6 py-3 bg-white hover:bg-[#f0f0ff] text-[#2f27ce] rounded-lg border border-[#dedcff] transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md group"
                  >
                    <span>Resume</span>
                    <HiArrowNarrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center px-6 py-3 bg-[#2f27ce] hover:bg-[#433bff] text-white rounded-lg transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-lg hover:shadow-[#2f27ce]/20"
                  >
                    View Certificates
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced modal for certificates */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div 
            className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl transform transition-all duration-300 animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header with improved organization */}
            <div className="px-6 py-4 border-b border-[#dedcff] flex justify-between items-center bg-white">
              <div className="flex items-center overflow-hidden">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f0f0ff] flex items-center justify-center">
                  <FaCertificate className="text-[#2f27ce] text-lg" />
                </div>
                <h3 className="ml-3 text-lg font-semibold text-[#050315] truncate">
                  Certificates & Awards
                </h3>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="flex-shrink-0 ml-2 p-1.5 text-[#050315]/60 hover:text-[#050315] rounded-full hover:bg-[#f5f5ff] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Modal body with elegant accordions */}
            <div className="flex-1 overflow-y-auto p-8 bg-[#fafaff]">
              <div className="space-y-6">
                {/* Accordion 1 with improved styling */}
                <div className="border border-[#dedcff] rounded-xl overflow-hidden bg-white shadow-sm">
                  <button 
                    className="w-full flex justify-between items-center p-5 hover:bg-[#f9f9ff] text-left transition-colors duration-200"
                    onClick={() => toggleAccordion(0)}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#f0f0ff] flex items-center justify-center mr-4">
                        <FaAward className="text-[#2f27ce] text-lg" />
                      </div>
                      <span className="font-medium text-[#050315]">Hackathon CCS, 2023</span>
                    </div>
                    <svg 
                      className={`w-5 h-5 text-[#2f27ce] transition-transform duration-300 ${activeAccordion === 0 ? 'transform rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {activeAccordion === 0 && (
                    <div className="p-5 border-t border-[#dedcff] animate-fadeIn">
                      <p className="mb-5 text-[#050315]/80 leading-relaxed">
                        Awarded 3rd Place in the Hackathon CCS 2023 for developing an innovative job search platform that bridges the gap between job seekers and employers.
                      </p>
                      <div className="bg-[#fbfbfe] p-3 rounded-lg border border-[#dedcff] shadow-inner">
                        <div className="aspect-[4/3] relative">
                          <Image 
                            src="/images/green.jpg" 
                            alt="Hackathon Certificate" 
                            fill
                            className="object-contain rounded shadow-sm"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Accordion 2 with improved styling */}
                <div className="border border-[#dedcff] rounded-xl overflow-hidden bg-white shadow-sm">
                  <button 
                    className="w-full flex justify-between items-center p-5 hover:bg-[#f9f9ff] text-left transition-colors duration-200"
                    onClick={() => toggleAccordion(1)}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#f0f0ff] flex items-center justify-center mr-4">
                        <FaCertificate className="text-[#2f27ce] text-lg" />
                      </div>
                      <span className="font-medium text-[#050315]">Cebu Interschool Hackathon</span>
                    </div>
                    <svg 
                      className={`w-5 h-5 text-[#2f27ce] transition-transform duration-300 ${activeAccordion === 1 ? 'transform rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {activeAccordion === 1 && (
                    <div className="p-5 border-t border-[#dedcff] animate-fadeIn">
                      <p className="mb-5 text-[#050315]/80 leading-relaxed">
                        Received a Certificate of Appreciation for actively participating and contributing innovative solutions in the 2024 Cebu Interschool HACKATHON.
                      </p>
                      <div className="bg-[#fbfbfe] p-3 rounded-lg border border-[#dedcff] shadow-inner">
                        <div className="aspect-[4/3] relative">
                          <Image 
                            src="/images/interschool.jpg" 
                            alt="Interschool Hackathon Certificate" 
                            fill
                            className="object-contain rounded shadow-sm"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Modal footer with improved styling */}
            <div className="px-8 py-5 border-t border-[#dedcff] bg-white">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 bg-[#f5f5ff] hover:bg-[#e8e8ff] text-[#2f27ce] rounded-lg text-sm font-medium transition-colors duration-300 shadow-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSS animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Achievements;