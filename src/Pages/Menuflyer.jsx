import React from 'react';

const MenuFlyer = () => {
  return (
    <section className=" py-12 px-4 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Images */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
          <img
            src="/food/Front.png"
            alt="Flyer Front"
            className="w-64 md:w-80 rounded-lg shadow-lg object-contain"
          />
          <img
            src="/food/Back.png"
            alt="Flyer Back"
            className="w-64 md:w-80 rounded-lg shadow-lg object-contain"
          />
        </div>

        {/* Download Button */}
        <a
          href="/food/MEAL MATE Flyer.pdf"
          download
          className="inline-block bg-amber-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition"
        >
          Download MENU
        </a>
      </div>
    </section>
  );
};

export default MenuFlyer;
