
import React from 'react';
import CardResult from './CardResult';
import { CreditCardRecommendation } from '@/services/creditCardService';

interface CardListProps {
  isLoading: boolean;
  showResults: boolean;
  recommendations?: CreditCardRecommendation[];
}

const CardList = ({ isLoading, showResults, recommendations = [] }: CardListProps) => {
  if (isLoading) {
    return (
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Finding Your Best Matches</h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
          <p className="mt-6 text-gray-600">Analyzing credit cards based on your preferences...</p>
        </div>
      </section>
    );
  }

  if (!showResults) {
    return null;
  }

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-2 text-center">Your Personalized Credit Card Recommendations</h2>
        <p className="text-center text-gray-600 mb-8">
          Based on your preferences, we've found {recommendations.length} credit cards that match your profile
        </p>
        
        {recommendations.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">No cards match your criteria. Try adjusting your preferences.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map(card => (
              <CardResult key={card.id} card={card} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CardList;
