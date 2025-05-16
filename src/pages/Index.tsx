
import React from 'react';
import Hero from '@/components/Hero';
import RecommendationForm from '@/components/RecommendationForm';
import CardList from '@/components/CardList';
import Footer from '@/components/Footer';
import { CreditCardRecommendation, UserPreference } from '@/services/creditCardService';
import { fetchCreditCardRecommendations, saveUserPreferences } from '@/services/recommendationService';
import { useToast } from '@/components/ui/use-toast';
import { SidebarDemo } from '@/components/SidebarDemo';
import Header from '@/components/Header';
import HowItWorks from '@/components/HowItWorks';
import FeaturedBrands from '@/components/FeaturedBrands';
import HomeFAQ from '@/components/HomeFAQ';

const Index = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showResults, setShowResults] = React.useState(false);
  const [recommendations, setRecommendations] = React.useState<CreditCardRecommendation[]>([]);
  const { toast } = useToast();

  const handleFormSubmit = async (preferences: UserPreference) => {
    setIsLoading(true);
    setShowResults(true);

    try {
      // Save user preferences (optional, will silently fail if not authenticated)
      await saveUserPreferences(preferences);

      // Fetch recommendations
      const results = await fetchCreditCardRecommendations(preferences);
      setRecommendations(results);

      if (results.length === 0) {
        toast({
          title: "No matches found",
          description: "Try adjusting your preferences to see more credit cards",
          variant: "default"
        });
      }
    } catch (error) {
      console.error("Error in form submission:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* Show Sidebar as additional feature only on mobile/tablet */}
      <div className="md:hidden">
        <SidebarDemo />
      </div>
      {/* Show Header and main content on desktop/tablet */}
      <div className="hidden md:block">
        <Header />
        <Hero />
        <HowItWorks />
        <FeaturedBrands />
        <RecommendationForm onSubmit={handleFormSubmit} />
        <CardList
          isLoading={isLoading}
          showResults={showResults}
          recommendations={recommendations}
        />
        <HomeFAQ />
        <Footer />
      </div>
      {/* Show main content also on mobile/tablet (under sidebar demo) */}
      <div className="md:hidden px-2">
        <Hero />
        <HowItWorks />
        <FeaturedBrands />
        <RecommendationForm onSubmit={handleFormSubmit} />
        <CardList
          isLoading={isLoading}
          showResults={showResults}
          recommendations={recommendations}
        />
        <HomeFAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
