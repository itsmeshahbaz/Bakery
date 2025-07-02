import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen pt-24 px-6 pb-16 bg-gradient-to-br from-white to-amber-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-700 text-center mb-10">Corporate Catering Contact</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="bg-white shadow-lg rounded-lg p-8 space-y-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Request a Quote or Ask a Question</h2>
            <div>
              <label className="block text-sm font-medium text-gray-600">Full Name</label>
              <input type="text" placeholder="Your Name" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-amber-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Company Name</label>
              <input type="text" placeholder="Your Company" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-amber-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Email Address</label>
              <input type="email" placeholder="you@example.com" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-amber-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Event Date</label>
              <input type="date" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-amber-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Message / Requirements</label>
              <textarea rows="4" placeholder="Tell us about your catering needs…" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-amber-300"></textarea>
            </div>
            <button type="submit" className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-500 transition">Send Message</button>
          </form>

          {/* Contact Info */}
          <div className="bg-amber-100 p-8 rounded-lg shadow-md text-gray-800 space-y-6">
            <h2 className="text-xl font-semibold text-amber-800">Get in Touch</h2>
            <p>If you're planning a corporate lunch, seminar, or event — we're here to help with custom meal deals and timely delivery.</p>
            <div>
              <h3 className="font-semibold">Phone:</h3>
              <p>+92 300 1234567</p>
            </div>
            <div>
              <h3 className="font-semibold">Email:</h3>
              <p>info@mealmatecatering.com</p>
            </div>
            <div>
              <h3 className="font-semibold">Office Hours:</h3>
              <p>Mon–Fri: 9am – 6pm</p>
            </div>
            <div>
              <h3 className="font-semibold">Location:</h3>
              <p>Office 12, Business Tower, Lahore, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
