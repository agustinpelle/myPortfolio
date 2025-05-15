
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Buy Or Not",
    description: "Proyecto basado en acciones argentinas y criptomonedas en alza, permite ver el precio de las acciones y criptomonedas en tiempo real.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    techStack: ["React", "Node.js", "JavaScript"],
    demoLink: "#",
    githubLink: "https://github.com/arcv1337/BuyOrNot",
  },
  {
    title: "Portafolio",
    description: "Un portafolio interactivo que muestra mis habilidades técnicas y proyectos. Es esta página web. ",
    image: "public/portfolio.jpg",
    techStack: ["JavaScript", "Tailwind CSS", "React", "Node.js"],
    demoLink: "#",
    githubLink: "https://github.com/arcv1337//",
  },
  {
    title: "Distribuidora La Pluma",
    description: "Distribuidora de productos de ferreteria y repuestos para autos originales. Permite ver el catalogo de productos y realizar pedidos",
    image: "public/la-pluma.jpg",
    techStack: ["JavaScript", "React",],
    demoLink: "https://distribuidoralapluma.netlify.app",
    githubLink: "https://github.com/arcv1337/laPluma-distribuidora",
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
    <section className="pt-45 pb-20 px-4 relative min-h-screen" id="projects">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2979FF]/5 via-transparent to-transparent blur-xl" />
      <div className={`max-w-6xl mx-auto space-y-16 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7FDBFF] to-white">
            Proyectos
          </h2>
          <p className="text-[#B0BEC5] max-w-2xl mx-auto text-lg">
            Aca están algunos de mis proyectos recientes que muestran mis habilidades técnicas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              } ${index === 1 ? 'scale-110 shadow-inner' : ''}
              ${index === 0 ? 'scale-92 shadow-md' : ''}
              ${index === 2 ? 'scale-100 shadow-md' : ''}
              `}
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
