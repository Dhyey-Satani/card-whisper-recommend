
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

type AnimationOptions = {
  duration?: number;
  delay?: number;
  ease?: string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  scrollTrigger?: boolean;
  scrub?: boolean | number;
  stagger?: number;
};

export const useGsapAnimation = (
  selector: string,
  options: AnimationOptions = {}
) => {
  const el = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    if (elements.length === 0) return;
    
    const {
      duration = 0.8,
      delay = 0,
      ease = 'power3.out',
      from,
      to = { opacity: 1, y: 0 },
      scrollTrigger,
      scrub,
      stagger = 0.1
    } = options;

    const ctx = gsap.context(() => {
      // Default 'from' state if not specified
      const defaultFrom = { opacity: 0, y: 20 };
      const fromVars = from || defaultFrom;

      const animation = gsap.fromTo(
        elements,
        fromVars,
        {
          ...to,
          duration,
          delay,
          ease,
          stagger: elements.length > 1 ? stagger : 0,
          scrollTrigger: scrollTrigger ? {
            trigger: elements[0],
            start: 'top bottom-=100',
            end: 'bottom top',
            toggleActions: 'play none none none',
            scrub: scrub || false,
          } : undefined
        }
      );

      return () => {
        animation.kill();
      };
    });

    return () => ctx.revert();
  }, [selector, options]);

  return el;
};
