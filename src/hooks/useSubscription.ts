import { useState } from 'react';

export function useSubscription() {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowPopup(true);
      setEmail('');
    }
  };

  return {
    email,
    setEmail,
    showPopup,
    setShowPopup,
    handleSubmit
  };
}