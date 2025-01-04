import React from 'react';
import LoadingLogo from './LoadingLogo';
import LoadingSpinner from './LoadingSpinner';
import LoadingText from './LoadingText';

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        <LoadingLogo />
        <LoadingSpinner />
        <LoadingText />
      </div>
    </div>
  );
}