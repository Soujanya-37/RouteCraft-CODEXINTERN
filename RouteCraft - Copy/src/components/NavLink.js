// src/components/NavLink.js
import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom'; // 1. Import NavLink

// 2. We no longer need onClick or active props
const NavLink = ({ to, children, icon }) => (
  <RouterNavLink
    to={to} // 3. The 'to' prop tells it where to navigate
    // 4. It automatically adds an 'active' class when the URL matches
    className={({ isActive }) =>
      `flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
        isActive
          ? 'bg-indigo-600 text-white shadow-md'
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
      }`
    }
  >
    {icon}
    <span className="ml-3">{children}</span>
  </RouterNavLink>
);

export default NavLink;