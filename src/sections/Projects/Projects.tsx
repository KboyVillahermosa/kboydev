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
      imageUrl: "/placeholder-project.jpg",
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
                        
                        {/* Connect line to the timeline - left-to-center */}
                        <div className="absolute left-[-16px] top-7 w-[16px] h-[1px] bg-slate-300 hidden md:block"></div>
                      </div>
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
                    {/* ... rest of mobile text content ... */}
                  </div>

                  <div className={`w-full md:hidden ${index % 2 === 1 ? 'order-1' : 'order-2'} mb-6`}>
                    {/* Project image (mobile view) */}
                    <div className="overflow-hidden rounded-lg shadow-md bg-white p-2">
                      {/* ... image content ... */}
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