
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Shield, ShieldCheck } from 'lucide-react';
import { checkCreditScore } from '@/services/decentroService';

const CreditScorePage = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [creditScore, setCreditScore] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pan: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // For demonstration purposes, use a simulated score in development
      if (process.env.NODE_ENV === 'development') {
        setTimeout(() => {
          // Generate random score between 300 and 900
          const simulatedScore = Math.floor(Math.random() * (900 - 300 + 1)) + 300;
          setCreditScore(simulatedScore);
          setLoading(false);
        }, 2000);
      } else {
        // In production, this would call the actual Decentro API
        const score = await checkCreditScore(formData);
        setCreditScore(score);
      }
    } catch (error) {
      console.error("Error checking credit score:", error);
      toast({
        title: "Error checking credit score",
        description: "There was a problem retrieving your credit score. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors">
      <Header />
      <main className="flex-grow py-12 px-4 md:px-6 bg-background transition-colors">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2 text-foreground">Check Your Credit Score</h1>
            <p className="text-muted-foreground">
              Know your eligibility for the best credit cards in India with a free credit score check
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 bg-card border border-border shadow-md transition-colors">
              <CardHeader>
                <CardTitle className="text-foreground">Get Your Free Credit Score</CardTitle>
                <CardDescription>Fill in your details below to check your credit score instantly</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        required
                        placeholder="Enter your full name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-background text-foreground transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        required
                        placeholder="Enter your phone number" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-background text-foreground transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required
                        placeholder="Enter your email address" 
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-background text-foreground transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pan" className="text-foreground">PAN Number</Label>
                      <Input 
                        id="pan" 
                        name="pan" 
                        required
                        placeholder="Enter your PAN number" 
                        value={formData.pan}
                        onChange={handleInputChange}
                        className="bg-background text-foreground transition-colors"
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Checking..." : "Check Credit Score"}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground">
                <div className="flex items-center">
                  <ShieldCheck size={16} className="mr-2" />
                  <span>Your information is secure and will not be shared</span>
                </div>
              </CardFooter>
            </Card>

            <Card className="bg-card border border-border shadow-md transition-colors">
              <CardHeader>
                <CardTitle className="text-foreground">Why Check Your Score?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Shield className="mr-2 text-primary" size={20} />
                  <div>
                    <h3 className="font-medium text-foreground">Get the Right Card</h3>
                    <p className="text-sm text-muted-foreground">Know which cards you're likely to be approved for</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="mr-2 text-primary" size={20} />
                  <div>
                    <h3 className="font-medium text-foreground">No Impact on Score</h3>
                    <p className="text-sm text-muted-foreground">This is a soft check that won't affect your score</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="mr-2 text-primary" size={20} />
                  <div>
                    <h3 className="font-medium text-foreground">Completely Free</h3>
                    <p className="text-sm text-muted-foreground">No hidden charges or subscription fees</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {creditScore !== null && (
            <Card className="mt-8 bg-card border border-border shadow-md transition-colors">
              <CardHeader className="bg-secondary/10 dark:bg-secondary/20">
                <CardTitle className="text-foreground">Your Credit Score Result</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-4 text-foreground">{creditScore}</div>
                  <p className="text-lg text-foreground">
                    {creditScore < 600 ? 'Poor' : 
                     creditScore < 700 ? 'Fair' :
                     creditScore < 750 ? 'Good' :
                     creditScore < 800 ? 'Very Good' : 'Excellent'}
                  </p>
                  <div className="mt-8">
                    <Button onClick={() => window.location.href = "/"}>
                      Get Credit Card Recommendations
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreditScorePage;
