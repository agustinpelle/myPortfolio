import { Code, Layout, Star } from "lucide-react";
import { useState } from "react";

const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["React", "JavaScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    icon: Code,
    items: ["Node.js", "Python", , "MongoDB", "Django"],
  },
  {
    category: "Other",
    icon: Star,
    items: ["GIT", "Pentesting", "Linux",],
  },
];

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className="py-20 px-4 relative" id="skills">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent blur-xl" />
      <div className="max-w-6xl mx-auto space-y-12 relative">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Habilidades & Tecnologías
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Estas son las tecnologías y herramientas que manejo. Siempre estoy aprendiendo y mejorando mis habilidades.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map(({ category, icon: Icon, items }) => (
            <div
              key={category}
              className="p-6 bg-slate-900/50 rounded-lg border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-slate-100">{category}</h3>
              </div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 transition-all duration-300"
                    onMouseEnter={() => setHoveredSkill(item)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                      hoveredSkill === item ? 'bg-cyan-400' : 'bg-purple-400'
                    }`} />
                    <span className={`transition-colors duration-300 ${
                      hoveredSkill === item ? 'text-cyan-400' : 'text-slate-300'
                    }`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
