
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FormValues {
  creditScore: number;
  annualIncome: number;
  cardType: string;
  features: string[];
}

interface RecommendationFormProps {
  onSubmit: (values: FormValues) => void;
}

const RecommendationForm: React.FC<RecommendationFormProps> = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState<FormValues>({
    creditScore: 700,
    annualIncome: 60000,
    cardType: 'rewards',
    features: ['cashback', 'noFee'],
  });

  const handleCreditScoreChange = (value: number[]) => {
    setFormValues({ ...formValues, creditScore: value[0] });
  };

  const handleIncomeChange = (value: number[]) => {
    setFormValues({ ...formValues, annualIncome: value[0] * 10000 });
  };

  const handleCardTypeChange = (value: string) => {
    setFormValues({ ...formValues, cardType: value });
  };

  const handleFeatureToggle = (feature: string) => {
    const currentFeatures = formValues.features;
    if (currentFeatures.includes(feature)) {
      setFormValues({
        ...formValues,
        features: currentFeatures.filter(f => f !== feature),
      });
    } else {
      setFormValues({
        ...formValues,
        features: [...currentFeatures, feature],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Get Personalized Card Recommendations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Answer a few questions about your financial situation and preferences to find the perfect credit cards for you.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto p-6 animate-slide-up">
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Your Financial Profile</h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Credit Score</Label>
                    <span className="text-finance-blue-600 font-medium">{formValues.creditScore}</span>
                  </div>
                  <Slider
                    value={[formValues.creditScore]}
                    min={300}
                    max={850}
                    step={10}
                    onValueChange={handleCreditScoreChange}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Poor</span>
                    <span>Fair</span>
                    <span>Good</span>
                    <span>Excellent</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Annual Income</Label>
                    <span className="text-finance-blue-600 font-medium">
                      ${formValues.annualIncome.toLocaleString()}
                    </span>
                  </div>
                  <Slider
                    value={[formValues.annualIncome / 10000]}
                    min={1}
                    max={30}
                    step={1}
                    onValueChange={handleIncomeChange}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>$10k</span>
                    <span>$100k</span>
                    <span>$200k+</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-lg">Card Preferences</h3>
                
                <div className="space-y-2">
                  <Label>Card Type</Label>
                  <Select value={formValues.cardType} onValueChange={handleCardTypeChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select card type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rewards">Rewards</SelectItem>
                      <SelectItem value="cashback">Cash Back</SelectItem>
                      <SelectItem value="travel">Travel</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="secured">Secured</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Features</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="cashback" 
                        checked={formValues.features.includes('cashback')}
                        onCheckedChange={() => handleFeatureToggle('cashback')}
                      />
                      <label htmlFor="cashback" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Cash Back
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="noFee" 
                        checked={formValues.features.includes('noFee')}
                        onCheckedChange={() => handleFeatureToggle('noFee')}
                      />
                      <label htmlFor="noFee" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        No Annual Fee
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="travelRewards" 
                        checked={formValues.features.includes('travelRewards')}
                        onCheckedChange={() => handleFeatureToggle('travelRewards')}
                      />
                      <label htmlFor="travelRewards" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Travel Rewards
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="lowInterest" 
                        checked={formValues.features.includes('lowInterest')}
                        onCheckedChange={() => handleFeatureToggle('lowInterest')}
                      />
                      <label htmlFor="lowInterest" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Low Interest Rate
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-finance-blue-600 hover:bg-finance-blue-700">
                Find My Cards
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default RecommendationForm;
