// src/pages/AboutPage.js

import React from 'react';

const FeatureCard = ({ title, children }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-bold text-indigo-400 mb-2">{title}</h3>
    <p className="text-gray-300">{children}</p>
  </div>
);

const AboutPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-white mb-6 text-center border-b border-gray-700 pb-4">
        About This Project
      </h1>
      <p className="text-lg text-center text-gray-300 mb-10 max-w-3xl mx-auto">
        This application is a comprehensive demonstration of a modern Single-Page Application (SPA) built with React. It highlights best practices for routing, layout structure, and API integration.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <FeatureCard title="Client-Side Routing">
          Utilizes <code>react-router-dom</code> to handle navigation seamlessly without full page reloads, providing a fast and fluid user experience.
        </FeatureCard>
        <FeatureCard title="Reusable Layout Component">
          A central <code>Layout.js</code> provides a consistent header and footer, while an <code>&lt;Outlet /&gt;</code> renders the specific page content.
        </FeatureCard>
        <FeatureCard title="AI-Powered Assistance">
          The contact form integrates the Gemini API to intelligently suggest message content based on user input, showcasing a practical use of AI.
        </FeatureCard>
        <FeatureCard title="Polished User Experience">
          Features like active link styling, a custom 404 page, and subtle page-fade animations are included to make the application feel professional and complete.
        </FeatureCard>
      </div>
    </div>
  );
};

export default AboutPage;