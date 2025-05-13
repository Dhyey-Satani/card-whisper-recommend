
export interface CreditCard {
  id: string;
  name: string;
  issuer: string;
  matchScore: number;
  annualFee: number;
  introApr: string;
  regularApr: string;
  creditScoreReq: string;
  rewardRate: string;
  perks: string[];
  category: string[];
  imageUrl?: string;
  recommendedCreditScore: number;
  recommendedIncome: number;
}

export const creditCards: CreditCard[] = [
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
    ],
    category: ["cashback", "groceries", "gas"],
    recommendedCreditScore: 700,
    recommendedIncome: 40000
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
    ],
    category: ["cashback", "noFee", "dining"],
    recommendedCreditScore: 680,
    recommendedIncome: 30000
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
    ],
    category: ["travel", "miles", "premium"],
    recommendedCreditScore: 740,
    recommendedIncome: 60000
  },
  {
    id: "4",
    name: "Quicksilver Cash Rewards",
    issuer: "Capital One",
    matchScore: 82,
    annualFee: 0,
    introApr: "0% for 15 months",
    regularApr: "19.24% - 29.24%",
    creditScoreReq: "Good to Excellent",
    rewardRate: "1.5% cash back on all purchases",
    perks: [
      "One-time $200 cash bonus after spending $500 in first 3 months",
      "No foreign transaction fees",
      "Extended warranty protection",
      "Travel accident insurance",
      "24-hour travel assistance services",
      "Virtual card numbers for safer online shopping"
    ],
    category: ["cashback", "noFee", "travel"],
    recommendedCreditScore: 670,
    recommendedIncome: 30000
  },
  {
    id: "5",
    name: "Sapphire Preferred",
    issuer: "Chase",
    matchScore: 87,
    annualFee: 95,
    introApr: "N/A",
    regularApr: "20.49% - 27.49%",
    creditScoreReq: "Good to Excellent",
    rewardRate: "5x points on travel purchased through Chase Ultimate Rewards",
    perks: [
      "60,000 bonus points after spending $4,000 in first 3 months",
      "3x points on dining, select streaming services, and online grocery purchases",
      "2x points on all other travel purchases",
      "25% more value when redeeming points for travel through Chase Ultimate Rewards",
      "No foreign transaction fees",
      "Trip cancellation/interruption insurance"
    ],
    category: ["travel", "dining", "rewards"],
    recommendedCreditScore: 720,
    recommendedIncome: 50000
  },
  {
    id: "6",
    name: "Discover it Cash Back",
    issuer: "Discover",
    matchScore: 80,
    annualFee: 0,
    introApr: "0% for 15 months",
    regularApr: "15.74% - 26.74%",
    creditScoreReq: "Good to Excellent",
    rewardRate: "5% cash back on rotating categories each quarter (up to $1,500)",
    perks: [
      "Cashback Match - Discover automatically matches all cash back earned in the first year",
      "1% cash back on all other purchases",
      "Free FICO® Credit Score monitoring",
      "No late fee for first late payment",
      "No foreign transaction fees",
      "Freeze your account in seconds with an on/off switch"
    ],
    category: ["cashback", "noFee", "rotating"],
    recommendedCreditScore: 670,
    recommendedIncome: 30000
  }
];
