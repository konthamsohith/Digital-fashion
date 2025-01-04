import { useState } from 'react';

export function useContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    countryCode: 'IN +91',
    mobile: '',
    email: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
    setFormData({
      name: '',
      jobTitle: '',
      countryCode: 'IN +91',
      mobile: '',
      email: '',
      message: ''
    });
  };

  return {
    formData,
    setFormData,
    showPopup,
    setShowPopup,
    handleSubmit
  };
}