
import React, { useRef, useEffect } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { cardCategories, cardFeatures, useCardRecommendationForm } from '@/hooks/useCardRecommendationForm';
import { UserPreference } from '@/services/creditCardService';
import gsap from "gsap";

interface RecommendationFormProps {
  onSubmit: (values: UserPreference) => void;
}
const RecommendationForm = ({
  onSubmit
}: RecommendationFormProps) => {
  const {
    formValues,
    handleCreditScoreChange,
    handleAnnualIncomeChange,
    handleCardTypeChange,
    handleFeaturesChange,
    toUserPreference
  } = useCardRecommendationForm();

  // Refs for micro-interaction
  const radioRefs = useRef<(HTMLDivElement | null)[]>([]);
  const checkboxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sliderThumbRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Animate radio group on mount
    gsap.fromTo(
      radioRefs.current,
      { scale: 0.8, opacity: 0.4 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.06,
        duration: 0.19,
        delay: 0.05,
        ease: "back.out(2)"
      }
    );
    // Animate checkboxes on mount
    gsap.fromTo(
      checkboxRefs.current,
      { scale: 0.8, opacity: 0.5 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.04,
        duration: 0.2,
        delay: 0.08,
        ease: "back.out(2.2)"
      }
    );
    // Animate slider thumb on mount
    if (sliderThumbRef.current) {
      gsap.fromTo(
        sliderThumbRef.current,
        { scale: 1, boxShadow: "0 0 0 0px #9b87f580" },
        {
          scale: 1.1,
          boxShadow: "0 0 0 8px #9b87f580",
          yoyo: true,
          repeat: 1,
          duration: 0.38,
          ease: "expo.inOut"
        }
      );
    }
  }, []);

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
    <section className="py-12 px-6 bg-background transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold mb-2 text-foreground">Find Your Perfect Card</h2>
          <p className="text-muted-foreground">Tell us about your preferences and we'll suggest the best Indian credit cards for you</p>
        </div>
        
        <form onSubmit={handleSubmit} className="rounded-xl shadow-md p-6 bg-card border border-border transition-colors duration-300">
          <div className="space-y-8">
            {/* Credit Score */}
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Your Credit Score: {formValues.creditScore}</label>
              <Slider
                value={[formValues.creditScore]}
                min={300}
                max={900}
                step={10}
                onValueChange={values => handleCreditScoreChange(values[0])}
                className="py-4"
                thumbProps={{
                  ref: sliderThumbRef
                }}
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Poor (300)</span>
                <span>Fair (550)</span>
                <span>Good (700)</span>
                <span>Excellent (850+)</span>
              </div>
            </div>
            
            {/* Annual Income */}
            <div>
              <label htmlFor="income" className="block text-sm font-medium mb-2 text-foreground">
                Your Annual Income
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-muted-foreground">₹</span>
                </div>
                <input
                  type="text"
                  id="income"
                  value={formatIncome(formValues.annualIncome).replace('₹', '')}
                  onChange={handleAnnualIncomeChange}
                  placeholder="Annual Income in INR"
                  className="pl-8 block w-full rounded-md border border-border shadow-sm focus:border-primary focus:ring-primary bg-background text-foreground transition-colors duration-300 p-2"
                />
              </div>
            </div>
            
            {/* Card Type */}
            <div>
              <label className="block text-sm font-medium mb-3 text-foreground">What type of card are you looking for?</label>
              <RadioGroup value={formValues.cardType} onValueChange={handleCardTypeChange} className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {cardCategories.map((category, idx) => (
                  <div
                    ref={el => radioRefs.current[idx] = el}
                    key={category.value}
                    className="flex items-center space-x-2 transition-transform duration-150"
                  >
                    <RadioGroupItem value={category.value} id={category.value} />
                    <label htmlFor={category.value} className="text-sm cursor-pointer text-foreground">{category.label}</label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            {/* Features */}
            <div>
              <label className="block text-sm font-medium mb-3 text-foreground">Which features are important to you?</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {cardFeatures.map((feature, idx) => (
                  <div
                    ref={el => checkboxRefs.current[idx] = el}
                    key={feature.value}
                    className="flex items-center transition-transform duration-150"
                  >
                    <input
                      type="checkbox"
                      id={`feature-${feature.value}`}
                      checked={formValues.features.includes(feature.value)}
                      onChange={() => handleFeaturesChange(feature.value)}
                      className="h-4 w-4 text-primary focus:ring-primary border-border rounded transition-colors duration-300 bg-background"
                    />
                    <label htmlFor={`feature-${feature.value}`} className="ml-2 block text-sm text-foreground">
                      {feature.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-4">
              <button type="submit" className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-md font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors">
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
