
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-card text-muted-foreground py-10 px-6 border-t border-border transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-foreground text-lg font-semibold mb-4">IndiaCardFinder</h3>
            <p className="text-sm">
              Find the perfect credit card for your needs with our personalized recommendation engine. 
              Compare cards from all major Indian banks in one place.
            </p>
          </div>
          <div>
            <h3 className="text-foreground text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Credit Card Types</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bank Offers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Credit Score Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-foreground text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@indiacardfinder.com</li>
              <li>Support: +91 1234567890</li>
              <li>Address: Mumbai, Maharashtra, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-sm text-center">
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} IndiaCardFinder. All rights reserved.</p>
          <p className="mt-1 text-muted-foreground">Disclaimer: This site provides recommendations based on user inputs but does not guarantee approval.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
