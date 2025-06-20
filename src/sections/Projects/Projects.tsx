"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { 
  SiFlutter, SiDart, SiSqlite, 
  SiFirebase, SiReact, SiNodedotjs, 
  SiTypescript, SiTailwindcss, SiHtml5, 
  SiCss3, SiJavascript, SiPhp, SiMysql, 
  SiLaravel, SiSupabase
} from "react-icons/si";
import { AiOutlineFile, AiOutlineCamera, AiOutlineFolder, AiOutlineSave } from "react-icons/ai";

// Define TypeScript interfaces for better type safety
interface ProjectImage {
  src: string;
  alt?: string;
}

interface Technology {
  name: string;
  icon: React.ReactNode;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: Technology[];
  images: string[];
  demoUrl: string;
  repoUrl: string;
}

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "USPF Research Archive",
      description: "USPF Research Archive is a digital platform where students and faculty can upload theses, dissertations, and research publications. It also automatically generates related studies, helping users find relevant academic work for their research.",
      technologies: [
        { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
        { name: "Backpack", icon: <AiOutlineFolder className="text-yellow-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-800" /> }
      ],
      images: [
        "/images/uspf1.png",
        "/images/uspf2.png",
        "/images/uspf3.png",
        "/images/uspf4.png",
        "/images/uspf5.png",
        "/images/uspf6.png",
        "/images/uspf7.png",
        "/images/uspf8.png",
        "/images/uspf9.png",
        "/images/uspf10.png",
      ],
      demoUrl: "https://github.com/KboyVillahermosa/USPF-ARCHIVE-CAPSTONE",
      repoUrl: "https://github.com/KboyVillahermosa/USPF-ARCHIVE-CAPSTONE"
    },
    {
      id: 2,
      title: "Techtool",
      description: "Your go-to resource for improving your computer science and IT ",
      technologies: [
        { name: "Html", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "Css", icon: <SiCss3 className="text-blue-500" /> },
        { name: "JS", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Php", icon: <SiPhp className="text-purple-500" /> },
        { name: "MySql", icon: <SiMysql className="text-blue-800" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> }
      ],
      images: [
        "/images/tech.png",
        "/images/tech_1.png",
      ],
      demoUrl: "https://github.com/KboyVillahermosa/TechTool",
      repoUrl: "https://github.com/KboyVillahermosa/TechTool"
    },
    {
      id: 3,
      title: "Search Job",
      description: "Our platform aggregates job listings from leading sources, including LinkedIn, Indeed, Glassdoor, and more, allowing you to search, filter, and explore opportunities all in one place.",
      technologies: [
        { name: "Reactjs", icon: <SiReact className="text-blue-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Typescript", icon: <SiTypescript className="text-blue-600" /> }
      ],
      images: [
        "/images/search.png",
        "/images/search_1.png",
      ],
      demoUrl: "https://github.com/KboyVillahermosa/JobScout",
      repoUrl: "https://github.com/KboyVillahermosa/JobScout"
    },
    {
      id: 4,
      title: "Ascentra",
      description: "Discover and track hiking spots around Cebu. Post your adventures, monitor your progress and routes, and access maps of all local trails.",
      technologies: [
        { name: "React Native", icon: <SiReact className="text-blue-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },
       
      ],
      images: [
        "/images/10.png",
        "/images/11.png",
        "/images/12.png",
      ],
      demoUrl: "https://github.com/KboyVillahermosa/Capstone_Hikewise",
      repoUrl: "https://github.com/KboyVillahermosa/Capstone_Hikewise"
    },
    {
      id: 5,
      title: "SeviceYou",
      description: "is a mobile marketplace that connects skilled professionals with clients seeking services. Built with Flutter, the app enables users to discover local service providers, offer their expertise as professionals, and manage the entire service process in one place.",
      technologies: [
        { name: "Flutter", icon: <SiFlutter className="text-cyan-500" /> },
        { name: "Dart", icon: <SiDart className="text-blue-500" /> },
        { name: "SqLite", icon: <SiSqlite className="text-blue-700" /> },
        { name: "Sqflite", icon: <SiSqlite className="text-blue-600" /> },
        { name: "path_provider", icon: <AiOutlineFolder className="text-yellow-600" /> },
        { name: "image_picker", icon: <AiOutlineCamera className="text-green-500" /> },
        { name: "file_picker", icon: <AiOutlineFile className="text-purple-500" /> },
        { name: "shared_preferences", icon: <AiOutlineSave className="text-orange-500" /> }
      ],
      images: [
        "/images/2.jpg",
        "/images/3.jpg",
        "/images/4.jpg",
        "/images/5.jpg",
        "/images/6.jpg",
        "/images/7.jpg",
        "/images/8.jpg",
        "/images/9.jpg",
        "/images/10.jpg",
        "/images/2.jpg",
        "/images/3.jpg",
        "/images/4.jpg",
        "/images/5.jpg",
        "/images/6.jpg",
        "/images/7.jpg",
        "/images/8.jpg",
      ],
      demoUrl: "https://github.com/KboyVillahermosa/Capstone_Hikewise",
      repoUrl: "https://github.com/KboyVillahermosa/Capstone_Hikewise"
    },
  ];

  const openModal = (project: Project) => {
    setCurrentProject(project);
    setCurrentImageIndex(0);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (currentProject && currentProject.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length);
    }
  };

  const prevImage = () => {
    if (currentProject && currentProject.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? currentProject.images.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    if (modalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen, currentProject]);

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <section id="projects" className="py-24 bg-[#fbfbfe]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#050315]">Featured Projects</h2>
            <p className="text-[#050315]/80 max-w-2xl mx-auto">Explore some of my recent work showcasing my expertise in web and mobile development.</p>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] md:w-[2px] md:transform md:-translate-x-1/2 
                        bg-gradient-to-b from-[#433bff]/20 via-[#433bff] to-[#433bff]/20"></div>

            <div className="space-y-24 md:space-y-32">
              {visibleProjects.map((project, index) => (
                <div key={project.id} className={`relative group`}>
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 md:w-5 md:h-5 rounded-full 
                              bg-[#433bff] z-10 ring-4 ring-[#dedcff]/30 shadow-lg shadow-[#433bff]/20 
                              transition-all duration-300 group-hover:scale-110 group-hover:ring-[#433bff]/50">
                    <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </span>
                  </div>

                  <div className={`flex flex-col ml-14 md:ml-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch`}>
                    <div className={`w-full pt-16 pb-4 md:py-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <div className="relative md:mt-0">
                        <h3 className="text-2xl font-bold mb-3 text-[#050315]">{project.title}</h3>
                        <p className="text-[#050315]/80 mb-6 leading-relaxed">{project.description}</p>

                        <div className="mb-6">
                          <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="border border-[#dedcff] bg-white text-[#050315]/80 text-xs px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5"
                              >
                                {tech.icon}
                                {tech.name}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className={`flex space-x-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <Link
                            href={project.demoUrl}
                            className="text-[#2f27ce] hover:text-[#433bff] font-medium text-sm flex items-center transition-colors"
                            aria-label={`View ${project.title} demo`}
                          >
                            <span>View Project</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </Link>
                          <Link
                            href={project.repoUrl}
                            className="text-[#050315]/60 hover:text-[#050315] font-medium text-sm flex items-center transition-colors"
                            aria-label={`View ${project.title} source code`}
                          >
                            <span>Source Code</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:block md:w-2/12 relative">
                      <div className="absolute inset-x-0 top-7 h-[1px] border-t border-dashed border-[#dedcff]/50 opacity-0 
                                   group-hover:opacity-100 transition-all duration-500"></div>
                    </div>

                    <div className={`w-full mb-8 md:mb-0 md:mt-0 md:w-5/12 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                      <div className="relative">
                        <div
                          className="overflow-hidden rounded-lg shadow-md bg-white p-2 cursor-pointer"
                          onClick={() => openModal(project)}
                        >
                          <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded">
                            {project.images && project.images.length > 0 ? (
                              <Image
                                src={project.images[0]}
                                alt={project.title}
                                width={600}
                                height={340}
                                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                                priority={index === 0}
                              />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center text-[#050315]/40 bg-[#dedcff]/30">
                                <span className="text-sm font-medium">Project Preview</span>
                              </div>
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-[#050315]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                              <div className="p-4 md:p-6 w-full flex justify-between items-end">
                                <div>
                                  <h4 className="text-white font-medium text-lg">{project.title}</h4>
                                  <p className="text-[#dedcff] text-sm mt-1">View gallery</p>
                                </div>
                                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              </div>
                            </div>

                            {project.images && project.images.length > 1 && (
                              <div className="absolute top-2 right-2 bg-[#433bff] text-white text-xs font-bold px-2 py-1 rounded-full">
                                {project.images.length} images
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 text-center">
            <button
              onClick={toggleShowAll}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2f27ce] hover:bg-[#433bff] transition-colors duration-300"
            >
              {showAll ? (
                <>
                  See Less
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </>
              ) : (
                <>
                  See More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Image Modal with Clean, Light Design & Subtle Blur Effect */}
      {modalOpen && currentProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-white/90 backdrop-blur-md transition-all duration-300" 
          onClick={closeModal}
        >
          <div 
            className="relative max-w-7xl w-full bg-white/80 rounded-2xl shadow-lg border border-[#dedcff] transition-all duration-300 transform overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header - Light Version */}
            <div className="absolute top-0 inset-x-0 p-4 sm:p-6 flex justify-between items-center z-20 bg-gradient-to-b from-white/90 via-white/70 to-transparent rounded-t-2xl">
              <h3 className="text-[#050315] font-medium text-base sm:text-xl flex items-center gap-2 py-1 px-3 rounded-lg bg-white/80">
                <span className="w-1 h-4 sm:h-6 bg-[#433bff] rounded-sm inline-block"></span>
                {currentProject.title}
              </h3>
              <button
                onClick={closeModal}
                className="p-2 bg-white/80 hover:bg-[#433bff]/20 rounded-full text-[#050315] transition-all duration-200 hover:rotate-90"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Image Container - Clean Styling */}
            <div className="py-14 sm:py-16 px-2 sm:px-4 md:px-8">
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <div className="relative w-full aspect-[16/9] sm:aspect-auto sm:h-[60vh] md:h-[70vh] rounded-lg overflow-hidden bg-gray-50 border border-gray-100">
                  <Image
                    src={currentProject.images[currentImageIndex]}
                    alt={`${currentProject.title} screenshot ${currentImageIndex + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 80vw"
                    className="object-contain"
                    priority
                    quality={90}
                  />
                </div>
              </div>
            </div>

            {/* Navigation Arrows - Lighter Style */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute top-1/2 left-1 sm:left-4 md:left-6 -translate-y-1/2 z-10 p-1.5 sm:p-2 md:p-3 
                      rounded-full bg-white/80 text-[#050315] hover:bg-[#433bff]/20 border border-[#dedcff]
                      transition-all duration-300 hover:scale-110 shadow-sm group"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute top-1/2 right-1 sm:right-4 md:right-6 -translate-y-1/2 z-10 p-1.5 sm:p-2 md:p-3 
                      rounded-full bg-white/80 text-[#050315] hover:bg-[#433bff]/20 border border-[#dedcff]
                      transition-all duration-300 hover:scale-110 shadow-sm group"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Bottom Controls Bar - Light Version */}
            <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 md:p-6 bg-gradient-to-t from-white/90 via-white/70 to-transparent rounded-b-2xl">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
                {/* Image counter with progress bar */}
                <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto order-2 sm:order-1">
                  <div className="text-[#050315]/90 font-medium text-xs sm:text-sm">
                    <span className="text-[#050315] font-bold">{currentImageIndex + 1}</span>
                    <span className="mx-1">/</span>
                    <span>{currentProject.images.length}</span>
                  </div>
                  
                  <div className="w-24 sm:w-32 md:w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#433bff] transition-all duration-300" 
                      style={{ width: `${((currentImageIndex + 1) / currentProject.images.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Thumbnail dots */}
                {currentProject.images.length > 1 && (
                  <div className="flex justify-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-4 sm:py-2 bg-white/80 shadow-sm rounded-full order-1 sm:order-2 border border-[#dedcff]">
                    {currentProject.images.slice(0, Math.min(currentProject.images.length, window.innerWidth < 640 ? 7 : 12)).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                          ? 'bg-[#433bff] scale-125 shadow-[0_0_8px_rgba(67,59,255,0.6)]' 
                          : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                    {currentProject.images.length > (window.innerWidth < 640 ? 7 : 12) && (
                      <span className="text-xs text-gray-500">+{currentProject.images.length - (window.innerWidth < 640 ? 7 : 12)}</span>
                    )}
                  </div>
                )}
                
                {/* Tech stack tags */}
                <div className="hidden sm:flex gap-2 order-3">
                  {currentProject.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-white/80 text-[#050315]/80 text-xs rounded-full border border-[#dedcff] shadow-sm flex items-center gap-1.5"
                    >
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
                  {currentProject.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-white/80 text-[#050315]/80 text-xs rounded-full border border-[#dedcff] shadow-sm">
                      +{currentProject.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Keyboard shortcuts hint */}
            <div className="absolute bottom-20 right-6 text-[#050315]/70 text-xs hidden md:flex items-center gap-4 bg-white/80 px-3 py-1.5 rounded-full border border-[#dedcff] shadow-sm">
              <div className="flex items-center gap-1.5">
                <span className="bg-gray-100 px-2 py-0.5 rounded font-mono">←</span>
                <span>Previous</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="bg-gray-100 px-2 py-0.5 rounded font-mono">→</span>
                <span>Next</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="bg-gray-100 px-2 py-0.5 rounded font-mono">Esc</span>
                <span>Close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;