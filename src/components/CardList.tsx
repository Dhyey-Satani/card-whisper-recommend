
import React, { useEffect, useRef } from "react";
import { CreditCardRecommendation } from "@/services/creditCardService";
import CardResult from "./CardResult";
import CardSkeleton from "./ui/CardSkeleton";
import Footer from "./Footer";
import gsap from "gsap";

interface CardListProps {
  isLoading: boolean;
  showResults: boolean;
  recommendations: CreditCardRecommendation[];
}

const SKELETON_COUNT = 6;

const CardList: React.FC<CardListProps> = ({
  isLoading,
  showResults,
  recommendations,
}) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!isLoading && showResults && recommendations.length > 0) {
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 30, rotateY: -10 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          stagger: 0.06,
          duration: 0.55,
          ease: "power3.out"
        }
      );
    }
  }, [isLoading, showResults, recommendations]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-2 md:px-8 mt-8">
        {Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
          <CardSkeleton key={idx} />
        ))}
      </div>
    );
  }

  if (!showResults) {
    return null;
  }

  if (recommendations.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <span className="text-red-500 mb-2 text-lg font-semibold">
          No credit card matches found.
        </span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-2 md:px-8 mt-8">
      {recommendations.map((card, i) => (
        <div ref={el => (cardRefs.current[i] = el)} key={card.id}>
          <CardResult card={card} index={i} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
