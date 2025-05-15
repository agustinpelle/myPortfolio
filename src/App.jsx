import { ToastProvider, ToastViewport } from "./components/ui/toast";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useState, useEffect, useRef } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Agregamos la ref aquí
  const contactRef = useRef(null);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ToastProvider>
          <div className="w-full">
            <button
              onClick={toggleTheme}
              className="fixed top-4 right-4 z-50 p-2 bg-gray-200 dark:bg-gray-800 rounded"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? "🌞" : "🌙"}
            </button>
            <ToastViewport />
            <Sonner />
            <BrowserRouter>
              <Routes>
                {/* Pasamos la ref a Index */}
                <Route path="/" element={<Index contactRef={contactRef} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </ToastProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
