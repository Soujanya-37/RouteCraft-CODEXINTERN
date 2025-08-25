// src/components/Layout.js

import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* HEADER & NAVIGATION */}
      <header className="bg-gray-800 shadow-lg">
        <nav className="container mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-400">
            RouteCraft
          </div>
          <div className="flex items-center space-x-2">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`
              }
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="container mx-auto p-8">
        {/* The active page component will be rendered here */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;