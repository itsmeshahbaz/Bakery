import React, { useEffect, useState } from 'react';

const ComingSoonModal = () => {
  const [showModal, setShowModal] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 15);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = endDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white text-black rounded-xl shadow-xl max-w-md w-full p-6 relative text-center">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-2">Coming Soon</h2>
        <p className="mb-6 text-gray-600">We're launching in just 15 days!</p>

        <div className="flex justify-center gap-4 text-lg font-semibold">
          <div className="flex flex-col items-center">
            <span className="text-2xl">{timeLeft.days}</span>
            <span className="text-sm text-gray-500">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl">{timeLeft.hours}</span>
            <span className="text-sm text-gray-500">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl">{timeLeft.minutes}</span>
            <span className="text-sm text-gray-500">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl">{timeLeft.seconds}</span>
            <span className="text-sm text-gray-500">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonModal;
