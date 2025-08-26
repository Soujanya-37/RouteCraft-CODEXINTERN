// src/components/NavLink.js

import React from 'react';
// We rename the NavLink from the library to avoid naming conflicts.
import { NavLink as RouterNavLink } from 'react-router-dom';

// This is a "wrapper" component. It makes your NavLink reusable and easy to style.
const NavLink = ({ to, children }) => (
  <RouterNavLink
    to={to}
    // The `isActive` boolean is provided automatically by React Router.
    // This is the modern and correct way to handle active link styling.
    className={({ isActive }) =>
      `flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
        isActive
          ? 'bg-indigo-600 text-white shadow-md' // Styles for the active link
          : 'text-gray-300 hover:bg-gray-700'   // Styles for inactive links
      }`
    }
  >
    {children}
  </RouterNavLink>
);

export default NavLink;