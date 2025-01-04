import React from 'react';
import { User, Briefcase, Mail, Phone } from 'lucide-react';
import CountrySelect from './CountrySelect';
import FormInput from './FormInput';
import MessageInput from './MessageInput';
import ContactPopup from '../common/ContactPopup';
import { useContactForm } from '../../hooks/useContactForm';

export default function ContactForm() {
  const { formData, setFormData, showPopup, setShowPopup, handleSubmit } = useContactForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-[#151B2E] rounded-xl shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormInput
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            icon={User}
            placeholder="Your Name"
          />

          <FormInput
            label="Job Title"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
            icon={Briefcase}
            placeholder="Your Job Title"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex gap-4">
            <CountrySelect
              value={formData.countryCode}
              onChange={(value) => setFormData(prev => ({ ...prev, countryCode: value }))}
            />
            <FormInput
              label="Mobile Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              icon={Phone}
              placeholder="Your Mobile No."
              className="flex-1"
            />
          </div>

          <FormInput
            label="Work Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            icon={Mail}
            placeholder="Your Business Email"
          />
        </div>

        <MessageInput
          value={formData.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors mt-6"
        >
          Submit
        </button>

        <p className="text-center text-gray-400 text-sm mt-4">
          Our sales team will be in touch to setup a personalized meeting
        </p>
      </form>

      {showPopup && <ContactPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}