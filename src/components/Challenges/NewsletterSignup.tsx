import React from 'react';

export default function NewsletterSignup() {
  return (
    <div className="bg-[#151B2E] rounded-xl p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
      <p className="text-gray-400 mb-6">
        Subscribe to receive the latest insights on fashion industry challenges and solutions
      </p>
      <form className="max-w-md mx-auto flex gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg bg-[#1E2538] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}