
import React from "react";
import { CreditCardRecommendation } from "@/services/creditCardService";
import CardResult from "./CardResult";
import Footer from "./Footer";
import CreditCard3DViewer from "./ui/CreditCard3DViewer";

interface CardListProps {
  isLoading: boolean;
  showResults: boolean;
  recommendations: CreditCardRecommendation[];
}

const CardList: React.FC<CardListProps> = ({
  isLoading,
  showResults,
  recommendations,
}) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <span className="text-blue-500 animate-pulse mb-2 text-lg font-semibold">
          Finding the best cards for you...
        </span>
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
        {/* 3D: Low-Poly Credit Card Model as fallback */}
        <CreditCard3DViewer
          src="https://sketchfab.com/models/1e46d56821a849228db92393ea690365/embed"
          title="Low-Poly Credit Card 3D Model"
          width={340}
          height={220}
          style={{ background: '#fafaf8' }}
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-2 md:px-8 mt-8">
      {recommendations.map((card) => (
        <CardResult key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;
