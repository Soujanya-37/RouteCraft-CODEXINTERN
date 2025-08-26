// src/App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout Component
import Layout from './components/Layout';

// Page Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage'; // Import the new 404 page

function App() {
  return (
    // BrowserRouter is the top-level component that enables routing.
    <BrowserRouter>
      <Routes>
        {/* This is a "layout route". It renders the Layout component,
          and all child routes will be rendered inside the Layout's <Outlet />.
          This ensures a consistent UI (header, footer) across all pages.
        */}
        <Route path="/" element={<Layout />}>
          {/* The index route is the default page shown for the "/" path. */}
          <Route index element={<HomePage />} />
          
          {/* These are the other pages nested within the layout. */}
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* This is the "catch-all" or "wildcard" route. 
            The "*" path matches any URL that hasn't been matched by the routes above.
            It's essential for displaying a "Not Found" page for invalid URLs.
          */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;