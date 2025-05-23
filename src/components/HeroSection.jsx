import { Github, Mail, Terminal } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState, useRef } from "react";

const HeroSection = ({ onContactClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedPart1, setTypedPart1] = useState("");
  const [typedPart2, setTypedPart2] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typingFinished, setTypingFinished] = useState(false);

  const part1 =
    "Geek desde chico, siempre fui un entusiasta de la tecnología. Aprendí a moverme solo entre manuales, foros y tutoriales, buscando entender cómo funcionan las cosas por dentro.";
  const part2 =
    "Actualmente estudio Tecnicatura Universitaria en Desarollo Web en la Universidad Nacional de La Matanza.";

  const index1 = useRef(0);
  const index2 = useRef(0);
  const typeText1 = useRef(null);
  const typeText2 = useRef(null);
  const cursorBlink = useRef(null);
  const timeout1 = useRef(null);
  const timeout2 = useRef(null);
  const hasTyped = useRef(false);

  useEffect(() => {
    if (hasTyped.current) return; // Evitar reiniciar el efecto si ya se ejecutó
    hasTyped.current = true;

    setIsVisible(true);

    const delayBeforeTyping = 1000;
    timeout1.current = setTimeout(() => {
      typeText1.current = setInterval(() => {
        if (index1.current < part1.length) {
          setTypedPart1(part1.substring(0, index1.current + 1));
          index1.current++;
        } else {
          clearInterval(typeText1.current);
          setCursorVisible(false);

          timeout2.current = setTimeout(() => {
            setCursorVisible(true);
            typeText2.current = setInterval(() => {
              if (index2.current < part2.length) {
                setTypedPart2(part2.substring(0, index2.current + 1));
                index2.current++;
              } else {
                clearInterval(typeText2.current);
                setCursorVisible(false);
                setTypingFinished(true);
              }
            }, 40);
          }, 800);
        }
      }, 40);
    }, delayBeforeTyping);

    cursorBlink.current = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => {
      clearTimeout(timeout1.current);
      clearTimeout(timeout2.current);
      clearInterval(typeText1.current);
      clearInterval(typeText2.current);
      clearInterval(cursorBlink.current);
    };
  }, []);

  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4">
      <div
        className={`space-y-6 max-w-3xl transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-[#7FDBFF]">
          <Terminal size={16} className="animate-pulse" />
          <span className="text-sm font-mono">Backend Developer</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7FDBFF] to-white animate-text">
            Agustín Pelle
          </span>
        </h1>

        <div className="text-lg md:text-xl text-[#B0BEC5] font-mono leading-relaxed min-h-[120px]">
          <p>
            {typedPart1}
            {cursorVisible && typedPart2 === "" && (
              <span className="inline-block w-2 h-5 ml-1 align-middle bg-[#7FDBFF] animate-cursor"></span>
            )}
          </p>
          <br />
          <p>
            {typedPart2}
            {cursorVisible && typedPart2 !== "" && (
              <span className="inline-block w-2 h-5 ml-1 align-middle bg-[#7FDBFF] animate-cursor"></span>
            )}
          </p>
        </div>

        <div className="flex gap-4 justify-center pt-4">
          <Button
            className="gap-2 bg-[#2979FF] hover:bg-[#2962FF] transition-all duration-300 transform hover:scale-105"
            onClick={onContactClick}
            disabled={!typingFinished}
          >
            <Mail size={20} />
            Contact Me
          </Button>

          <Button
            className="gap-2 border-[#B388EB]/30 bg-[#B388EB]/5 hover:bg-[#8EAAF8]/10 text-[#EAEAEA] transition-all duration-300 group"
            variant="outline"
          >
            <Github
              size={20}
              className="mr-2 group-hover:text-[#8EAAF8] transition-colors"
            />
            <a href="https://github.com/agustinpelle">GitHub</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
