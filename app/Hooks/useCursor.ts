import { useState, useEffect } from "react";

function useCursor(): { x: number; y: number } {
  const [position, setPosition] = useState({ x: -999, y: -999 });
  
  useEffect(() => {
    const handleMove = (e: globalThis.MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);
  
  return position;
}

export default useCursor;