// src/pages/ContactPage.js

import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateMessage = async () => {
    if (!topic) {
      setError('Please enter a topic to generate a message.');
      return;
    }
    setIsLoading(true);
    setError(null);

    const prompt = `You are a helpful assistant. Write a professional and friendly contact message. The sender's name is '${name || 'John Doe'}' and the topic is '${topic}'. Keep it concise, around 3-4 sentences.`;

    try {
      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = ""; // The environment will provide the key
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const result = await response.json();
      
      if (result.candidates?.[0]?.content?.parts?.[0]?.text) {
        const text = result.candidates[0].content.parts[0].text;
        setMessage(text.trim());
      } else {
        throw new Error('Unexpected response format from API.');
      }
    } catch (err) {
      console.error("Error calling Gemini API:", err);
      setError('Failed to generate message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-white mb-6 text-center">Get In Touch</h1>
      <div className="max-w-lg mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-gray-700 text-white rounded-md p-3 focus:ring-2 focus:ring-indigo-500 border border-gray-600" placeholder="Full Name"/>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-700 text-white rounded-md p-3 focus:ring-2 focus:ring-indigo-500 border border-gray-600" placeholder="Email Address"/>
          <input type="text" id="topic" value={topic} onChange={(e) => setTopic(e.target.value)} className="w-full bg-gray-700 text-white rounded-md p-3 focus:ring-2 focus:ring-indigo-500 border border-gray-600" placeholder="Message Topic (e.g., Project Collaboration)"/>
          
          <div className="relative">
            <button type="button" onClick={handleGenerateMessage} disabled={isLoading} className="w-full bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition duration-300 disabled:bg-teal-800 disabled:cursor-not-allowed flex items-center justify-center">
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </>
              ) : (
                '✨ Suggest Message with AI'
              )}
            </button>
            <p className="text-xs text-gray-400 text-center mt-2">Let Gemini help you draft a message based on your topic.</p>
          </div>

          <textarea id="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-gray-700 text-white rounded-md p-3 focus:ring-2 focus:ring-indigo-500 border border-gray-600" placeholder="Your message will appear here..."></textarea>
          
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
          
          <button type="submit" className="w-full bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-600 transition duration-300">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;