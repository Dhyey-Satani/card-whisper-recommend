
import React from 'react';
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8 bg-white border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CreditCard className="h-6 w-6 text-finance-blue-600" />
          <h1 className="text-xl font-bold text-finance-blue-800">
            CardGuru
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-finance-blue-600 transition-colors">
            How It Works
          </a>
          <a href="#" className="text-gray-600 hover:text-finance-blue-600 transition-colors">
            Card Types
          </a>
          <a href="#" className="text-gray-600 hover:text-finance-blue-600 transition-colors">
            Reviews
          </a>
        </nav>
        <Button className="bg-finance-blue-600 hover:bg-finance-blue-700 transition-colors">
          Sign Up
        </Button>
      </div>
    </header>
  );
};

export default Header;
