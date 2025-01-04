import React, { useState } from 'react';
import SubscriptionPopup from './SubscriptionPopup';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowPopup(true);
      setEmail('');
    }
  };

  return (
    <>
      <div className="bg-[#151B2E] rounded-xl p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Ahead of the Curve</h2>
          <p className="text-gray-400 mb-6">
            Subscribe to receive the latest insights, trends, and solutions in fashion technology
          </p>
          <form className="flex gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-[#1E2538] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {showPopup && <SubscriptionPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}