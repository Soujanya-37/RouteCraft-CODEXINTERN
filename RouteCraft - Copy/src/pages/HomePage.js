// src/pages/HomePage.js
import React from 'react';

const HomePage = () => (
  <div className="space-y-8">
    {/* Hero Section */}
    <div className="p-8 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg shadow-lg text-white animate-fade-in">
      <h1 className="text-5xl font-bold mb-4 gradient-text">Welcome to RouteCraft</h1>
      <p className="text-xl mb-6 opacity-90">
        A modern React application showcasing the power of client-side routing and component architecture
      </p>
      <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors hover-lift">
        Get Started
      </button>
    </div>

    {/* Features Grid */}
    <div className="grid md:grid-cols-3 gap-6">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg animate-fade-in animate-stagger-1 hover-lift">
        <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fast Performance</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Built with modern React patterns for optimal performance and user experience.
        </p>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg animate-fade-in animate-stagger-2 hover-lift">
        <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Beautiful Design</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Modern UI with Tailwind CSS, featuring responsive design and dark mode support.
        </p>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg animate-fade-in animate-stagger-3 hover-lift">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Easy Navigation</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Intuitive routing with React Router for seamless page transitions and navigation.
        </p>
      </div>
    </div>

    {/* Call to Action */}
    <div className="p-8 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Ready to explore?
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Navigate through the different sections to see RouteCraft in action.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
          Learn More
        </button>
        <button className="border border-indigo-600 text-indigo-600 dark:text-indigo-400 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  </div>
);

export default HomePage;
