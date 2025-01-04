import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import SignUpForm from '../components/Auth/SignUpForm';
import AnimatedSection from '../components/animations/AnimatedSection';

export default function SignUp() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <AnimatedSection animation="slide-up">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="text-center">
              <div className="font-bold text-3xl mb-2">
                <span className="text-[#006BFF]">Styl</span>
                <span className="text-[#0093FF]">um</span>
                <span className="text-[#0093FF]">ia</span>
              </div>
              <h2 className="text-2xl font-semibold mb-2">Create your account</h2>
              <p className="text-gray-400">
                Join Stylumia and unlock the power of AI-driven fashion analytics
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay={200}>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-[#151B2E] py-8 px-4 shadow-sm rounded-lg sm:px-10">
              <SignUpForm />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}