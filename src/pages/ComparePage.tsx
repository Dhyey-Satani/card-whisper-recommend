
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const ComparePage = () => {
  // Sample comparison data
  const comparisonItems = [
    {
      card1: "HDFC Diners Club Black",
      card2: "SBI SimplyCLICK Credit Card",
      features: [
        { name: "Annual Fee", value1: "₹10,000", value2: "₹499" },
        { name: "Reward Rate", value1: "5% cashback on weekend dining", value2: "10x reward points on online shopping" },
        { name: "Welcome Benefits", value1: "Airport lounge access worldwide", value2: "Amazon voucher worth ₹500" },
        { name: "Milestone Benefits", value1: "Up to ₹40,000", value2: "eGift Voucher worth ₹2000" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors">
      <Header />
      <main className="flex-grow py-10 px-4 md:px-6 bg-background transition-colors">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-foreground">Compare Credit Cards</h1>
          <p className="text-muted-foreground mb-8">
            Compare features, benefits, and fees of popular Indian credit cards side by side.
          </p>

          <div className="grid gap-6">
            {comparisonItems.map((item, index) => (
              <Card key={index} className="overflow-hidden bg-card border border-border shadow-md transition-colors">
                <CardHeader className="bg-secondary/10 dark:bg-secondary/20">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <CardTitle className="text-center md:text-left text-foreground">{item.card1}</CardTitle>
                    <ArrowRight className="hidden md:block text-muted-foreground" />
                    <CardTitle className="text-center md:text-left mt-2 md:mt-0 text-foreground">{item.card2}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full">
                    <tbody>
                      {item.features.map((feature, featureIndex) => (
                        <tr key={featureIndex} className={featureIndex % 2 === 0 ? "bg-background" : "bg-muted"}>
                          <td className="py-4 px-6 font-medium text-foreground">{feature.name}</td>
                          <td className="py-4 px-6 text-foreground">{feature.value1}</td>
                          <td className="py-4 px-6 text-foreground">{feature.value2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Want to compare other cards?</h2>
            <p className="mb-4 text-muted-foreground">Our comparison tool will be available soon. Check back for updates!</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComparePage;
