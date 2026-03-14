import { useEffect, useState } from "react";

 function useScrolled(threshold: number = 60): boolean {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);
  
  return scrolled;
}



export default useScrolled;