
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { cardCategories, cardFeatures, useCardRecommendationForm } from '@/hooks/useCardRecommendationForm';
import { UserPreference } from '@/services/creditCardService';

interface RecommendationFormProps {
  onSubmit: (values: UserPreference) => void;
}

const RecommendationForm = ({ onSubmit }: RecommendationFormProps) => {
  const {
    formValues,
    handleCreditScoreChange,
    handleAnnualIncomeChange,
    handleCardTypeChange,
    handleFeaturesChange,
    toUserPreference
  } = useCardRecommendationForm();

  const formatIncome = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(toUserPreference());
  };

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Find Your Perfect Card</h2>
          <p className="text-gray-600">Tell us about your preferences and we'll suggest the best Indian credit cards for you</p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6">
          <div className="space-y-8">
            {/* Credit Score */}
            <div>
              <label className="block text-sm font-medium mb-2">Your Credit Score: {formValues.creditScore}</label>
              <Slider
                value={[formValues.creditScore]}
                min={300}
                max={900}
                step={10}
                onValueChange={(values) => handleCreditScoreChange(values[0])}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Poor (300)</span>
                <span>Fair (550)</span>
                <span>Good (700)</span>
                <span>Excellent (850+)</span>
              </div>
            </div>
            
            {/* Annual Income */}
            <div>
              <label htmlFor="income" className="block text-sm font-medium mb-2">
                Your Annual Income
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">₹</span>
                </div>
                <input
                  type="text"
                  id="income"
                  value={formatIncome(formValues.annualIncome).replace('₹', '')}
                  onChange={handleAnnualIncomeChange}
                  className="pl-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                  placeholder="Annual Income in INR"
                />
              </div>
            </div>
            
            {/* Card Type */}
            <div>
              <label className="block text-sm font-medium mb-3">What type of card are you looking for?</label>
              <RadioGroup
                value={formValues.cardType}
                onValueChange={handleCardTypeChange}
                className="grid grid-cols-2 md:grid-cols-3 gap-3"
              >
                {cardCategories.map((category) => (
                  <div key={category.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={category.value} id={category.value} />
                    <label htmlFor={category.value} className="text-sm cursor-pointer">{category.label}</label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            {/* Features */}
            <div>
              <label className="block text-sm font-medium mb-3">Which features are important to you?</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {cardFeatures.map((feature) => (
                  <div key={feature.value} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`feature-${feature.value}`}
                      checked={formValues.features.includes(feature.value)}
                      onChange={() => handleFeaturesChange(feature.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={`feature-${feature.value}`} className="ml-2 block text-sm">
                      {feature.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Get My Recommendations
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RecommendationForm;
