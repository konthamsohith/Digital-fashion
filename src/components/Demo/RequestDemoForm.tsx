import React from 'react';
import { Mail, Building2, User, Briefcase } from 'lucide-react';
import Button from '../Button';

export default function RequestDemoForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Request a Demo</h2>
      <p className="text-gray-600 mb-6">
        See how Stylumia can transform your fashion business
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="name"
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006BFF] focus:border-transparent"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Work Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="email"
                type="email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006BFF] focus:border-transparent"
                placeholder="Enter your work email"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="company"
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006BFF] focus:border-transparent"
                placeholder="Enter your company name"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
              Job Title
            </label>
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="role"
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006BFF] focus:border-transparent"
                placeholder="Enter your job title"
                required
              />
            </div>
          </div>
        </div>

        <Button variant="solid" type="submit" className="w-full !bg-[#006BFF] hover:!bg-[#0093FF]">
          Schedule Demo
        </Button>

        <p className="text-sm text-gray-500 text-center">
          By submitting this form, you agree to our{' '}
          <a href="/terms" className="text-[#006BFF] hover:text-[#0093FF]">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" className="text-[#006BFF] hover:text-[#0093FF]">
            Privacy Policy
          </a>
        </p>
      </form>
    </div>
  );
}