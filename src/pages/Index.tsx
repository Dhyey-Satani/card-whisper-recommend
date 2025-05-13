
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import RecommendationForm from '@/components/RecommendationForm';
import CardList from '@/components/CardList';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleFormSubmit = (values: any) => {
    setIsLoading(true);
    setShowResults(false);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
      // Scroll to results
      window.scrollTo({
        top: document.getElementById('results')?.offsetTop ?? 0,
        behavior: 'smooth'
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <RecommendationForm onSubmit={handleFormSubmit} />
        <div id="results">
          <CardList isLoading={isLoading} showResults={showResults} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
