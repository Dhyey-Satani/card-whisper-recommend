
import React, { useEffect, useRef } from 'react';
import CardResult from './CardResult';
import { CreditCardRecommendation } from '@/services/creditCardService';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface CardListProps {
  isLoading: boolean;
  showResults: boolean;
  recommendations?: CreditCardRecommendation[];
}

const CardList = ({ isLoading, showResults, recommendations = [] }: CardListProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);
  const loadingTextRef = useRef<HTMLParagraphElement>(null);

  // Entry animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom-=100',
        onEnter: () => {
          if (headingRef.current && subheadingRef.current) {
            gsap.fromTo(
              headingRef.current,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
            );
            
            gsap.fromTo(
              subheadingRef.current,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power2.out' }
            );
          }
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  // Loading spinner animation
  useEffect(() => {
    if (isLoading && spinnerRef.current && loadingTextRef.current) {
      const spinnerTl = gsap.timeline({ repeat: -1 });
      spinnerTl.to(spinnerRef.current, { 
        rotation: 360, 
        duration: 1.5, 
        ease: 'linear' 
      });
      
      gsap.fromTo(
        loadingTextRef.current,
        { opacity: 0.5 },
        { 
          opacity: 1, 
          duration: 1, 
          repeat: -1, 
          yoyo: true,
          ease: 'power1.inOut'
        }
      );
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <section ref={sectionRef} className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 ref={headingRef} className="text-2xl font-bold mb-8">Finding Your Best Matches</h2>
          <div className="flex justify-center">
            <div 
              ref={spinnerRef} 
              className="rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"
            ></div>
          </div>
          <p 
            ref={loadingTextRef} 
            className="mt-6 text-gray-600"
          >
            Analyzing credit cards based on your preferences...
          </p>
        </div>
      </section>
    );
  }

  if (!showResults) {
    return null;
  }

  return (
    <section ref={sectionRef} className="py-12 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 
          ref={headingRef} 
          className="text-2xl font-bold mb-2 text-center"
        >
          Your Personalized Credit Card Recommendations
        </h2>
        <p 
          ref={subheadingRef} 
          className="text-center text-gray-600 mb-8"
        >
          Based on your preferences, we've found {recommendations.length} credit cards that match your profile
        </p>
        
        {recommendations.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">No cards match your criteria. Try adjusting your preferences.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((card, index) => (
              <CardResult key={card.id} card={card} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CardList;
