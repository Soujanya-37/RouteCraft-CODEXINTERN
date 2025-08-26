// src/components/Layout.js

import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
// Import your custom NavLink component instead of the one from the library.
import NavLink from './NavLink'; 

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col">
      {/* HEADER & NAVIGATION */}
      <header className="bg-gray-800 shadow-lg border-b border-gray-700 sticky top-0 z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-400">
            React Router
          </div>
          <div className="flex items-center space-x-2">
            {/* Use your custom NavLink component here */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
      </header>

      {/* MAIN CONTENT AREA with Animation */}
      <main className="flex-grow container mx-auto p-6 animate-fadeIn">
        <Outlet key={location.pathname} />
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-auto">
        <div className="container mx-auto px-6 py-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} React Router & AI Demo. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;