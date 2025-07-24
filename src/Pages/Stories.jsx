import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import ImageSlider from './images';

const storiesData = [
  {
    id: 1,
    title: "🎉A Birthday Bash with Flavor",
    content: "For Ali’s 30th birthday, he didn’t want a fancy restaurant — he wanted food that spoke of home. We curated a spicy street-food menu featuring live chaat stations, sizzling seekh kabab's, and piping hot jalebis. It was more than just catering; it was an experience filled with joy, laughter, and nostalgia.",
    media: [
      { type: "video", src: "../event/bir.mp4" },
      { type: "image", src: "../event/bir4.jpg" },
      { type: "image", src: "../event/bir5.jpg" },
      { type: "image", src: "../event/bir3.jpg" },
    ],
  },
  {
    id: 2,
    title: "A Wedding to Remember🎉",
    content: "It all began with a bride’s dream of having her favorite childhood dishes served on her big day. Our team worked closely with the couple, recreating recipes passed down from her grandmother’s kitchen. From hand-rolled chapli kabab's to soft naan and creamy kheer, every bite brought a memory to life. Guests didn’t just eat — they felt the story behind the food",
    media: [
      { type: "image", src: "../event/wed a1.jpg" },
      { type: "image", src: "../event/wed a2.jpg" },
      { type: "video", src: "../event/wed a8.mp4" },
      { type: "image", src: "../event/wed a4.jpg" },
      { type: "image", src: "../event/wed a3.jpg" },
      { type: "video", src: "../event/wed a9.mp4" },
    ],
  },
  {
    id: 3,
    title: "🎉Corporate Lunch, Desi Style",
    content: "When a tech company approached us for their team lunch, they asked for something ‘local but professional.’ We delivered boxed meals with butter chicken, naan, salad, and gulab jamun — neatly packed but full of taste. The team was so impressed, they made it a monthly tradition",
    media: [
      { type: "image", src: "../event/lunch 1.jpg" },
      { type: "video", src: "../event/lunch1.mp4" },
      { type: "video", src: "../event/lunch2.mp4" },
      { type: "image", src: "../event/lunch 2.jpg" },
    ],
  },
];

function Stories() {
  const [openMedia, setOpenMedia] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMediaClick = (mediaArray, index = 0) => {
    setOpenMedia(mediaArray);
    setCurrentIndex(index);
    setShowModal(true);
  };

  const renderMedia = (item, index, onClick, isLarge = false) => {
    const baseClass = `rounded-lg shadow-md transition-transform`;
    const sizeClass = isLarge
      ? "max-h-[80vh] w-full object-contain"
      : "w-full h-56 sm:h-64 md:h-72 object-cover cursor-pointer";

    return item.type === "video" ? (
      <video
        key={index}
        controls
        onClick={onClick}
        src={item.src}
        className={`${baseClass} ${sizeClass} ${!isLarge && "hover:scale-105"}`}
      />
    ) : (
      <img
        key={index}
        src={item.src}
        alt={`media-${index}`}
        onClick={onClick}
        className={`${baseClass} ${sizeClass} ${!isLarge && "hover:scale-105"}`}
      />
    );
  };

  return (
    <div className="pt-24 px-4 md:px-10 lg:px-20 pb-16 bg-amber-100/80 min-h-screen">
       <h1 className="text-3xl md:text-4xl font-bold text-center text-amber-700 mb-8 md:mb-12">Catering</h1>

      <p className='text-gray-700 text-sm sm:text-base leading-relaxed mb-12 max-w-6xl mx-auto'>
        Welcome to our catering service – where flavor meets elegance! Whether you're planning a cozy get-together, a corporate event, or a grand wedding, we bring delicious cuisine, professional service, and thoughtful presentation to every table. Let us handle the food while you focus on making memories.<br /><br />

        🍽️ <strong>Our Catering Services:</strong><br />
        • Full-Service Catering (food, staff, setup, cleanup)<br />
        • Buffet & Live Stations<br />
        • Corporate Catering (meetings, seminars, product launches)<br />
        • Private Events (birthdays, anniversaries, bridal/baby showers)<br />
        • Wedding Catering<br />
        • Lunch Box / Office Meals<br /><br />

        🗂️ <strong>Catering Categories:</strong><br />
        • Weddings & Nikkah Ceremonies<br />
        • Engagement & Dholki Nights<br />
        • Birthdays & Anniversaries<br />
        • Corporate Meetings & Office Lunches<br />
        • Ramadan & Iftar Events<br />
        • Family Gatherings & Home Parties<br /><br />

        🥡 <strong>Service Types:</strong><br />
        • Buffet Setup<br />
        • Live Cooking Stations<br />
        • Seated & Plated Service<br />
        • Drop-off Catering<br />
        • Tea/Coffee & Hi-Tea<br /><br />

        📦 <strong>Packages & Pricing:</strong><br />
        • Basic Package – Ideal for small gatherings<br />
        • Standard Package – Perfect for mid-sized events<br />
        • Premium Package – For weddings and grand occasions<br /><br />

        📝 <strong>Custom Menu Options:</strong><br />
        Have specific tastes or dietary needs? We’ll help you create a personalized menu that matches your event style, guest preferences, and budget.
      </p>

      <h1 className="text-3xl md:text-4xl font-bold text-center text-amber-700 mb-10">Our Stories</h1>

      {storiesData.map((story, index) => (
        <div
          key={story.id}
          className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center mb-16 gap-6`}
        >
          <div className="md:w-1/2 px-4">
            <h2 className="text-xl md:text-2xl font-semibold text-amber-800 mb-4">{story.title}</h2>
            <p className="text-gray-700 text-sm sm:text-base text-justify">{story.content}</p>
          </div>
          <div className="md:w-1/2 px-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {story.media.slice(0, 3).map((media, idx) =>
              renderMedia(media, idx, () => handleMediaClick(story.media, idx))
            )}
          </div>
        </div>
      ))}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4">
          <div className="relative w-full max-w-3xl">
            <button
              className="absolute top-4 right-4 text-white text-3xl z-50"
              onClick={() => setShowModal(false)}
            >
              <FaTimes />
            </button>

            <div className="relative flex items-center justify-center">
              {/* Prev */}
              <button
                onClick={() => setCurrentIndex(prev => prev === 0 ? openMedia.length - 1 : prev - 1)}
                className="absolute left-0 text-white text-3xl px-4 z-50"
              >
                &#10094;
              </button>

              {/* Media */}
              {renderMedia(openMedia[currentIndex], currentIndex, null, true)}

              {/* Next */}
              <button
                onClick={() => setCurrentIndex(prev => prev === openMedia.length - 1 ? 0 : prev + 1)}
                className="absolute right-0 text-white text-3xl px-4 z-50"
              >
                &#10095;
              </button>
            </div>

            <div className="text-center text-white mt-4">
              {currentIndex + 1} / {openMedia.length}
            </div>
          </div>
        </div>
      )}

      <h1 className="text-3xl  md:text-4xl font-bold text-center text-amber-700 mb-8 md:mb-12">Let's Plan Your Event</h1>
      <p className="text-center pb-10 text-gray-700 text-sm sm:text-base px-4 max-w-2xl mx-auto leading-relaxed">
        Get in touch with us to discuss your event details, request a quote, or book a tasting session.<br />
        📍 Serving at all-over the Lahore<br />
        📱 Call/WhatsApp: +92-329-0772203<br />
        📧 Email: mealmate.pk@gmail.com<br />
        🖱️ Or use our Contact Form to request a callback.
      </p>
      <ImageSlider/>
    </div>
  );
}

export default Stories;
