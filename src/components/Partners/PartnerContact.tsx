import React, { useState } from 'react';
import SubmissionPopup from '../common/SubmissionPopup';

export default function PartnerContact() {
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
    setFormData({ company: '', email: '', message: '' });
  };

  return (
    <>
      <div className="bg-[#151B2E] rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Partner?</h2>
        <p className="text-gray-400 mb-8">
          Take the first step towards a successful partnership. Contact our team today.
        </p>
        <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Company Name"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-2 bg-[#1E2538] border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Work Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 bg-[#1E2538] border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
          <textarea
            placeholder="Tell us about your partnership interests"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 bg-[#1E2538] border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
            required
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Submit
          </button>
        </form>
      </div>

      {showPopup && <SubmissionPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}