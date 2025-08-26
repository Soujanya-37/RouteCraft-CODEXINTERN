// src/pages/NotFoundPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      {/* Creative SVG Icon */}
      <svg 
        className="w-24 h-24 text-indigo-400 mb-6" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v5m0-14V5" />
      </svg>
      
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Lost in Cyberspace?
      </h1>
      <p className="text-lg text-gray-300 mb-8 max-w-md">
        This page doesn't exist. Let's get you back to familiar territory.
      </p>
      <Link 
        to="/" 
        className="bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-600 transition-transform transform hover:scale-105 duration-300"
      >
        Return to Home Base
      </Link>
    </div>
  );
};

export default NotFoundPage;
