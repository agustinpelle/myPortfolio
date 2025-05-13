import { Github, Twitter, Linkedin, Code, Cpu, GitBranch } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-[#B0BEC5] py-7 px-6">
      <div className="max-w-7.5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Branding */}
        <div className="text-center md:text-left space-y-1">
          <h2 className="text-2xl font-bold text-[#7FDBFF] hover:text-[#E91E63] transition-colors">
            Agustín Pelle
          </h2>
          <p className="text-sm text-[#8EAAF8] italic">
            Full Stack Developer · Cybersecurity Enthusiast
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-center gap-6 text-[#8EAAF8]">
          <a
            href="https://github.com/arcv1337"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E91E63] transition-colors"
          >
            <Github size={28} />
          </a>
          <a
            href="https://twitter.com/agustinpelle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E91E63] transition-colors"
          >
            <Twitter size={28} />
          </a>
          <a
            href="https://linkedin.com/in/agustinpelle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E91E63] transition-colors"
          >
            <Linkedin size={28} />
          </a>
        </div>

        {/* Tech Stack */}
        <div className="flex justify-center md:justify-end gap-6 text-[#7FDBFF]">
          <Code size={24} />
          <GitBranch size={24} />
          <Cpu size={24} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
