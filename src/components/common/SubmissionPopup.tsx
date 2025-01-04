import React from 'react';
import { CheckCircle } from 'lucide-react';

interface SubmissionPopupProps {
  onClose: () => void;
}

export default function SubmissionPopup({ onClose }: SubmissionPopupProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#151B2E] rounded-xl p-6 max-w-md mx-4 animate-scale-up">
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Thank You!</h3>
          <p className="text-gray-400 mb-6">
            Thanks for submitting your company info! We'll review it and get back to you soon via email.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}