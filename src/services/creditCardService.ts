
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export interface CreditCardRecommendation {
  id: string;
  name: string;
  issuer: string;
  annual_fee: number;
  joining_fee: number;
  reward_rate: string;
  intro_apr: string | null;
  regular_apr: string;
  credit_score_req: string;
  perks: string[];
  category: string[];
  image_url: string | null;
  recommended_credit_score: number;
  recommended_income: number;
  match_score: number;
}

export interface UserPreference {
  credit_score: number;
  annual_income: number;
  card_type: string;
  features: string[];
}

export const getCreditCardRecommendations = async (preferences: UserPreference): Promise<CreditCardRecommendation[]> => {
  try {
    const { data, error } = await supabase.rpc('get_credit_card_recommendations', {
      user_credit_score: preferences.credit_score,
      user_annual_income: preferences.annual_income,
      user_card_type: preferences.card_type,
      user_features: preferences.features
    });

    if (error) {
      console.error("Error fetching credit card recommendations:", error);
      toast({
        title: "Error fetching recommendations",
        description: error.message,
        variant: "destructive"
      });
      return [];
    }

    return data || [];
  } catch (error) {
    console.error("Exception fetching credit card recommendations:", error);
    toast({
      title: "Error fetching recommendations",
      description: "An unexpected error occurred",
      variant: "destructive"
    });
    return [];
  }
};

export const saveUserPreferences = async (preferences: UserPreference) => {
  try {
    const { error } = await supabase.from('user_preferences').insert({
      credit_score: preferences.credit_score,
      annual_income: preferences.annual_income,
      card_type: preferences.card_type,
      features: preferences.features,
      user_id: null // We're allowing anonymous submissions
    });

    if (error) {
      console.error("Error saving user preferences:", error);
      toast({
        title: "Error saving preferences",
        description: error.message,
        variant: "destructive"
      });
    }
  } catch (error) {
    console.error("Exception saving user preferences:", error);
    toast({
      title: "Error saving preferences",
      description: "An unexpected error occurred",
      variant: "destructive"
    });
  }
};
