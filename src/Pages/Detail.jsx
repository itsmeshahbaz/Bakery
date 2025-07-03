import React, { useState } from 'react';
import Data from './Data';
import './Detail.css'

const BookCard = () => {
    const [book, setBook] = useState(Data);

    return (
        <section className="bg-amber-50 mx-10 my-10 w-300 rounded-4xl py-6">
            <div className="max-w-5xl mx-auto px-2">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-5">Dishes Collection</h1>

                <div className="flex overflow-x-auto m-7 space-x-5 scrollbar-hide">
                    {book.map((boo) => (
                        <div
                            key={boo.id}
                            className="min-w-[250px] flex bg-white/20 rounded-4xl shadow-md p-4 items-center"
                        >
                            {/* Text Left */}
                            <div className="flex-1">
                                <h2 className="font-bold text-lg text-gray-800">{boo.Dish}</h2>
                            </div>

                            {/* Image Right */}
                            <img
                                src={boo.image}
                                alt={boo.bookName}
                                className="w-24 h-24 bject-cover rounded-full shadow"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookCard;
