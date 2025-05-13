import { useEffect, useRef, useState } from "react";
import HeroWrapper from "../components/HeroWrapper";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import { Star, ChevronDown } from "lucide-react";
import Footer from "../components/Footer";  // Importamos el Footer

const Index = () => {
  const [showScroll, setShowScroll] = useState(false);
  const isAutoScrolling = useRef(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isAutoScrolling.current) {
        setShowScroll(window.scrollY <= 50 && heroLoaded);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroLoaded]);

  const handleScrollClick = () => {
    const distance = window.innerHeight * 0.95;
    const duration = 800;
    const start = window.scrollY;
    const end = start + distance;
    const startTime = performance.now();
    isAutoScrolling.current = true;

    const easeOutCubic = (t) => (--t) * t * t + 1;

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      window.scrollTo(0, start + (end - start) * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        isAutoScrolling.current = false;
        setShowScroll(true);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("heroLoaded");
    if (alreadyLoaded) {
      setHeroLoaded(true);
    }
  }, []);

  const handleHeroLoad = () => {
    if (!heroLoaded) {
      setHeroLoaded(true);
      setShowScroll(true);
      sessionStorage.setItem("heroLoaded", "true");
    }
  };

  return (
    <div className="min-h-screen bg-[#1E1E2F]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#B388EB]/10 via-transparent to-transparent blur-xl" />
        {/* Floating stars */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Star
              key={i}
              size={Math.random() * 10 + 5}
              className="absolute text-[#8EAAF8]/10 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        <HeroWrapper onHeroLoad={handleHeroLoad} />
        {heroLoaded && (
          <div
            onClick={handleScrollClick}
            className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10 cursor-pointer transition-opacity duration-500 ease-in-out ${
              showScroll ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="px-4 py-2 bg-[#8EAAF8]/20 backdrop-blur-sm rounded-full border border-[#8EAAF8]/30 shadow-lg shadow-[#8EAAF8]/10 hover:scale-105 transition-transform duration-300 ease-in-out">
              <ChevronDown className="text-[#8EAAF8] w-5 h-5 mx-auto mt-1" />
            </div>
          </div>
        )}

        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>

      {/* Agregamos el Footer aquí */}
      <Footer />
    </div>
  );
};

export default Index;
