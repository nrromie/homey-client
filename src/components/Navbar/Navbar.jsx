import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

const Navbar = () => {
  return (
    <nav className="bg-deep-cerulean p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">
        <Link to="/">Homey</Link> {/* Replace 'Homey' with your website name */}
      </div>
      <div className="flex space-x-4">
        <Link to="/" className="text-white hover:text-charlotte transition duration-300">Home</Link>
        <Link to="/services" className="text-white hover:text-charlotte transition duration-300">Services</Link>
        <Link to="/login" className="text-white hover:text-charlotte transition duration-300">Login</Link>
        {/* Add more navigation links as needed */}
      </div>
    </nav>
  );
};

export default Navbar;