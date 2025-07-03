import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen p-10 bg-gray-50">
      <div className="max-w-xl mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center text-amber-600">Contact Us</h2>
        <form
          action="https://formspree.io/f/xblybkej"  // Replace with your Formspree endpoint
          method="POST"
        >
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 border rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-500 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
