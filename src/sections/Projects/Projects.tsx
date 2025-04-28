
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart functionality, payment processing, and admin dashboard.",
      technologies: ["Next.js", "Typescript", "Tailwind CSS", "Stripe"],
      imageUrl: "/placeholder-project.jpg",
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-300 relative">
                {/* Replace with actual project images */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Project Screenshot
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Link 
                    href={project.demoUrl} 
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700"
                  >
                    Live Demo
                  </Link>
                  <Link 
                    href={project.repoUrl}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded text-sm font-medium hover:bg-gray-300"
                  >
                    Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;