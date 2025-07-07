import React, { useEffect, useState } from 'react';
import BookCard from './Detail';
import ClientReviews from './Clientreview';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import WhatsAppButton from "../component/wtbtn";

const bgImages = [
  "/imgs/web1.png",
  "/imgs/web2.png",
  "/imgs/web3.jpg",
  "/imgs/web4.png",
  "/imgs/web5.jpg",
];

const LandingPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bgImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div>
      {/* Background Image Slider */}
      <div
        className="h-screen bg-cover bg-center bg-no-repeat text-white font-serif transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${bgImages[currentImage]})` }}
      >
        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center h-full text-center px-4 bg-opacity-30">
          <div className="max-w-xl cursor-pointer">
            <h2 className="text-xl mb-4 text-white inline-block px-3 py-1 rounded shadow">
              A Freshly Home Made Meal
            </h2>
            <h1 className="text-3xl sm:text-4xl font-bold text-amber-300 drop-shadow-lg mb-6">
              Eat Rite, Feel Light
            </h1>
            <p className="text-sm sm:text-base leading-relaxed font-bold max-w-md mx-auto text-white bg-opacity-50 p-4 rounded">
              We’ll deliver Home Made seasonal Meal that are so delicious it makes your grandmother jealous.
            </p>
          </div>
        </div>
      </div>

      <BookCard />
      <WhatsAppButton />
      <ClientReviews />
    </div>
  );
};

export default LandingPage;
