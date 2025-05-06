"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  const projects = [
    {
      id: 1,
      title: "USPF Research Archive",
      description: "USPF Research Archive is a digital platform where students and faculty can upload theses, dissertations, and research publications. It also automatically generates related studies, helping users find relevant academic work for their research.",
      technologies: ["Laravel", "Backpack", "Tailwind CSS", "MySQL"],
      imageUrl: "/images/uspf_archive.png",
      demoUrl: "https://github.com/KboyVillahermosa/USPF-ARCHIVE-CAPSTONE",
      repoUrl: "https://github.com/KboyVillahermosa/USPF-ARCHIVE-CAPSTONE"
    },
    {
      id: 2,
      title: "Techtool",
      description: "Your go-to resource for improving your computer science and IT ",
      technologies: ["Html", "Css", "JS", "Php", "MySql", "Tailwind CSS"],
      imageUrl: "/images/tech.png",
      demoUrl: "https://github.com/KboyVillahermosa/TechTool",
      repoUrl: "https://github.com/KboyVillahermosa/TechTool"
    },
    {
      id: 3,
      title: "Search Job",
      description: "Our platform aggregates job listings from leading sources, including LinkedIn, Indeed, Glassdoor, and more, allowing you to search, filter, and explore opportunities all in one place.",
      technologies: ["Reactjs", "Node.js", "Firebase", "Typescript"],
      imageUrl: "/images/search.png",
      demoUrl: "https://github.com/KboyVillahermosa/JobScout",
      repoUrl: "https://github.com/KboyVillahermosa/JobScout"
    },
    {
      id: 4,
      title: "Ascentra",
      description: "Discover and track hiking spots around Cebu. Post your adventures, monitor your progress and routes, and access maps of all local trails.",
      technologies: ["Reactjs", "Node.js", "Firebase", "Typescript"],
      imageUrl: "/images/ascentra.jpg",
      demoUrl: "https://github.com/KboyVillahermosa/Capstone_Hikewise",
      repoUrl: "https://github.com/KboyVillahermosa/Capstone_Hikewise"
    },
  ];

  // Only show the first 3 projects unless showAll is true
  const visibleProjects = showAll ? projects : projects.slice(0, 3);
  
  // Toggle the showAll state
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="projects" className="py-24 bg-[#fbfbfe]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#050315]">Featured Projects</h2>
          <p className="text-[#050315]/80 max-w-2xl mx-auto">Explore some of my recent work showcasing my expertise in web and mobile development.</p>
        </div>
        
        <div className="relative">
          {/* Timeline center line with improved mobile visibility */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] md:w-[2px] md:transform md:-translate-x-1/2 
                       bg-gradient-to-b from-[#433bff]/20 via-[#433bff] to-[#433bff]/20"></div>
          
          {/* Timeline nodes */}
          <div className="space-y-24 md:space-y-32">
            {visibleProjects.map((project, index) => (
              <div key={project.id} className="relative group">
                {/* Timeline node - improved for mobile */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 md:w-5 md:h-5 rounded-full 
                             bg-[#433bff] z-10 ring-4 ring-[#dedcff]/30 shadow-lg shadow-[#433bff]/20 
                             transition-all duration-300 group-hover:scale-110 group-hover:ring-[#433bff]/50">
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </span>
                </div>
                
                {/* Year indicator - repositioned for better mobile visibility */}
                <div className="absolute left-6 md:left-1/2 top-10 md:top-8 transform -translate-x-1/2 md:-translate-x-1/2">
                  <span className="text-xs font-medium text-[#050315]/70 bg-[#fbfbfe] px-3 py-1.5 rounded-full 
                               shadow-sm border border-[#dedcff] transition-all duration-300 group-hover:border-[#433bff]/50">
                    {2023 - index}
                  </span>
                </div>
                
                {/* Project content - improved mobile layout */}
                <div className={`flex flex-col ml-14 md:ml-0 md:${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-stretch`}>
                  {/* Content section - better padding for mobile */}
                  <div className={`w-full pt-16 pb-4 md:py-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="relative md:mt-0">
                      <h3 className="text-2xl font-bold mb-3 text-[#050315]">{project.title}</h3>
                      <p className="text-[#050315]/80 mb-6 leading-relaxed">{project.description}</p>
                      
                      <div className="mb-6">
                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex} 
                              className="border border-[#dedcff] bg-white text-[#050315]/80 text-xs px-3 py-1 rounded-full shadow-sm"
                            >
                              {tech}
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
                      
                      {/* Desktop connecting lines (hidden on mobile) */}
                      {index % 2 === 0 ? (
                        <div className="absolute right-[-16px] top-7 hidden md:flex items-center">
                          <div className="h-[2px] bg-gradient-to-r from-[#050315]/10 to-[#433bff] w-[16px] 
                                       group-hover:w-[20px] transition-all duration-300"></div>
                          <div className="w-2 h-2 rounded-full bg-[#433bff] opacity-0 
                                       group-hover:opacity-100 transition-all duration-300"></div>
                        </div>
                      ) : (
                        <div className="absolute left-[-16px] top-7 hidden md:flex items-center">
                          <div className="w-2 h-2 rounded-full bg-[#433bff] opacity-0 
                                       group-hover:opacity-100 transition-all duration-300"></div>
                          <div className="h-[2px] bg-gradient-to-l from-[#050315]/10 to-[#433bff] w-[16px] 
                                       group-hover:w-[20px] transition-all duration-300"></div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Empty space for timeline - hidden on mobile */}
                  <div className="hidden md:block md:w-2/12 relative">
                    <div className="absolute inset-x-0 top-7 h-[1px] border-t border-dashed border-[#dedcff]/50 opacity-0 
                                 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                  
                  {/* Image section - improved mobile spacing */}
                  <div className={`w-full mb-8 md:mb-0 md:mt-0 md:w-5/12 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                    <div className="relative">
                      <div className="overflow-hidden rounded-lg shadow-md bg-white p-2">
                        <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded">
                          {project.imageUrl ? (
                            <Image
                              src={project.imageUrl}
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
                          
                          {/* Mobile-friendly overlay with project title */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#050315]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-4 md:p-6 w-full">
                              <h4 className="text-white font-medium text-lg">{project.title}</h4>
                              <p className="text-[#dedcff] text-sm mt-1">View project details</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Desktop connecting lines (hidden on mobile) */}
                      {index % 2 === 0 ? (
                        <div className="absolute left-[-16px] top-28 hidden md:flex items-center">
                          <div className="w-2 h-2 rounded-full bg-[#433bff] opacity-0 
                                       group-hover:opacity-100 transition-all duration-300"></div>
                          <div className="h-[2px] bg-gradient-to-l from-[#050315]/10 to-[#433bff] w-[16px] 
                                       group-hover:w-[20px] transition-all duration-300"></div>
                        </div>
                      ) : (
                        <div className="absolute right-[-16px] top-7 hidden md:flex items-center">
                          <div className="h-[2px] bg-gradient-to-r from-[#050315]/10 to-[#433bff] w-[16px] 
                                       group-hover:w-[20px] transition-all duration-300"></div>
                          <div className="w-2 h-2 rounded-full bg-[#433bff] opacity-0 
                                       group-hover:opacity-100 transition-all duration-300"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* See More/See Less Button */}
        <div className="mt-24 text-center">
          <button 
            onClick={toggleShowAll}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2f27ce] hover:bg-[#433bff] transition-colors duration-300"
          >
            {showAll ? (
              <>
                See Less
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
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
  );
};

export default Projects;