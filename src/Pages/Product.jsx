import React, { useState } from 'react';
import Data from './Data';

const BookCard = () => {
  const [book, setBook] = useState(Data);
  const days = ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const filterBooks = (day) => {
    if (day === "All") {
      setBook(Data);
    } else {
      const filtered = Data.filter((item) => item.Day === day);
      setBook(filtered);
    }
  };

  return (
    <div className="pt-24 pb-12 px-4 bg-gradient-to-br from-yellow-50 to-amber-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-amber-700 hover:text-amber-500 transition">
        Our Products
      </h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => filterBooks(day)}
            className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-400 shadow-md transition"
          >
            {day}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {book.map((boo) => (
          <div
            key={boo.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={boo.image}
              alt={boo.bookName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-amber-800">{boo.Dish}</h2>
              <p className="text-sm text-gray-500 mb-1">{boo.Day}</p>
              <p className="text-md font-bold text-amber-700">Rs. {boo.Price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCard;
