import React, { useState, useEffect } from 'react';
import monthlyMenu from './menuData';

const WeeklyMenu = () => {
  const weeks = Object.keys(monthlyMenu);
  const [activeWeek, setActiveWeek] = useState('');
  const [modalData, setModalData] = useState(null);

  const currentDate = new Date();
  const currentMonthYear = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  // Get the current week based on the date (1st to 7th = Week 1, etc.)
  const getCurrentWeek = () => {
    const day = currentDate.getDate();
    if (day <= 7) return 'Week 1';
    if (day <= 14) return 'Week 2';
    if (day <= 21) return 'Week 3';
    return 'Week 4';
  };

  useEffect(() => {
    const week = getCurrentWeek();
    setActiveWeek(weeks.includes(week) ? week : weeks[0]);
  }, [weeks]);

  return (
    <div className="min-h-screen p-6 bg-amber-50">
      <h1 className="text-3xl font-bold text-center mb-6">
        Monthly Menu - {currentMonthYear}
      </h1>

      {/* Week Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {weeks.map((week) => {
          const isCurrentWeek = week === getCurrentWeek();
          const isActive = activeWeek === week;

          return (
            <button
              key={week}
              onClick={() => setActiveWeek(week)}
              className={`px-4 py-2 rounded-full font-semibold border transition-all relative
                ${isActive ? 'bg-amber-600 text-white shadow' : 'bg-white hover:bg-amber-100'}
              `}
            >
              {week}
              {isCurrentWeek && (
                <span className="absolute -top-2 -right-2 text-xs bg-blue-500 text-white px-1.5 py-0.5 rounded-full">
                  Now
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Menu Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {Object.entries(monthlyMenu[activeWeek] || {}).map(([day, data], index) => (
          <div
            key={index}
            onClick={() => setModalData({ ...data, day })}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={data.image}
              alt={data.dish}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-xl font-semibold">{day}</h3>
            <p className="text-gray-600">{data.dish}</p>
            <span className="text-sm text-blue-500 hover:underline">View Details</span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-11/12 sm:w-96 shadow-lg relative">
            <button
              onClick={() => setModalData(null)}
              className="absolute top-2 right-2 text-xl font-bold text-gray-700 hover:text-red-500"
            >
              &times;
            </button>
            <img
              src={modalData.image}
              alt={modalData.dish}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{modalData.dish}</h2>
            <p className="text-gray-700">{modalData.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeeklyMenu;
