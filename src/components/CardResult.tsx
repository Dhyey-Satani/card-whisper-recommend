
import React from 'react';
import { Button } from "@/components/ui/button";
import { CreditCard, Check, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CardResultProps {
  card: {
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
    imageUrl?: string;
  };
}

const CardResult: React.FC<CardResultProps> = ({ card }) => {
  return (
    <Card className="w-full credit-card overflow-hidden border-2 hover:border-finance-blue-400 transition-all">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center mb-2">
          <div>
            <CardTitle className="text-xl">{card.name}</CardTitle>
            <CardDescription>{card.issuer}</CardDescription>
          </div>
          <div className="gradient-bg rounded-full p-2">
            <CreditCard className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex-1">
            <Progress value={card.matchScore} className="h-2" />
          </div>
          <div className="text-sm font-medium">{card.matchScore}% match</div>
        </div>
      </CardHeader>
      <CardContent className="pb-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Annual Fee</p>
              <p className="font-medium">
                {card.annualFee === 0 ? "No Fee" : `$${card.annualFee}`}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Credit Needed</p>
              <p className="font-medium">{card.creditScoreReq}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Intro APR</p>
              <p className="font-medium">{card.introApr}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Regular APR</p>
              <p className="font-medium">{card.regularApr}</p>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-2">Key Rewards</p>
            <p className="font-medium">{card.rewardRate}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">Benefits</p>
            <div className="space-y-1.5">
              {card.perks.slice(0, 3).map((perk, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-finance-teal-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{perk}</p>
                </div>
              ))}
              {card.perks.length > 3 && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="text-sm text-finance-blue-600 flex items-center gap-1 cursor-help">
                        +{card.perks.length - 3} more benefits
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      {card.perks.slice(3).map((perk, i) => (
                        <div key={i} className="flex items-start gap-2 mb-1">
                          <Check className="h-3 w-3 text-finance-teal-600 mt-0.5 flex-shrink-0" />
                          <p className="text-xs">{perk}</p>
                        </div>
                      ))}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-3 pt-0">
        <Button className="w-full sm:w-auto bg-finance-blue-600 hover:bg-finance-blue-700">
          Apply Now
        </Button>
        <Button variant="outline" className="w-full sm:w-auto">
          Compare
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardResult;
