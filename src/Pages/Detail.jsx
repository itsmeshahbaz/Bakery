import React, { useState } from 'react';
import Data from './Data';
import './Detail.css';

const BookCard = () => {
  const [book, setBook] = useState(Data);

  return (
    <section className="bg-amber-50 py-10 px-4 sm:px-8 shadow-inner">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-amber-700 mb-10">Dishes Collection</h1>

        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
          {book.map((boo) => (
            <div
              key={boo.id}
              className="min-w-[260px] sm:min-w-[300px] bg-white rounded-3xl shadow-lg p-5 flex flex-col items-center transition-transform hover:scale-105"
            >
              {/* Image */}
              <img
                src={boo.image}
                alt={boo.bookName}
                className="w-28 h-28 object-cover rounded-full border-4 border-amber-200 shadow-md mb-4"
              />

              {/* Dish Name */}
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">{boo.Dish}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookCard;
