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
    <div className=" pt-20 max-w-7xl bg-amber-950 mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-amber-700 flex justify-center hover:text-amber-500 items-center">Our Products</h1>

      {/* Day Filter Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-6">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => filterBooks(day)}
            className="bg-amber-600 text-white px-4 py-2 rounded hover:shadow-amber-200 hover:bg-amber-400 transition"
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
            className=" rounded-lg shadow-amber-500 p-4 hover:shadow-lg transition-shadow hover:bg-amber-500 bg-amber-600"
          >
            <img
              src={boo.image}
              alt={boo.bookName}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-white">{boo.Dish}</h2>
            <h2 className="text-md text-gray-300">{boo.Day}</h2>
            <p className="text-sm font-bold text-gray-900 mt-2">Rs.{boo.Price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCard;
