
import { useState } from "react";
import { UserPreference } from "@/services/creditCardService";

export const cardCategories = [
  { value: "rewards", label: "Rewards" },
  { value: "cashback", label: "Cashback" },
  { value: "travel", label: "Travel" },
  { value: "shopping", label: "Shopping" },
  { value: "lifestyle", label: "Lifestyle" },
  { value: "fuel", label: "Fuel" },
  { value: "premium", label: "Premium" },
  { value: "dining", label: "Dining" },
  { value: "entertainment", label: "Entertainment" },
  { value: "noFee", label: "No Annual Fee" },
  { value: "grocery", label: "Grocery" },
  { value: "e-commerce", label: "E-Commerce" },
  { value: "utilities", label: "Utilities" }
];

export const cardFeatures = [
  { value: "rewards", label: "Reward Points" },
  { value: "cashback", label: "Cashback" },
  { value: "travel", label: "Travel Benefits" },
  { value: "shopping", label: "Shopping Discounts" },
  { value: "entertainment", label: "Entertainment Benefits" },
  { value: "premium", label: "Premium Services" },
  { value: "noFee", label: "No Annual Fee" },
  { value: "fuel", label: "Fuel Benefits" },
  { value: "dining", label: "Dining Offers" },
  { value: "e-commerce", label: "E-commerce Benefits" },
  { value: "grocery", label: "Grocery Benefits" },
  { value: "utilities", label: "Utility Bill Discounts" }
];

export interface CardRecommendationFormValues {
  creditScore: number;
  annualIncome: number;
  cardType: string;
  features: string[];
}

export const useCardRecommendationForm = () => {
  const [formValues, setFormValues] = useState<CardRecommendationFormValues>({
    creditScore: 700,
    annualIncome: 500000,
    cardType: "rewards",
    features: ["rewards", "cashback"]
  });

  const handleCreditScoreChange = (value: number) => {
    setFormValues({ ...formValues, creditScore: value });
  };

  const handleAnnualIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value.replace(/,/g, ""), 10);
    setFormValues({ ...formValues, annualIncome: isNaN(value) ? 0 : value });
  };

  const handleCardTypeChange = (value: string) => {
    setFormValues({ ...formValues, cardType: value });
  };

  const handleFeaturesChange = (value: string) => {
    const features = formValues.features.includes(value)
      ? formValues.features.filter(feature => feature !== value)
      : [...formValues.features, value];
    
    setFormValues({ ...formValues, features });
  };

  const toUserPreference = (): UserPreference => ({
    credit_score: formValues.creditScore,
    annual_income: formValues.annualIncome,
    card_type: formValues.cardType,
    features: formValues.features
  });

  return {
    formValues,
    handleCreditScoreChange,
    handleAnnualIncomeChange,
    handleCardTypeChange,
    handleFeaturesChange,
    toUserPreference
  };
};
