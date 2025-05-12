
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with cart management and secure payments.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    techStack: ["TypeScript", "Next.js", "PostgreSQL", "WebSocket"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "AI Image Generator",
    description: "An AI-powered image generation tool using state-of-the-art models.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    techStack: ["Python", "React", "TensorFlow", "AWS"],
    demoLink: "#",
    githubLink: "#",
  },
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('projects');
      if (element) {
        const position = element.getBoundingClientRect();
        // Only show content when the user has scrolled to it
        if (position.top < window.innerHeight - 200) { // Aumentado el offset
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pt-40 pb-20 px-4 relative min-h-screen" id="projects">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2979FF]/5 via-transparent to-transparent blur-xl" />
      <div className={`max-w-6xl mx-auto space-y-16 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7FDBFF] to-white">
            Featured Projects
          </h2>
          <p className="text-[#B0BEC5] max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
