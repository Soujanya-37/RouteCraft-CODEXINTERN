// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
        Modern Web Navigation
      </h1>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl">
        Explore a seamless user experience built with React Router DOM. This demo showcases instant page transitions, dynamic content, and AI-powered features.
      </p>
      <div className="flex space-x-4">
        <Link 
          to="/about" 
          className="bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-600 transition-transform transform hover:scale-105 duration-300"
        >
          Learn More
        </Link>
        <Link 
          to="/contact" 
          className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-transform transform hover:scale-105 duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default HomePage;