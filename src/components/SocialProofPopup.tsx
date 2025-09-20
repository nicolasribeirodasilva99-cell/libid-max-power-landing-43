import { useState, useEffect } from "react";

export const SocialProofPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentName, setCurrentName] = useState("");
  
  const nomes = ["João", "Marcos", "Pedro", "Lucas", "Carlos", "André", "Felipe", "Ricardo", "Gustavo", "Tiago"];
  const produto = "Libid Max";

  const mostrarPopup = () => {
    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    setCurrentName(nome);
    setIsVisible(true);

    // Fica visível por 4 segundos
    setTimeout(() => {
      setIsVisible(false);
    }, 4000);
  };

  useEffect(() => {
    // Mostra o primeiro depois de 2s
    const initialTimer = setTimeout(mostrarPopup, 2000);

    // Repete a cada 10s
    const intervalTimer = setInterval(mostrarPopup, 10000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  return (
    <div
      className={`
        fixed bottom-5 left-5 bg-white rounded-xl shadow-xl
        px-4 py-3 font-sans text-sm max-w-[90%] w-auto
        flex items-center gap-2 z-[9999]
        transition-all duration-500 ease-in-out
        ${isVisible 
          ? 'translate-x-0 opacity-100' 
          : '-translate-x-full opacity-0 pointer-events-none'
        }
      `}
      style={{ display: isVisible || currentName ? 'flex' : 'none' }}
    >
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      <span className="text-gray-800 font-medium">
        <span className="text-power font-bold">{currentName}</span> acabou de comprar <span className="font-bold">{produto}</span>!
      </span>
    </div>
  );
};