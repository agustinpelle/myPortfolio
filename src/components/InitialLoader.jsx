import { useEffect, useState } from "react";

const InitialLoader = ({ onFinish }) => {
  const [lines, setLines] = useState([]);
  const [fadeOut, setFadeOut] = useState(false); // Estado para la animación de desvanecimiento
  const messages = [
    "[+] Booting system...",
    "[+] Initializing Agustín Pelle v1.0",
    "[+] Loading UI components...",
    "[+] Establishing secure connection...",
    "[+] Done ✅"
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setLines((prev) => [...prev, messages[index]]);
      index++;
      if (index >= messages.length) {
        clearInterval(interval);
        setFadeOut(true); // Comienza el fadeOut cuando termine de mostrar los mensajes
        setTimeout(() => onFinish(), 800); // Llama a onFinish después de que todos los mensajes se muestren
      }
    }, 500);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#0f111a] text-[#7FDBFF] font-mono text-sm flex justify-center items-center transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <div className="flex flex-col justify-center items-center">
        {lines.map((line, idx) => (
          <p key={idx} className="animate-pulse">{line}</p>
        ))}
      </div>
    </div>
  );
};

export default InitialLoader;
