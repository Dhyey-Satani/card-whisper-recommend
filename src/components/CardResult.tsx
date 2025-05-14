import React, { useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard as CreditCardIcon, IndianRupee } from 'lucide-react';
import { CreditCardRecommendation } from '@/services/creditCardService';
import gsap from 'gsap';
import { ScrollArea } from '@/components/ui/scroll-area';

interface CardResultProps {
  card: CreditCardRecommendation;
  index?: number;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);
};

const CardResult = ({ card, index = 0 }: CardResultProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const isFlipped = useRef(false);

  // Entry animation
  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { 
        opacity: 0, 
        y: 50,
        rotationY: -5,
        transformPerspective: 800
      },
      { 
        opacity: 1, 
        y: 0,
        rotationY: 0,
        duration: 0.6,
        delay: index * 0.1, 
        ease: "power3.out"
      }
    );

    // Add hover animations
    const hoverIn = () => {
      gsap.to(cardRef.current, {
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const hoverOut = () => {
      gsap.to(cardRef.current, {
        y: 0,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const cardEl = cardRef.current;
    cardEl.addEventListener("mouseenter", hoverIn);
    cardEl.addEventListener("mouseleave", hoverOut);

    return () => {
      cardEl.removeEventListener("mouseenter", hoverIn);
      cardEl.removeEventListener("mouseleave", hoverOut);
    };
  }, [index]);

  // Function to handle card flip
  const handleCardFlip = () => {
    if (!cardRef.current || !frontRef.current || !backRef.current) return;
    
    isFlipped.current = !isFlipped.current;
    
    gsap.to(cardRef.current, {
      rotationY: isFlipped.current ? 180 : 0,
      duration: 0.6,
      ease: "power1.inOut"
    });
    
    gsap.to(frontRef.current, {
      opacity: isFlipped.current ? 0 : 1,
      duration: 0.3,
      delay: isFlipped.current ? 0 : 0.3
    });
    
    gsap.to(backRef.current, {
      opacity: isFlipped.current ? 1 : 0,
      duration: 0.3,
      delay: isFlipped.current ? 0.3 : 0
    });
  };

  return (
    <div 
      ref={cardRef} 
      onClick={handleCardFlip}
      className="w-full h-[400px] bg-transparent cursor-pointer perspective-1000 relative"
      style={{ perspective: '1000px' }}
    >
      {/* Front of Card */}
      <div 
        ref={frontRef}
        className="w-full h-full absolute backface-hidden"
        style={{ backfaceVisibility: 'hidden' }}
      >
        <Card className="w-full h-full bg-white shadow-lg transition-shadow overflow-hidden flex flex-col">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl font-bold">{card.name}</CardTitle>
                <CardDescription className="text-sm text-gray-500">{card.issuer}</CardDescription>
              </div>
              <div className="p-2 rounded-full bg-blue-50">
                <CreditCardIcon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardHeader>
          
          {/* Using ScrollArea to make content scrollable when it exceeds the space */}
          <ScrollArea className="flex-1 overflow-auto">
            <CardContent className="space-y-4 pb-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Key Benefits</h3>
                <p className="text-sm mt-1">{card.reward_rate}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <h3 className="text-xs font-medium text-gray-500">Annual Fee</h3>
                  <p className="flex items-center text-sm font-medium">
                    <IndianRupee className="h-3 w-3 mr-1" />
                    {card.annual_fee > 0 ? formatCurrency(card.annual_fee).replace('₹', '') : 'None'}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-medium text-gray-500">Joining Fee</h3>
                  <p className="flex items-center text-sm font-medium">
                    <IndianRupee className="h-3 w-3 mr-1" />
                    {card.joining_fee > 0 ? formatCurrency(card.joining_fee).replace('₹', '') : 'None'}
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Perks</h3>
                <ul className="text-xs mt-1 list-disc pl-4 space-y-1">
                  {card.perks.slice(0, 3).map((perk, index) => (
                    <li key={index}>{perk}</li>
                  ))}
                  {card.perks.length > 3 && <li className="text-blue-600">+{card.perks.length - 3} more perks</li>}
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <h3 className="text-xs font-medium text-gray-500">Recommended Score</h3>
                  <p className="text-sm">{card.credit_score_req}</p>
                </div>
                <div>
                  <h3 className="text-xs font-medium text-gray-500">Regular APR</h3>
                  <p className="text-sm">{card.regular_apr}</p>
                </div>
              </div>
            </CardContent>
          </ScrollArea>
          
          <CardFooter className="pt-0 pb-4 mt-auto">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-2">
                {card.category.slice(0, 3).map((category, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-700"
                  >
                    {category}
                  </span>
                ))}
                {card.category.length > 3 && (
                  <span className="text-xs text-gray-500">+{card.category.length - 3}</span>
                )}
              </div>
              <div className="bg-green-50 px-2 py-1 rounded-full">
                <span className="text-xs text-green-700 font-medium">{card.match_score}% match</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Back of Card */}
      <div 
        ref={backRef} 
        className="w-full h-full absolute opacity-0 backface-hidden"
        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
      >
        <Card className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-800 text-white shadow-lg overflow-hidden flex flex-col">
          <CardHeader>
            <CardTitle className="text-xl">{card.name}</CardTitle>
            <CardDescription className="text-blue-100">{card.issuer}</CardDescription>
          </CardHeader>
          
          <ScrollArea className="flex-1 overflow-auto">
            <CardContent className="space-y-4">
              <h3 className="text-lg font-medium border-b border-white/20 pb-2">All Perks</h3>
              <ul className="space-y-2">
                {card.perks.map((perk, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-blue-200 mt-1">•</span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </ScrollArea>
          
          <CardFooter className="bg-black/30 p-3 mt-auto">
            <p className="text-xs text-center w-full">Click to flip back</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CardResult;
