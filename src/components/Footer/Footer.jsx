import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-deep-cerulean text-white py-6 text-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2">Homey</h2>
          <p className="text-sm mb-4">A platform to share home services with others</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-charlotte transition duration-300">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-charlotte transition duration-300">Terms of Service</a>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            {/* Add social media icons or links here */}
            <a href="#" className="text-white hover:text-charlotte transition duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-charlotte transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-charlotte transition duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p className="mt-4 text-xs">&copy; 2023 Homey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;