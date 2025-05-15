import { useEffect, useState } from "react";
import InitialLoader from "./InitialLoader";
import HeroSection from "./HeroSection";

// Removed TypeScript interface Props

const HeroWrapper = ({ onHeroLoad, onContactClick }) => {
  const [showHero, setShowHero] = useState(false);

  const onFinish = () => {
    console.log("InitialLoader ha terminado");
    setShowHero(true);  // Muestra el HeroSection cuando el InitialLoader termine
    if (onHeroLoad) onHeroLoad();  // Llama a la función onHeroLoad si se pasa como prop
    sessionStorage.setItem("heroLoaded", "true");  // Opcional: Marca que el héroe se cargó
  };

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("heroLoaded");
    if (alreadyLoaded) {
      setShowHero(true);
      if (onHeroLoad) onHeroLoad(); // Ejecuta onHeroLoad si ya estaba cargado
    } else {
      // Aquí, ajusta el tiempo para asegurarte de que el InitialLoader se vea durante más tiempo
      const timer = setTimeout(() => {
        setShowHero(true);
        if (onHeroLoad) onHeroLoad(); // Ejecuta onHeroLoad después del tiempo
      }, 3000); // Cambié el tiempo de espera de 1600ms a 3000ms
      return () => clearTimeout(timer);
    }
  }, [onHeroLoad]);

  return showHero ? <HeroSection onContactClick={onContactClick} /> : <InitialLoader onFinish={onFinish} />;
};

export default HeroWrapper;
