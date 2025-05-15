
import React from 'react';
import Hero from '@/components/Hero';
import RecommendationForm from '@/components/RecommendationForm';
import CardList from '@/components/CardList';
import Footer from '@/components/Footer';
import { CreditCardRecommendation, UserPreference } from '@/services/creditCardService';
import { fetchCreditCardRecommendations, saveUserPreferences } from '@/services/recommendationService';
import { useToast } from '@/components/ui/use-toast';
import { SidebarDemo } from '@/components/SidebarDemo';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<CreditCardRecommendation[]>([]);
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
      {/* Show the custom sidebar demo for mobile/tablet screens */}
      <div className="md:hidden mb-6">
        <SidebarDemo />
      </div>
      <div className="hidden md:block">
        <Hero />
        <RecommendationForm onSubmit={handleFormSubmit} />
        <CardList 
          isLoading={isLoading} 
          showResults={showResults} 
          recommendations={recommendations}
        />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
