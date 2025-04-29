import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart functionality, payment processing, and admin dashboard.",
      technologies: ["Next.js", "Typescript", "Tailwind CSS", "Stripe"],
      imageUrl: "/images/about.png",
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      id: 2,
      title: "Mobile Fitness App",
      description: "A React Native app for tracking workouts, setting goals, and monitoring progress with visual analytics.",
      technologies: ["React Native", "Expo", "Firebase", "Chart.js"],
      imageUrl: "/images/mobile.jpg",
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description: "A collaborative project management tool with real-time updates and customizable workflows.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      imageUrl: "/placeholder-project.jpg",
      demoUrl: "#",
      repoUrl: "#"
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Featured Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Explore some of my recent work showcasing my expertise in web and mobile development.</p>
        </div>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-slate-300 hidden md:block"></div>
          
          {/* Timeline nodes */}
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div key={project.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-teal-500 z-10 hidden md:block ring-4 ring-teal-50"></div>
                
                {/* Date indicator */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-8 hidden md:block">
                  <span className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded-full shadow-sm">
                    {2023 - index}
                  </span>
                </div>
                
                {/* Project content */}
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch`}>
                  {/* Left side (or right on odd items) */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    {index % 2 === 0 ? (
                      // Text content when index is even (0, 2, 4...)
                      <div className="relative">
                        <h3 className="text-2xl font-bold mb-3 text-slate-800">{project.title}</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                        
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2 justify-end">
                            {project.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex} 
                                className="border border-slate-200 bg-white text-slate-700 text-xs px-3 py-1 rounded-full shadow-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex space-x-6 justify-end">
                          <Link 
                            href={project.demoUrl} 
                            className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center transition-colors"
                            aria-label={`View ${project.title} demo`}
                          >
                            <span>View Project</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </Link>
                          <Link 
                            href={project.repoUrl}
                            className="text-slate-600 hover:text-slate-800 font-medium text-sm flex items-center transition-colors"
                            aria-label={`View ${project.title} source code`}
                          >
                            <span>Source Code</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </Link>
                        </div>
                        
                        {/* Connect line to the timeline - right-to-center */}
                        <div className="absolute right-[-16px] top-7 w-[16px] h-[1px] bg-slate-300 hidden md:block"></div>
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
                              <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                                <span className="text-sm font-medium">Project Preview</span>
                              </div>
                            )}
                            
                            {/* Subtle overlay with project title on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                              <div className="p-6 w-full">
                                <h4 className="text-white font-medium text-lg">{project.title}</h4>
                                <p className="text-teal-200 text-sm mt-1">View project details</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Browser mockup frame - optional */}
                        <div className="absolute -top-2 -left-2 -right-2 h-6 bg-slate-800 rounded-t-lg hidden md:block">
                          <div className="flex items-center h-full px-3 space-x-1">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          </div>
                        </div>
                        
                        {/* Connect line to the timeline - right-to-center for odd index left images */}
                        <div className="absolute right-[-16px] top-7 w-[16px] h-[1px] bg-slate-300 hidden md:block"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Empty space for timeline separation */}
                  <div className="hidden md:block md:w-2/12"></div>
                  
                  {/* Right side (or left on odd items) */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                    {index % 2 === 0 ? (
                      // Image when index is even (0, 2, 4...)
                      project.technologies.includes("React Native") || project.technologies.includes("Mobile") ? (
                        <div className="relative hidden md:block">
                          <div className="max-w-[220px] mx-auto">
                            <div className="relative rounded-[38px] border-[12px] border-slate-800 shadow-xl bg-black p-px">
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
                                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900 text-white">
                                    <span className="text-sm font-medium">{project.title}</span>
                                  </div>
                                )}
                              </div>
                              
                              {/* Home indicator */}
                              <div className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 w-[70px] h-[4px] bg-white rounded-full opacity-90"></div>
                            </div>
                          </div>
                          
                          {/* Connect line to the timeline */}
                          <div className="absolute left-[-16px] top-28 w-[16px] h-[1px] bg-slate-300 hidden md:block"></div>
                        </div>
                      ) : (
                        <div className="overflow-hidden rounded-lg shadow-lg bg-slate-800 p-0">
                          {/* Browser mockup frame */}
                          <div className="h-8 bg-slate-800 rounded-t-lg flex items-center px-3 space-x-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <div className="ml-4 w-1/2 h-4 bg-slate-700 rounded-full"></div>
                          </div>
                          
                          <div className="aspect-w-16 aspect-h-9 relative overflow-hidden border-t border-slate-700">
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
                              <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                                <span className="text-sm font-medium">Project Preview</span>
                              </div>
                            )}
                            
                            {/* Overlay with project title on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                              <div className="p-6 w-full">
                                <h4 className="text-white font-medium text-lg">{project.title}</h4>
                                <p className="text-teal-200 text-sm mt-1">View project details</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    ) : (
                      // Text content when index is odd (1, 3, 5...)
                      <div className="relative">
                        <h3 className="text-2xl font-bold mb-3 text-slate-800">{project.title}</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                        
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2 justify-end">
                            {project.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex} 
                                className="border border-slate-200 bg-white text-slate-700 text-xs px-3 py-1 rounded-full shadow-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex space-x-6 justify-end">
                          <Link 
                            href={project.demoUrl} 
                            className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center transition-colors"
                            aria-label={`View ${project.title} demo`}
                          >
                            <span>View Project</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </Link>
                          <Link 
                            href={project.repoUrl}
                            className="text-slate-600 hover:text-slate-800 font-medium text-sm flex items-center transition-colors"
                            aria-label={`View ${project.title} source code`}
                          >
                            <span>Source Code</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </Link>
                        </div>
                        
                        {/* Connect line to the timeline - left-to-center */}
                        <div className="absolute left-[-16px] top-7 w-[16px] h-[1px] bg-slate-300 hidden md:block"></div>
                      </div>
                    )}
                  </div>

                  {/* Mobile-specific ordering */}
                  <div className={`w-full md:hidden ${index % 2 === 1 ? 'order-2' : 'order-1'}`}>
                    {/* Project text content (mobile view) */}
                    <h3 className="text-2xl font-bold mb-3 text-slate-800">{project.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="border border-slate-200 bg-white text-slate-700 text-xs px-3 py-1 rounded-full shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-6">
                      <Link 
                        href={project.demoUrl} 
                        className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center transition-colors"
                        aria-label={`View ${project.title} demo`}
                      >
                        <span>View Project</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                      <Link 
                        href={project.repoUrl}
                        className="text-slate-600 hover:text-slate-800 font-medium text-sm flex items-center transition-colors"
                        aria-label={`View ${project.title} source code`}
                      >
                        <span>Source Code</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <div className={`w-full md:hidden ${index % 2 === 1 ? 'order-1' : 'order-2'} mb-6`}>
                    {/* Enhanced Mobile device mockup */}
                    <div className="max-w-[280px] mx-auto">
                      <div className="relative rounded-[38px] border-[12px] border-slate-800 shadow-xl bg-black p-px">
                        {/* Bezel/Frame */}
                        <div className="absolute inset-0 rounded-[28px] border border-slate-700 pointer-events-none"></div>
                        
                        {/* Status Bar */}
                        <div className="absolute top-0 left-0 right-0 h-6 px-5 flex justify-between items-center z-20 text-white text-xs">
                          <div>9:41</div>
                          <div className="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5H6a1 1 0 01-1-1 1 1 0 011-1h5V4a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5h-5a1 1 0 110-2h5V8a1 1 0 00-1-1h-3z" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-[14px] z-10"></div>
                        
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
                            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900 text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm font-medium">{project.title}</span>
                              <span className="text-xs mt-1 text-slate-400">Mobile App</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Volume buttons */}
                        <div className="absolute left-[-20px] top-[100px] w-[8px] h-[30px] bg-slate-700 rounded-l-lg"></div>
                        <div className="absolute left-[-20px] top-[140px] w-[8px] h-[60px] bg-slate-700 rounded-l-lg"></div>
                        
                        {/* Power button */}
                        <div className="absolute right-[-20px] top-[120px] w-[8px] h-[40px] bg-slate-700 rounded-r-lg"></div>
                        
                        {/* Home indicator */}
                        <div className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 w-[100px] h-[5px] bg-white rounded-full opacity-90"></div>
                      </div>
                      
                      {/* Reflection effect */}
                      <div className="w-[70%] h-[4px] bg-gradient-to-r from-transparent via-slate-300/20 to-transparent mx-auto mt-3 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-24 text-center">
          <Link 
            href="/all-projects" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;