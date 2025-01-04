import React, { useState, useEffect } from 'react';

const loadingPhrases = [
  'Analyzing trends',
  'Processing data',
  'Generating insights'
];

export default function LoadingText() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % loadingPhrases.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center space-y-2">
      <p className="text-lg text-gray-800 font-medium">
        {loadingPhrases[phraseIndex]}
        <span className="animate-pulse">...</span>
      </p>
      <p className="text-sm text-gray-500">
        Please wait while we prepare your insights
      </p>
    </div>
  );
}