
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-blue-600 font-bold text-xl">IndiaCardFinder</Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/compare" className="text-gray-600 hover:text-blue-600 transition-colors">
                Compare Cards
              </Link>
            </li>
            <li>
              <Link to="/credit-score" className="text-gray-600 hover:text-blue-600 transition-colors">
                Credit Score
              </Link>
            </li>
            <li>
              <Link to="/education" className="text-gray-600 hover:text-blue-600 transition-colors">
                Education
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
