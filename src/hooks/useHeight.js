import { useEffect, useState } from "react";

const useHeight = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updatedScroll = () => {
      // body.scrollTop is the actual scroll container in this app
      const scrollY = 
        document.body.scrollTop ||
        document.documentElement.scrollTop || 
        window.scrollY || 
        window.pageYOffset || 
        0;
      
      setHeight(scrollY);
    };
    
    // Set initial value immediately
    updatedScroll();
    
    // Listen to scroll on body (primary) and window (fallback)
    document.body?.addEventListener("scroll", updatedScroll, { passive: true });
    window.addEventListener("scroll", updatedScroll, { passive: true });

    return () => {
      document.body?.removeEventListener("scroll", updatedScroll);
      window.removeEventListener("scroll", updatedScroll);
    };
  }, []);

  return { height };
};

export default useHeight;
