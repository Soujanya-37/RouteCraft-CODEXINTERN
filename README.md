# 🗺️ Route-Craft: A Modern Client Side React Router 
RouteCraft is a polished single-page application (SPA) built with React that demonstrates modern web development best practices. It showcases seamless client-side routing, a reusable and responsive layout, and a unique AI-powered feature using the Gemini API. This project was developed as a key deliverable for the codeXintern Front-End Development internship program.

## ✨ Features
### 🚀 Core Functionality
Client-Side Routing: Utilizes react-router-dom for instant, seamless navigation between pages without full reloads.

AI-Powered Content Generation: The contact form integrates with the Google Gemini API to intelligently suggest message content based on a user-provided topic.

Reusable Layout: A central Layout component provides a consistent header and footer across all pages, ensuring a clean and maintainable structure.

### 🎨 Modern UI/UX
Responsive Design: The UI is fully responsive and looks great on all devices, from mobile phones to desktops, thanks to Tailwind CSS.

Active Link Styling: The navigation bar clearly indicates the user's current location for better UX.

Custom 404 Page: A user-friendly "Not Found" page gracefully handles invalid URLs.

Polished Animations: Subtle fade-in animations on page transitions create a smooth and professional feel.

### 🛠️ Technologies Used
Frontend: React 18, HTML5, CSS3

Routing: React Router DOM v6

Styling: Tailwind CSS

AI Integration: Google Gemini API

Build Tool: Create React App (react-scripts)

Deployment: GitHub Pages

### 🚀 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
You need to have Node.js and npm installed on your machine.

Node.js (which includes npm)

Installation & Local Development
Clone the repository:

git clone [https://github.com/your-username/RouteCraft-CODEXINTERN.git](https://github.com/your-username/RouteCraft-CODEXINTERN.git)

Navigate to the project directory:

cd RouteCraft-CODEXINTERN

Install NPM packages:

npm install

Run the development server:
This will start the app and open it in your browser at http://localhost:3000.

npm start

### 🚀 Deployment
This project is configured for easy deployment to GitHub Pages.

Build the project for production:

npm run build

Deploy the build folder to the gh-pages branch:

npm run deploy

### 📖 How to Use
Navigate: Use the links in the header (Home, About, Contact) to switch between pages. Notice the instant loading and the active link style.

Use the AI Helper: On the "Contact" page, enter a topic for your message (e.g., "collaboration inquiry") and click the "Suggest Content" button. The Gemini API will generate a professional message for you.

Test the 404 Page: Try navigating to an invalid URL (e.g., /invalid-page) to see the custom "Not Found" page.

### 🎯 Core Concepts Implemented
Client-Side Routing: Demonstrates a clear understanding of setting up routes, using Link for navigation, and creating a nested layout structure with Outlet from react-router-dom.

Component Composition: The Layout component is a prime example of composition, wrapping page components to provide a consistent UI shell, promoting code reuse and maintainability.

API Integration: Shows proficiency in making asynchronous API calls to an external service (Google Gemini API), handling loading and error states, and displaying the returned data in the UI.

### 📱 Browser Support
✅ Chrome

✅ Firefox

✅ Safari

✅ Edge

### 📄 License
Distributed under the MIT License. See LICENSE for more information.

### 🙏 Acknowledgments
This project was developed as part of the codeXintern internship program. I'm grateful for the challenge and the opportunity to build a project that incorporates both routing and AI, two critical aspects of modern web development.

### 📞 Support
If you encounter any issues or have questions, please create an issue on this repository's GitHub page.

Built with ❤️ by Soujanya Shanbhag for the CODEXINTERN Front-End Development Program.
