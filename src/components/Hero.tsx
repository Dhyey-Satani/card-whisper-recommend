
import React from 'react';
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxjaXJjbGUgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBjeD0iMjAiIGN5PSIyMCIgcj0iMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-white animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Find Your Perfect Credit Card Match
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Get personalized recommendations in seconds. Compare rewards, fees, and benefits tailored to your spending habits.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-finance-blue-600 hover:bg-gray-100">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
          <div className="w-full max-w-md animate-slide-up">
            <div className="relative">
              <div className="credit-card bg-gradient-to-br from-finance-teal-500 to-finance-blue-500 p-6 rounded-xl card-shadow transform rotate-6 absolute top-4 right-4">
                <CreditCard className="w-12 h-12 text-white/80 mb-4" />
                <div className="space-y-2">
                  <div className="h-4 w-32 rounded-full bg-white/20"></div>
                  <div className="h-4 w-48 rounded-full bg-white/20"></div>
                </div>
              </div>
              <div className="credit-card bg-gradient-to-br from-finance-blue-600 to-finance-blue-800 p-6 rounded-xl card-shadow">
                <CreditCard className="w-12 h-12 text-white/80 mb-4" />
                <div className="space-y-2">
                  <div className="h-4 w-32 rounded-full bg-white/20"></div>
                  <div className="h-4 w-48 rounded-full bg-white/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
