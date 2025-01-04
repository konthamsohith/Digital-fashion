import React from 'react';
import SubscriptionPopup from '../../common/SubscriptionPopup';
import { useSubscription } from '../../../hooks/useSubscription';

export default function NewsletterSignup() {
  const { email, setEmail, showPopup, setShowPopup, handleSubmit } = useSubscription();

  return (
    <>
      <div className="bg-[#151B2E] rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to our Insights</h2>
        <p className="text-gray-400 mb-6">
          Stay updated with the latest AI fashion design trends and innovations
        </p>
        <form className="max-w-md mx-auto flex gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-[#1E2538] border border-gray-700 focus:outline-none focus:border-purple-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </form>
      </div>

      {showPopup && <SubscriptionPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}