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
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-[#dedcff] hidden md:block"></div>
          
          {/* Timeline nodes */}
          <div className="space-y-32">
            {visibleProjects.map((project, index) => (
              <div key={project.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-[#433bff] z-10 hidden md:block ring-4 ring-[#dedcff]/30"></div>
                
                {/* Date indicator */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-8 hidden md:block">
                  <span className="text-xs text-[#050315]/60 bg-[#fbfbfe] px-2 py-1 rounded-full shadow-sm border border-[#dedcff]">
                    projects
                  </span>
                </div>
                
                {/* Project content */}
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch`}>
                  {/* Left side (or right on odd items) */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    {index % 2 === 0 ? (
                      // Text content when index is even (0, 2, 4...)
                      <div className="relative">
                        <h3 className="text-2xl font-bold mb-3 text-[#050315]">{project.title}</h3>
                        <p className="text-[#050315]/80 mb-6 leading-relaxed">{project.description}</p>
                        
                        <div className="mb-6">
                          <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : ''}`}>
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
                        
                        <div className={`flex space-x-6 ${index % 2 === 0 ? 'justify-end' : ''}`}>
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
                        
                        {/* Connect line to the timeline - right-to-center */}
                        <div className="absolute right-[-16px] top-7 w-[16px] h-[1px] bg-[#dedcff] hidden md:block"></div>
                      </div>
                    ) : (
                      // Image when index is odd (1, 3, 5...)
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
                            
                            {/* Subtle overlay with project title on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050315]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                              <div className="p-6 w-full">
                                <h4 className="text-white font-medium text-lg">{project.title}</h4>
                                <p className="text-[#dedcff] text-sm mt-1">View project details</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Browser mockup frame - optional */}
                        <div className="absolute -top-2 -left-2 -right-2 h-6 bg-[#050315] rounded-t-lg hidden md:block">
                          <div className="flex items-center h-full px-3 space-x-1">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          </div>
                        </div>
                        
                        {/* Connect line to the timeline - right-to-center for odd index left images */}
                        <div className="absolute right-[-16px] top-7 w-[16px] h-[1px] bg-[#dedcff] hidden md:block"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Empty space for timeline separation */}
                  <div className="hidden md:block md:w-2/12"></div>
                  
                  {/* Rest of your existing code for project display... */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                    {/* Your existing layout for right side content */}
                    {/* ... */}
                    {/* Keep your existing code here */}
                    {index % 2 === 0 ? (
                      // Image when index is even (0, 2, 4...)
                      project.technologies.includes("React Native") || project.technologies.includes("Mobile") ? (
                        <div className="relative hidden md:block">
                          <div className="max-w-[220px] mx-auto">
                            <div className="relative rounded-[38px] border-[12px] border-[#050315] shadow-xl bg-black p-px">
                              {/* Notch */}
                              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90px] h-[25px] bg-black rounded-b-[14px] z-10"></div>
                              
                              {/* Actual Screen */}
                              <div className="overflow-hidden rounded-[26px] aspect-[9/19.5]">
                                {project.imageUrl ? (
                                  <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    width={400}
                                    height={800}
                                    className="object-cover w-full h-full"
                                  />
                                ) : (
                                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#050315] to-[#2f27ce] text-white">
                                    <span className="text-sm font-medium">{project.title}</span>
                                  </div>
                                )}
                              </div>
                              
                              {/* Home indicator */}
                              <div className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 w-[70px] h-[4px] bg-white rounded-full opacity-90"></div>
                            </div>
                          </div>
                          
                          {/* Connect line to the timeline */}
                          <div className="absolute left-[-16px] top-28 w-[16px] h-[1px] bg-[#dedcff] hidden md:block"></div>
                        </div>
                      ) : (
                        <div className="overflow-hidden rounded-lg shadow-lg bg-[#050315] p-0">
                          {/* Browser mockup frame */}
                          <div className="h-8 bg-[#050315] rounded-t-lg flex items-center px-3 space-x-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <div className="ml-4 w-1/2 h-4 bg-[#050315]/70 rounded-full"></div>
                          </div>
                          
                          <div className="aspect-w-16 aspect-h-9 relative overflow-hidden border-t border-[#050315]/70">
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
                            
                            {/* Overlay with project title on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050315]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                              <div className="p-6 w-full">
                                <h4 className="text-white font-medium text-lg">{project.title}</h4>
                                <p className="text-[#dedcff] text-sm mt-1">View project details</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    ) : (
                      // Text content when index is odd (1, 3, 5...)
                      <div className="relative">
                        <h3 className="text-2xl font-bold mb-3 text-[#050315]">{project.title}</h3>
                        <p className="text-[#050315]/80 mb-6 leading-relaxed">{project.description}</p>
                        
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2 justify-end">
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
                        
                        <div className="flex space-x-6 justify-end">
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
                        
                        {/* Connect line to the timeline - left-to-center */}
                        <div className="absolute left-[-16px] top-7 w-[16px] h-[1px] bg-[#dedcff] hidden md:block"></div>
                      </div>
                    )}
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