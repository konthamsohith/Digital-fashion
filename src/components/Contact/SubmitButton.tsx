import React from 'react';

export default function SubmitButton() {
  return (
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
    >
      Submit
    </button>
  );
}