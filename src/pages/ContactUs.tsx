import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import ContactForm from '../components/Contact/ContactForm';
import ContactHeader from '../components/Contact/ContactHeader';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ContactHeader />
        <ContactForm />
      </div>
    </div>
  );
}