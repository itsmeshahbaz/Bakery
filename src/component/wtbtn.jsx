// WhatsAppButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923194573046?text=Hello%2C%20I%20am%20interested%20in%20hiring%20you%20for%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-10 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-700 z-50 text-2xl"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
