
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';

const EducationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2">Credit Card Education</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Learn everything you need to know about credit cards in India, from building credit to maximizing rewards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader className="bg-blue-50">
                <CardTitle>Credit Card Basics</CardTitle>
                <CardDescription>Essential information for beginners</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Credit cards offer a convenient way to make purchases, build credit history, and earn rewards. 
                  However, they come with responsibilities and potential pitfalls if not used wisely.
                </p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do credit cards work?</AccordionTrigger>
                    <AccordionContent>
                      A credit card allows you to borrow money from a bank up to a certain limit to make purchases. 
                      You're required to pay back the borrowed amount, usually monthly. If you don't pay the full 
                      amount by the due date, you'll be charged interest on the remaining balance.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What is a credit limit?</AccordionTrigger>
                    <AccordionContent>
                      A credit limit is the maximum amount you can borrow on your credit card. It's determined by 
                      the issuer based on factors like your income, credit score, and debt-to-income ratio.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What are annual fees?</AccordionTrigger>
                    <AccordionContent>
                      An annual fee is a yearly charge for having a credit card. Not all cards have annual fees, 
                      but those with premium benefits often do. In India, annual fees typically range from ₹500 
                      to ₹10,000 or more for premium cards.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-blue-50">
                <CardTitle>Building Good Credit</CardTitle>
                <CardDescription>Tips for improving your credit score</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Your credit score is a number that represents your creditworthiness. In India, credit scores 
                  typically range from 300 to 900, with higher scores indicating better creditworthiness.
                </p>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Pay your bills on time, every time</li>
                  <li>Keep your credit utilization ratio below 30%</li>
                  <li>Don't apply for too many credit cards at once</li>
                  <li>Keep old accounts open to maintain a longer credit history</li>
                  <li>Regularly check your credit report for errors</li>
                  <li>Mix different types of credit (loans, credit cards) responsibly</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader className="bg-blue-50">
              <CardTitle>Understanding Credit Card Terms</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <h3 className="font-semibold mb-1">APR (Annual Percentage Rate)</h3>
                  <p className="text-gray-600 text-sm">The yearly interest rate charged on outstanding credit card balances.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Minimum Payment</h3>
                  <p className="text-gray-600 text-sm">The smallest amount you must pay by the due date to keep your account in good standing.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Grace Period</h3>
                  <p className="text-gray-600 text-sm">The time between the end of a billing cycle and the payment due date when you can pay without incurring interest.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Balance Transfer</h3>
                  <p className="text-gray-600 text-sm">Moving debt from one credit card to another, often to take advantage of lower interest rates.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Cash Advance</h3>
                  <p className="text-gray-600 text-sm">Borrowing cash against your credit limit, usually with higher fees and interest rates than purchases.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Reward Points</h3>
                  <p className="text-gray-600 text-sm">Points earned on purchases that can be redeemed for travel, cashback, merchandise, or other rewards.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-6 flex items-start">
            <Info className="text-yellow-500 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium text-lg mb-2">Important Note for Indian Credit Card Users</h3>
              <p className="text-gray-700">
                As per RBI guidelines, credit card issuers in India are required to implement tokenization for online 
                transactions to enhance security. Make sure your cards are tokenized for seamless online payments.
                Additionally, all credit card users must complete periodic KYC updates as required by their card issuers.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EducationPage;
