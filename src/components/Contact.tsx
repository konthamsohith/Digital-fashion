import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Button from './Button';
import { useNavigate } from '../hooks/useNavigate';

export default function Contact() {
  const navigate = useNavigate();

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/request-demo');
  };

  return (
    <div className="bg-[#151B2E] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Fashion Business?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Get in touch with our team to schedule a demo and discover how Stylumia
              can revolutionize your trend forecasting.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span className="text-gray-300">contact@stylumia.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-gray-300">123 Fashion District, New York, NY 10001</span>
              </div>
            </div>
          </div>
          <div className="bg-[#1E2538] p-8 rounded-xl">
            <form onSubmit={handleDemoRequest} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-[#0A0F1E] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-[#0A0F1E] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 bg-[#0A0F1E] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-[#0A0F1E] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white resize-none"
                  required
                ></textarea>
              </div>
              <Button variant="solid" type="submit" className="w-full !bg-blue-500 hover:!bg-blue-600">
                Request Demo
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}