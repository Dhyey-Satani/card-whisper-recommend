
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import RecommendationForm from '@/components/RecommendationForm';
import CardList from '@/components/CardList';
import Footer from '@/components/Footer';
import { CreditCardRecommendation, getCreditCardRecommendations, saveUserPreferences } from '@/services/creditCardService';
import { toast } from '@/hooks/use-toast';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register ScrollToPlugin for smooth scrolling
gsap.registerPlugin(ScrollToPlugin);

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<CreditCardRecommendation[]>([]);

  // Initial page load animation
  useEffect(() => {
    // Animate page elements on load
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(
      "body", 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.5 }
    );
  }, []);

  const handleFormSubmit = async (values: any) => {
    setIsLoading(true);
    setShowResults(false);
    
    try {
      // Save user preferences
      await saveUserPreferences(values);
      
      // Get recommendations based on preferences
      const cards = await getCreditCardRecommendations(values);
      
      setRecommendations(cards);
      setIsLoading(false);
      setShowResults(true);
      
      if (cards.length === 0) {
        toast({
          title: "No recommendations found",
          description: "Try adjusting your criteria to get better results",
          variant: "default"
        });
      } else {
        // Scroll to results with GSAP animation
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: "#results", offsetY: 50 },
          ease: "power2.inOut"
        });
      }
    } catch (error) {
      console.error("Error in recommendation process:", error);
      setIsLoading(false);
      toast({
        title: "Error getting recommendations",
        description: "There was a problem processing your request. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <RecommendationForm onSubmit={handleFormSubmit} />
        <div id="results">
          <CardList 
            isLoading={isLoading} 
            showResults={showResults}
            recommendations={recommendations}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
