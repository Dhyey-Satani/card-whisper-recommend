
import React from 'react';
import CardResult from './CardResult';
import { StarIcon, TrendingUpIcon, CircleCheckIcon, WalletIcon } from "lucide-react";

interface CardListProps {
  isLoading?: boolean;
  showResults: boolean;
}

const CardList: React.FC<CardListProps> = ({ isLoading = false, showResults }) => {
  if (!showResults) return null;

  const loadingCards = Array(3).fill(null).map((_, i) => (
    <div key={i} className="border rounded-md p-6 space-y-4 animate-pulse">
      <div className="h-7 bg-gray-200 rounded w-1/2"></div>
      <div className="h-5 bg-gray-200 rounded w-1/3"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  ));

  if (isLoading) {
    return (
      <section className="w-full py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Finding Your Perfect Cards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Please wait while we analyze your preferences...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loadingCards}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Your Top Card Recommendations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Based on your profile, these cards offer the best combination of rewards, fees, and benefits for your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {sampleCards.map((card) => (
            <CardResult key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const sampleCards = [
  {
    id: "1",
    name: "Blue Cash Preferred",
    issuer: "American Express",
    matchScore: 95,
    annualFee: 95,
    introApr: "0% for 12 months",
    regularApr: "18.24% - 29.99%",
    creditScoreReq: "Good to Excellent",
    rewardRate: "6% cash back on groceries (up to $6,000/year)",
    perks: [
      "6% cash back on select US streaming services",
      "3% cash back on transit and gas stations",
      "1% cash back on other purchases",
      "$250 statement credit after spending $3,000 in first 6 months",
      "Car rental insurance",
      "Return protection"
    ]
  },
  {
    id: "2",
    name: "Freedom Unlimited",
    issuer: "Chase",
    matchScore: 89,
    annualFee: 0,
    introApr: "0% for 15 months",
    regularApr: "19.49% - 28.24%",
    creditScoreReq: "Good to Excellent",
    rewardRate: "1.5% cash back on all purchases",
    perks: [
      "5% cash back on travel through Chase Ultimate Rewards",
      "3% cash back on dining and drugstore purchases",
      "No minimum redemption amount",
      "$200 bonus after spending $500 in first 3 months",
      "Purchase protection",
      "Extended warranty protection"
    ]
  },
  {
    id: "3",
    name: "Venture Rewards",
    issuer: "Capital One",
    matchScore: 84,
    annualFee: 95,
    introApr: "N/A",
    regularApr: "20.24% - 28.24%",
    creditScoreReq: "Excellent",
    rewardRate: "2x miles on every purchase",
    perks: [
      "75,000 bonus miles after spending $4,000 in first 3 months",
      "5x miles on hotels and rental cars booked through Capital One Travel",
      "$100 credit for Global Entry or TSA PreCheck",
      "No foreign transaction fees",
      "Transfer miles to 15+ travel loyalty programs",
      "Two complimentary visits to Capital One Lounges or Plaza Premium Lounges per year"
    ]
  }
];

export default CardList;
