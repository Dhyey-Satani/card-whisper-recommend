import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import CosmicNebulaMastercard from "./ui/cursor-wander-card";
import CreditCard3DViewer from "./ui/CreditCard3DViewer";
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out'
        }
      });
      tl.fromTo(headingRef.current, {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8
      });
      tl.fromTo(paragraphRef.current, {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6
      }, "-=0.4");
      tl.fromTo(".stat-box", {
        opacity: 0,
        y: 30,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.1
      }, "-=0.3");
      tl.fromTo(buttonRef.current, {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 0.5
      }, "-=0.2");
    }, heroRef);
    return () => ctx.revert();
  }, []);
  return <section ref={heroRef} className="bg-gradient-to-r from-background to-card bg-background dark:from-[#191c25] dark:to-[#23263a] text-foreground py-16 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h1 ref={headingRef} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Find the Perfect Indian Credit Card for You
        </h1>
        <p ref={paragraphRef} className="text-lg md:text-xl mb-8 text-muted-foreground">
          Compare top Indian credit cards and get personalized recommendations based on your spending habits and financial profile.
        </p>
        <div className="flex justify-center bg-transparent px-0 mx-0 my-[46px]">
          <CosmicNebulaMastercard cardholderName="YOUR NAME" width="450px" height="240px" className="w-[450px] max-w-full" />
        </div>
        <div ref={statsRef} className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="stat-box bg-card/80 dark:bg-card/70 backdrop-blur-md rounded-lg p-4 flex-1 min-w-[180px] max-w-[200px] text-foreground shadow card-shadow transition-colors">
            <h3 className="text-2xl font-bold">₹0</h3>
            <p className="text-sm text-muted-foreground">Annual Fee Options</p>
          </div>
          <div className="stat-box bg-card/80 dark:bg-card/70 backdrop-blur-md rounded-lg p-4 flex-1 min-w-[180px] max-w-[200px] text-foreground shadow card-shadow transition-colors">
            <h3 className="text-2xl font-bold">5%</h3>
            <p className="text-sm text-muted-foreground">Cashback Rewards</p>
          </div>
          <div className="stat-box bg-card/80 dark:bg-card/70 backdrop-blur-md rounded-lg p-4 flex-1 min-w-[180px] max-w-[200px] text-foreground shadow card-shadow transition-colors">
            <h3 className="text-2xl font-bold">10+</h3>
            <p className="text-sm text-muted-foreground">Top Indian Banks</p>
          </div>
        </div>
        <a ref={buttonRef} href="#results" className="inline-block bg-primary text-primary-foreground font-bold py-3 px-8 rounded-full hover:bg-primary/80 transition-colors" onClick={e => {
        e.preventDefault();
        const form = document.querySelector('form');
        if (form) {
          if (window.gsap && window.gsap.to) {
            window.gsap.to(window, {
              duration: 1,
              scrollTo: {
                y: form,
                offsetY: 50
              },
              ease: "power2.inOut"
            });
          } else {
            form.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest"
            });
          }
        }
      }}>
          Find Your Card
        </a>
      </div>
    </section>;
};
export default Hero;