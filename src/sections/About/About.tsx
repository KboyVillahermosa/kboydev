"use client";

import { FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPhp, FaFigma, FaDatabase, FaVuejs, FaBootstrap, FaAndroid, FaBox, FaToolbox } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiFlutter, SiFirebase, SiSupabase, SiLaravel, SiMysql, SiPostgresql, SiSqlite, SiAndroidstudio } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

const About = () => {
  const skills = [
    // Frontend
    { name: "HTML/CSS", icon: <FaHtml5 className="text-orange-500 text-2xl" />, category: "Frontend" },
    { name: "JavaScript", icon: <div className="text-yellow-400 text-2xl">JS</div>, category: "Frontend" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-2xl" />, category: "Frontend" },
    { name: "React", icon: <FaReact className="text-blue-400 text-2xl" />, category: "Frontend" },
    { name: "Vue.js", icon: <FaVuejs className="text-green-500 text-2xl" />, category: "Frontend" },
    { name: "Next.js", icon: <SiNextdotjs className="text-slate-800 text-2xl" />, category: "Frontend" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-2xl" />, category: "Frontend" },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-2xl" />, category: "Frontend" },
    
    // Mobile
    { name: "React Native", icon: <TbBrandReactNative className="text-blue-500 text-2xl" />, category: "Mobile" },
    { name: "Flutter", icon: <SiFlutter className="text-blue-400 text-2xl" />, category: "Mobile" },
    { name: "Android Studio", icon: <SiAndroidstudio className="text-green-500 text-2xl" />, category: "Mobile" },
    
    // Backend
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-2xl" />, category: "Backend" },
    { name: "PHP", icon: <FaPhp className="text-purple-500 text-2xl" />, category: "Backend" },
    { name: "Laravel", icon: <SiLaravel className="text-red-500 text-2xl" />, category: "Backend" },
    { name: "Laravel Inertia", icon: <SiLaravel className="text-pink-500 text-2xl" />, category: "Backend" },
    { name: "Laravel Backpack", icon: <div className="text-yellow-600 text-xl font-bold flex items-center justify-center"><SiLaravel className="text-red-500 mr-1" /><span>BP</span></div>, category: "Backend" },
    
    // Databases
    { name: "MySQL", icon: <SiMysql className="text-blue-700 text-2xl" />, category: "Database" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500 text-2xl" />, category: "Database" },
    { name: "SQLite", icon: <SiSqlite className="text-blue-400 text-2xl" />, category: "Database" },
    
    // Cloud & Services
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-2xl" />, category: "Cloud" },
    { name: "Supabase", icon: <SiSupabase className="text-green-500 text-2xl" />, category: "Cloud" },
    { name: "RESTful APIs", icon: <FaDatabase className="text-slate-600 text-2xl" />, category: "Cloud" },
    
    // Tools
    { name: "Git", icon: <FaGitAlt className="text-orange-600 text-2xl" />, category: "Tools" },
    { name: "GitHub", icon: <FaGithub className="text-slate-800 text-2xl" />, category: "Tools" },
    { name: "VS Code", icon: <VscCode className="text-blue-500 text-2xl" />, category: "Tools" },
    { name: "Figma", icon: <FaFigma className="text-purple-600 text-2xl" />, category: "Tools" },
    { name: "Laragon", icon: <div className="text-red-500 text-xl font-bold">L</div>, category: "Tools" }
  ];

  // Group skills by category for mobile view
  const skillCategories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-[#fbfbfe]">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-[#050315]">About Me</h2>
        
        {/* Bio section with animation and abstract pattern */}
        <div className="max-w-6xl mx-auto mb-10 md:mb-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Abstract pattern - stacks above on mobile, left side on desktop */}
            <div className="w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[400px] relative animate-fadeInLeft overflow-hidden">
              {/* Responsive adjustments for the abstract shapes */}
              <div className="absolute left-0 top-0 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-3xl bg-[#5046ff] z-10"></div>
              
              <div className="absolute right-0 top-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl bg-[#e6e5ff] z-20"></div>
              
              <div className="absolute right-8 top-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl bg-[#e6e5ff] z-10"></div>
              
              <div className="absolute right-1/3 top-[60%] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg bg-[#2d2955] z-30"></div>
              
              <div className="absolute right-1/4 top-1/4 w-40 h-16 sm:w-48 sm:h-20 md:w-56 md:h-24 rounded-2xl bg-[#7a73ff] z-20"></div>
              
              <div className="absolute left-1/4 bottom-0 w-32 h-12 sm:w-40 sm:h-14 md:w-48 md:h-16 rounded-xl bg-[#7a73ff] z-20"></div>
              
              <div className="absolute left-0 bottom-1/4 w-24 h-24 sm:w-30 sm:h-30 md:w-36 md:h-36 rounded-2xl bg-[#e6e5ff] z-10"></div>
              
              <div className="absolute right-[45%] top-5 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-2xl bg-[#e6e5ff] z-30"></div>
              
              <div className="absolute right-16 bottom-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg bg-[#7a73ff] z-20"></div>
            </div>
            
            {/* Animated text section - right side on desktop, below on mobile */}
            <div className="w-full md:w-1/2 animate-fadeInRight">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-[#050315] border-l-4 border-[#2f27ce] pl-4">Who I Am</h3>
              <p className="text-sm sm:text-base text-[#050315]/80 mb-4 sm:mb-6">
                 I'm a passionate web and mobile developer from Cebu City, Philippines, 
                 currently pursuing my degree in Information Technology at the University of Southern Philippines Foundation
              </p>
              <p className="text-sm sm:text-base text-[#050315]/80 mb-4 sm:mb-6">
                My journey in development has been driven by an insatiable curiosity and love for creating digital experiences. 
                I find immense satisfaction in transforming complex problems into elegant, efficient solutions.
                Whether I'm building responsive websites or intuitive mobile applications, I prioritize clean code, 
                performance optimization, and delightful user experiences.
              </p>
              <p className="text-sm sm:text-base text-[#050315]/80">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sketching UI designs. I'm constantly learning and growing, eager to push the boundaries of what's possible in web and mobile development.
              </p>
            </div>
          </div>
        </div>
        
        {/* Skills section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center text-[#050315]">My Skills</h3>
          
          {/* Desktop view - grid layout */}
          <div className="hidden sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white p-3 sm:p-4 rounded-lg border border-[#dedcff] shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#2f27ce] group flex flex-col items-center justify-center gap-2"
              >
                <div className="transition-transform duration-300 transform group-hover:scale-110 group-hover:text-white">
                  {skill.icon}
                </div>
                <span className="font-medium text-sm md:text-base text-[#050315]/80 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Mobile view - categorized accordion-style layout */}
          <div className="sm:hidden space-y-4">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex} className="border border-[#dedcff] rounded-lg overflow-hidden">
                <div className="bg-[#f5f5ff] p-3 font-semibold text-[#2f27ce]">
                  {category}
                </div>
                <div className="grid grid-cols-2 gap-2 p-2">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="bg-white p-3 rounded-lg border border-[#dedcff] shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#2f27ce] group flex flex-col items-center justify-center gap-2"
                      >
                        <div className="transition-transform duration-300 transform group-hover:scale-110 group-hover:text-white">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-xs text-center text-[#050315]/80 group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;