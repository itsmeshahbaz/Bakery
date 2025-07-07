import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-8 right-10 flex  flex-col items-center gap-3 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/923194573046?text=Hello%2C%20I%20am%20interested%20in%20hiring%20you%20for%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-2 hover:rotate-180 rounded-full shadow-lg hover:bg-green-700 transition duration-300 text-2xl"
      >
        <FaWhatsapp />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white p-2 hover:rotate-180 rounded-full shadow-lg hover:bg-pink-600 transition duration-300 text-2xl"
      >
        <FaInstagram />
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white hover:rotate-180 p-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 text-2xl"
      >
        <FaFacebookF />
      </a>
    </div>
  );
};

export default WhatsAppButton;
