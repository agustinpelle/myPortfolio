import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Github, Link } from "lucide-react";
import { useState } from "react";
import Modal from "./ui/modal";

const ProjectCard = ({ title, description, image, techStack, demoLink, githubLink, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Card 
        className="overflow-hidden transition-all duration-300 bg-[#1E1E2F]/50 border-[#B388EB]/20 hover:border-[#8EAAF8] cursor-default"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden aspect-video">
          <img
            src={image}
            alt={title}
            className={`object-cover w-full h-full transform transition-transform duration-500 ${
              isHovered ? 'scale-105' : 'scale-100'
            } }`} // Desplaza horizontalmente solo el tercer card
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-[#1E1E2F] to-transparent transition-opacity duration-300 ${
              isHovered ? 'opacity-90' : 'opacity-70'
            }`}
          />
        </div>

        <CardHeader>
          <CardTitle className="text-xl font-semibold bg-gradient-to-r from-[#B388EB] to-[#8EAAF8] bg-clip-text text-transparent">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-[#EAEAEA]">{description}</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-[#B388EB]/10 text-[#EAEAEA] border border-[#B388EB]/20 rounded-full transition-colors hover:bg-[#8EAAF8]/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="gap-4">
          <Button asChild className="gap-2 bg-[#FFB6C1] hover:bg-[#FF9AAF] text-[#1E1E2F] transition-all duration-300 font-medium shadow-lg shadow-[#FFB6C1]/20">
            <a href={demoLink} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
              <Link size={18} />
              Live Demo
            </a>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className="gap-2 border-[#B388EB]/30 bg-[#B388EB]/5 hover:bg-[#8EAAF8]/10 text-[#EAEAEA] transition-all duration-300 group"
          >
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center" onClick={e => e.stopPropagation()}>
              <Github size={18} className="mr-2 group-hover:text-[#8EAAF8] transition-colors" />
              Code
            </a>
          </Button>
        </CardFooter>
      </Card>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={title}>
        <img src={image} alt={title} className="w-full rounded mb-4" />
        <p className="text-[#EAEAEA] mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-[#B388EB]/10 text-[#EAEAEA] border border-[#B388EB]/20 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-[#7FDBFF] hover:underline">
              Live Demo
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-[#7FDBFF] hover:underline">
              GitHub
            </a>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;
