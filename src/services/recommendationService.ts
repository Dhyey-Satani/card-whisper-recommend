
import { supabase } from "@/integrations/supabase/client";
import { CreditCardRecommendation, UserPreference } from "./creditCardService";
import { toast } from "@/components/ui/use-toast";

export const fetchCreditCardRecommendations = async (
  preferences: UserPreference
): Promise<CreditCardRecommendation[]> => {
  try {
    const { data, error } = await supabase.rpc(
      'get_credit_card_recommendations',
      {
        user_credit_score: preferences.credit_score,
        user_annual_income: preferences.annual_income,
        user_card_type: preferences.card_type,
        user_features: preferences.features
      }
    );

    if (error) {
      console.error("Error fetching recommendations:", error);
      toast({
        title: "Error fetching recommendations",
        description: error.message,
        variant: "destructive"
      });
      return [];
    }

    return data || [];
  } catch (error) {
    console.error("Exception when fetching recommendations:", error);
    toast({
      title: "Something went wrong",
      description: "Could not fetch credit card recommendations",
      variant: "destructive"
    });
    return [];
  }
};

// Function to save user preferences
export const saveUserPreferences = async (
  preferences: UserPreference
): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('user_preferences')
      .insert({
        credit_score: preferences.credit_score,
        annual_income: preferences.annual_income,
        card_type: preferences.card_type,
        features: preferences.features
      });

    if (error) {
      console.error("Error saving preferences:", error);
      toast({
        title: "Error saving preferences",
        description: error.message,
        variant: "destructive"
      });
      return false;
    }

    return true;
  } catch (error) {
    console.error("Exception when saving preferences:", error);
    toast({
      title: "Something went wrong",
      description: "Could not save your preferences",
      variant: "destructive"
    });
    return false;
  }
};
