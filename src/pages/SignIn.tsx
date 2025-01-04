import React from 'react';
import SignInForm from '../components/Auth/SignInForm';
import Navbar from '../components/Navigation/Navbar';

export default function SignIn() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="text-center">
            <div className="font-bold text-3xl mb-2">
              <span className="text-[#006BFF]">Styl</span>
              <span className="text-[#0093FF]">um</span>
              <span className="text-[#0093FF]">ia</span>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Sign in to your account</h2>
            <p className="text-gray-400">
              Access your Stylumia dashboard and insights
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-[#151B2E] py-8 px-4 shadow-sm rounded-lg sm:px-10">
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
}