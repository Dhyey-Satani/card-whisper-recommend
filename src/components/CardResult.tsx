
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard as CreditCardIcon, IndianRupee } from 'lucide-react';
import { CreditCardRecommendation } from '@/services/creditCardService';

interface CardResultProps {
  card: CreditCardRecommendation;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);
};

const CardResult = ({ card }: CardResultProps) => {
  return (
    <Card className="w-full bg-white shadow-lg hover:shadow-xl transition-shadow">
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
      <CardContent className="space-y-4 pb-2">
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
      <CardFooter className="pt-0 pb-4">
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
  );
};

export default CardResult;
