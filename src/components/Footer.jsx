import { Github, Twitter, Linkedin, Code, Cpu, GitBranch } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-[#B0BEC5] py-8">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        {/* Branding */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-extrabold text-[#7FDBFF] hover:text-[#E91E63] transition-colors">
            Agustín Pelle
          </h2>
          <p className="text-sm text-[#8EAAF8] italic">Full Stack Developer | Cybersecurity Enthusiast</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start space-x-10 text-[#8EAAF8]">
          <a href="https://github.com/agustinpelle" target="_blank" rel="noopener noreferrer" className="hover:text-[#E91E63]">
            <Github size={32} />
          </a>
          <a href="https://twitter.com/agustinpelle" target="_blank" rel="noopener noreferrer" className="hover:text-[#E91E63]">
            <Twitter size={32} />
          </a>
          <a href="https://linkedin.com/in/agustinpelle" target="_blank" rel="noopener noreferrer" className="hover:text-[#E91E63]">
            <Linkedin size={32} />
          </a>
        </div>

        {/* Tech Stack */}
        <div className="flex items-center space-x-6 text-[#7FDBFF]">
          <Code size={28} />
          <GitBranch size={28} />
          <Cpu size={28} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
