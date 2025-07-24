import React, { useEffect, useState } from 'react';

const images = [
  '../event/1.jpg',
  '../event/2.jpg',
  '../event/3.jpg',
  '../event/4.jpg',
  '../event/5.jpg',
  '../event/6.jpg',
  '../event/7.jpg',
  '../event/8.jpg',
  '../event/10.jpg',
  '../event/11.jpg',
  '../event/12.jpg',
  '../event/13.jpg',
  '../event/14.jpg',
  '../event/15.jpg',
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl h-100 mx-auto overflow-hidden rounded-xl shadow-lg">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform 
            ${index === current ? 'opacity-100 rotate-0 scale-100 z-10' : 'opacity-0 rotate-12 scale-105 z-0'}`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
