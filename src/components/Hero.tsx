
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  
  useEffect(() => {
    if (!heroRef.current) return;
    
    const ctx = gsap.context(() => {
      // Timeline for sequential animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      // Animate heading
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }
      );
      
      // Animate paragraph
      tl.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4" // Overlap with previous animation
      );
      
      // Animate stats boxes
      tl.fromTo(
        ".stat-box",
        { opacity: 0, y: 30, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.5,
          stagger: 0.1 
        },
        "-=0.3"
      );
      
      // Animate button
      tl.fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2"
      );
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 ref={headingRef} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Find the Perfect Indian Credit Card for You
        </h1>
        <p ref={paragraphRef} className="text-lg md:text-xl mb-8 text-blue-100">
          Compare top Indian credit cards and get personalized recommendations based on your spending habits and financial profile.
        </p>
        <div ref={statsRef} className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="stat-box bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-4 flex-1 min-w-[180px] max-w-[200px]">
            <h3 className="text-2xl font-bold">₹0</h3>
            <p className="text-sm text-blue-100">Annual Fee Options</p>
          </div>
          <div className="stat-box bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-4 flex-1 min-w-[180px] max-w-[200px]">
            <h3 className="text-2xl font-bold">5%</h3>
            <p className="text-sm text-blue-100">Cashback Rewards</p>
          </div>
          <div className="stat-box bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-4 flex-1 min-w-[180px] max-w-[200px]">
            <h3 className="text-2xl font-bold">10+</h3>
            <p className="text-sm text-blue-100">Top Indian Banks</p>
          </div>
        </div>
        <a 
          ref={buttonRef}
          href="#results" 
          className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            const form = document.querySelector('form');
            if (form) {
              gsap.to(window, {
                duration: 1, 
                scrollTo: { y: form, offsetY: 50 },
                ease: "power2.inOut"
              });
            }
          }}
        >
          Find Your Card
        </a>
      </div>
    </section>
  );
};

export default Hero;
