import React, { useState } from 'react';
import Data from './Data';
import WeeklyMenu from './Weeklymenu';

const BookCard = () => {
  const [book, setBook] = useState(Data);

  return (
    <div className="pt-24 pb-12 px-10 bg-gradient-to-br from-yellow-50 to-amber-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-amber-700 hover:text-5xl hover:text-amber-500 transition">
        Our Products
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {book.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:drop-shadow-2xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.bookName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-amber-800">{item.Dish}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <WeeklyMenu />
      </div>
    </div>
  );
};

export default BookCard;
