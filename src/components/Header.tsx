import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeSelector } from './theme/ThemeSelector';
import ThemeToggle from './ui/ThemeToggle';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-lg shadow-sm py-4 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-primary font-bold text-xl transition-colors">IndiaCardFinder</Link>
        </div>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/compare" className="text-foreground hover:text-primary transition-colors">
                Compare Cards
              </Link>
            </li>
            <li>
              <Link to="/credit-score" className="text-foreground hover:text-primary transition-colors">
                Credit Score
              </Link>
            </li>
            <li>
              <Link to="/education" className="text-foreground hover:text-primary transition-colors">
                Education
              </Link>
            </li>
            <ThemeToggle />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
