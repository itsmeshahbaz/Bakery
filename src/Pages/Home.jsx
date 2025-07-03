import React from 'react';
import BookCard from './Detail';
import ClientReviews from './Clientreview';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import WhatsAppButton from "../component/wtbtn"


function LandingPage() {
  return (
    <div>
      <div
        className="min-h-screen bg-cover opacity-90 bg-center text-white font-serif"
        style={{ backgroundImage: "url('../imgs/bg2.jpg')" }}
      >
        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center text-center px-4 py-20 bg-opacity-30">
          <div className="mt-15 max-w-xl">
            <h2 className="text-xl mb-4 text-white inline-block px-3 py-1 rounded shadow">
              A freshly home baked Meal
            </h2>
            <h1 className="text-3xl sm:text-4xl font-bold text-amber-300 drop-shadow-lg mb-6">
              Eat Rite, Feel Light
            </h1>
            <p className="text-sm sm:text-base leading-relaxed font-bold max-w-md mx-auto text-white bg-opacity-50 p-4 rounded">
              We’ll deliver Home baked seasonal Meal that are so delicious it makes your grandmother jealous.
            </p>
          </div>
        </div>
      </div>
      <BookCard />

      <WhatsAppButton/>

      <ClientReviews />
    </div>
  );
}

export default LandingPage;
