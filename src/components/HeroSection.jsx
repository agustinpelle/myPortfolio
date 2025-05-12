import { Github, Mail, Terminal } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedPart1, setTypedPart1] = useState("");
  const [typedPart2, setTypedPart2] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  const part1 =
    "GGeek desde chico, siempre fui un entusiasta de la tecnología. Aprendí a moverme solo entre manuales, foros y tutoriales, buscando entender cómo funcionan las cosas por dentro.";
  const part2 =
    "AActualmente estudio Tecnicatura Universitaria en Desarollo Web en la Universidad Nacional de La Matanza.";

  useEffect(() => {
    setIsVisible(true);
    let index1 = 0;
    let index2 = 0;
    let typeText1;
    let typeText2;

    // Retraso para iniciar el tipeo de la primera parte
    const delayBeforeTyping = 1000; // 1 segundo de retraso
    setTimeout(() => {
      // Tipeo de la primera parte
      typeText1 = setInterval(() => {
        if (index1 < part1.length) {
          setTypedPart1((prev) => prev + part1.charAt(index1));
          index1++;
        } else {
          clearInterval(typeText1);
          setCursorVisible(false);

          // Espera antes de iniciar la segunda parte
          setTimeout(() => {
            setCursorVisible(true);
            typeText2 = setInterval(() => {
              if (index2 < part2.length) {
                setTypedPart2((prev) => prev + part2.charAt(index2));
                index2++;
              } else {
                clearInterval(typeText2);
                setCursorVisible(false);
              }
            }, 40);
          }, 800); // Delay entre la primera y segunda línea
        }
      }, 40);
    }, delayBeforeTyping);

    // Animación del cursor
    const cursorBlink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(typeText1);
      clearInterval(typeText2);
      clearInterval(cursorBlink);
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
          <span className="text-sm font-mono">Full Stack Developer</span>
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
          <Button className="gap-2 bg-[#2979FF] hover:bg-[#2962FF] transition-all duration-300 transform hover:scale-105">
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
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
