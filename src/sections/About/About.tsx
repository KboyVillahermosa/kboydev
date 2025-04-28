"use client";

import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPhp, FaFigma, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiFlutter, SiFirebase, SiSupabase, SiLaravel, SiMysql, SiPostgresql, SiSqlite } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const About = () => {
  const skills = [
    // Frontend
    { name: "HTML/CSS", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
    { name: "JavaScript", icon: <div className="text-yellow-400 text-2xl">JS</div> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-2xl" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-2xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-slate-800 text-2xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-2xl" /> },
    
    // Mobile
    { name: "React Native", icon: <TbBrandReactNative className="text-blue-500 text-2xl" /> },
    { name: "Flutter", icon: <SiFlutter className="text-blue-400 text-2xl" /> },
    
    // Backend
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-2xl" /> },
    { name: "PHP", icon: <FaPhp className="text-purple-500 text-2xl" /> },
    { name: "Laravel", icon: <SiLaravel className="text-red-500 text-2xl" /> },
    { name: "Laravel Inertia", icon: <SiLaravel className="text-pink-500 text-2xl" /> },
    
    // Databases
    { name: "MySQL", icon: <SiMysql className="text-blue-700 text-2xl" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500 text-2xl" /> },
    { name: "SQLite", icon: <SiSqlite className="text-blue-400 text-2xl" /> },
    
    // Cloud & Services
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-2xl" /> },
    { name: "Supabase", icon: <SiSupabase className="text-green-500 text-2xl" /> },
    { name: "RESTful APIs", icon: <FaDatabase className="text-slate-600 text-2xl" /> },
    
    // Tools
    { name: "Git", icon: <FaGitAlt className="text-orange-600 text-2xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-slate-800 text-2xl" /> },
    { name: "Figma", icon: <FaFigma className="text-purple-600 text-2xl" /> },
    { name: "Laragon", icon: <div className="text-red-500 text-xl font-bold">L</div> }
  ];

  return (
    <section id="about" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">About Me</h2>
        
        {/* Bio section with animation and image */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Animated text section - left side */}
            <div className="md:w-1/2 animate-fadeInLeft">
              <h3 className="text-2xl font-semibold mb-6 text-slate-800 border-l-4 border-teal-400 pl-4">Who I Am</h3>
              <p className="text-slate-600 mb-6">
                I'm a passionate web and mobile developer with over 5 years of experience creating
                beautiful, functional, and user-friendly digital experiences. My journey in development
                started with front-end web technologies, and I've since expanded into mobile app
                development.
              </p>
              <p className="text-slate-600 mb-6">
                I believe in clean code, intuitive user interfaces, and creating applications
                that solve real problems. My approach combines technical expertise with an eye for design
                to deliver solutions that not only work flawlessly but look great too.
              </p>
              <p className="text-slate-600">
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing my knowledge through mentoring and blog posts.
              </p>
            </div>
            
            {/* Image - right side */}
            <div className="md:w-1/2 flex justify-center animate-fadeInRight">
              <div className="relative w-80 h-80 rounded-lg overflow-hidden shadow-xl">
                {/* Replace with your actual image */}
                <Image 
                  src="/public/images/about.png" 
                  alt="Developer" 
                  width={320} 
                  height={320}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center text-slate-800">My Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 hover:bg-slate-800 group flex flex-col items-center justify-center gap-2"
              >
                <div className="transition-transform duration-300 transform group-hover:scale-110">
                  {skill.icon}
                </div>
                <span className="font-medium text-slate-700 group-hover:text-teal-400 transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;