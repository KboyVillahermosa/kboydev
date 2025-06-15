"use client";

import { useState } from "react";

const WorkExperience = () => {
  const [activeTab, setActiveTab] = useState("freelance");

  const workExperiences = [
    {
      id: "freelance",
      title: "Web & Mobile Development",
      period: "2024-2025",
      type: "FREELANCE",
      description: "Delivering custom digital solutions for diverse clients, specializing in responsive web applications and native mobile experiences with a focus on performance and intuitive user interfaces.",
      skills: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"],
      achievements: [
        "Developed responsive web applications with modern UI/UX design principles",
        "Created cross-platform mobile solutions that maintain native performance",
        "Optimized front-end performance for improved user experience",
        "Implemented custom API integrations for seamless data flow"
      ]
    }
  ];

  const currentExperience = workExperiences.find(exp => exp.id === activeTab) || workExperiences[0];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-[#fbfbfe] to-[#f8f8ff] relative">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-[url('/mesh-pattern.png')] opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section heading */}
          <div className="mb-16 text-center">
            <div className="inline-block mb-3 px-4 py-1 bg-[#433bff]/5 rounded-full">
              <span className="text-[#2f27ce] font-semibold tracking-wide text-sm">MY PROFESSIONAL JOURNEY</span>
            </div>
            <h2 className="text-4xl font-bold text-[#050315] mb-4 leading-tight">Work Experience</h2>
            <div className="h-1 w-24 bg-[#433bff] mx-auto rounded-full"></div>
          </div>
          
          {/* Experience tabs */}
          <div className="mb-10 flex justify-center overflow-x-auto scrollbar-hide border-b border-gray-100">
            {workExperiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={`px-6 py-4 whitespace-nowrap font-medium transition-all duration-300 ${
                  activeTab === exp.id
                    ? "text-[#433bff] border-b-2 border-[#433bff] font-semibold"
                    : "text-[#050315]/60 hover:text-[#2f27ce] hover:border-b-2 hover:border-[#433bff]/30"
                }`}
              >
                {exp.title}
              </button>
            ))}
          </div>
          
          {/* Experience details */}
          <div className="p-8 border-l-2 border-[#433bff] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-wrap items-center mb-5 gap-2">
              <span className="text-[#2f27ce] font-medium text-sm px-3 py-1 bg-[#433bff]/10 rounded-full">{currentExperience.period}</span>
              <span className="px-3 py-1 bg-[#433bff] text-white text-sm font-medium rounded-full">{currentExperience.type}</span>
            </div>
            
            <h3 className="text-2xl font-bold text-[#050315] mb-4">{currentExperience.title}</h3>
            
            <p className="text-[#050315]/80 mb-8 leading-relaxed">{currentExperience.description}</p>
            
            {/* Achievements */}
            <div className="mb-8 p-5 bg-[#fafafa] rounded-lg border border-gray-100">
              <h4 className="text-lg font-semibold text-[#050315] mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#433bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Key Achievements
              </h4>
              <ul className="space-y-3">
                {currentExperience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start group">
                    <span className="text-[#433bff] mr-3 mt-1 transform group-hover:scale-110 transition-transform duration-200">→</span>
                    <span className="text-[#050315]/80 group-hover:text-[#050315] transition-colors duration-200">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Skills */}
            <div>
              <h4 className="text-lg font-semibold text-[#050315] mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#433bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentExperience.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-[#f0eeff] text-[#2f27ce] text-sm font-medium rounded-full border border-[#433bff]/10 hover:-translate-y-1 transition-transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-14 text-center">
            <a 
              href="#contact" 
              className="inline-block px-8 py-4 bg-[#2f27ce] text-white font-semibold rounded-full hover:bg-[#433bff] hover:shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;