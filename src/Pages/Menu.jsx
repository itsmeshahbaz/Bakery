import React, { useState } from 'react';
import Data from './Data';

const BookCard = () => {
  const [book, setBook] = useState(Data);
  const days = ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",];

  const filterBooks = (day) => {
    if (day === "All") {
      setBook(Data);
    } else {
      const filtered = Data.filter((item) => item.Day === day);
      setBook(filtered);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">Our Products</h1>

      {/* Day Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => filterBooks(day)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
          >
            {day}
          </button>
        ))}
      </div>

      {/* Book Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {book.map((boo) => (
          <div
            key={boo.id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow bg-gray-800"
          >
            <img
              src={boo.image}
              alt={boo.bookName}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-white">{boo.Dish}</h2>
            <h2 className="text-md text-gray-300">{boo.Day}</h2>
            <p className="text-sm text-gray-400 mt-2">{boo.Price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCard;
