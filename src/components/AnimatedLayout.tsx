
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

interface AnimatedLayoutProps {
  children: React.ReactNode;
}

const AnimatedLayout: React.FC<AnimatedLayoutProps> = ({ children }) => {
  const location = useLocation();
  const mainRef = useRef<HTMLDivElement>(null);
  
  // Page change animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page enter animation
      gsap.fromTo(
        mainRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          ease: 'power2.out',
          clearProps: 'all'
        }
      );
    });
    
    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div ref={mainRef} className="animated-page-container">
      {children}
    </div>
  );
};

export default AnimatedLayout;
