
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Find the Perfect Indian Credit Card for You
        </h1>
        <p className="text-lg md:text-xl mb-8 text-blue-100">
          Compare top Indian credit cards and get personalized recommendations based on your spending habits and financial profile.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-4 flex-1 min-w-[180px] max-w-[200px]">
            <h3 className="text-2xl font-bold">₹0</h3>
            <p className="text-sm text-blue-100">Annual Fee Options</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-4 flex-1 min-w-[180px] max-w-[200px]">
            <h3 className="text-2xl font-bold">5%</h3>
            <p className="text-sm text-blue-100">Cashback Rewards</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-4 flex-1 min-w-[180px] max-w-[200px]">
            <h3 className="text-2xl font-bold">10+</h3>
            <p className="text-sm text-blue-100">Top Indian Banks</p>
          </div>
        </div>
        <a 
          href="#results" 
          className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            const form = document.querySelector('form');
            if (form) {
              window.scrollTo({ top: form.offsetTop, behavior: 'smooth' });
            }
          }}
        >
          Find Your Card
        </a>
      </div>
    </section>
  );
};

export default Hero;
