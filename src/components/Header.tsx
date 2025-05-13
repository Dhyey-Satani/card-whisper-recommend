
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-blue-600 font-bold text-xl">IndiaCardFinder</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Compare Cards
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Credit Score
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
