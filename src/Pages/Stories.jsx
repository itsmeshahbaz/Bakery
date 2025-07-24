import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const storiesData = [
  {
    id: 1,
    title: "🎉A Birthday Bash with Flavor",
    content: "For Ali’s 30th birthday, he didn’t want a fancy restaurant — he wanted food that spoke of home. We curated a spicy street-food menu featuring live chaat stations, sizzling seekh kabab's, and piping hot jalebis. It was more than just catering; it was an experience filled with joy, laughter, and nostalgia.",
    media: [  
      { type: "image", src: "../event/bir3.jpg" },
      { type: "video", src: "../event/bir.mp4" },
      { type: "image", src: "./../event/bir4.jpg" },
      { type: "image", src: "./../event/bir5.jpg" },
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
      { type: "image", src: "../event/lunch 1.jpg" },
      { type: "video", src: "../event/lunch1.mp4" },
      { type: "video", src: "../event/lunch2.mp4" },
    ],
  },
  
];

function Stories() {
  const [openMedia, setOpenMedia] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMediaClick = (mediaArray) => {
    setOpenMedia(mediaArray);
    setCurrentIndex(0);
    setShowModal(true);
  };

  const renderMedia = (item, index, onClick, isLarge = false) => {
    if (item.type === "video") {
      return (
        <video
          key={index}
          controls
className={`rounded-lg shadow-lg transition-transform duration-300 ${isLarge ? "max-h-[80vh] w-full object-contain" : "w-80 h-60 object-cover cursor-pointer hover:rotate-180"}`}
          onClick={onClick}
          src={item.src}
        />
      );
    } else {
      return (
        <img
          key={index}
          src={item.src}
          alt={`media-${index}`}
          className={`rounded-lg shadow-lg ${isLarge ? "max-h-[80vh] w-full object-contain" : "w-80 h-60 object-cover cursor-pointer hover:scale-105 transition-transform"}`}
          onClick={onClick}
        />
      );
    }
  };

  return (
    <div className="pt-24 px-20 pb-16 bg-amber-100/80 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-amber-700 mb-12">Our Stories</h1>

      {storiesData.map((story, index) => (
        <div key={story.id} className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center mb-16`}>
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">{story.title}</h2>
            <p className="text-gray-700 text-md text-justify">{story.content}</p>
          </div>
          <div className="md:w-1/2 p-4 flex justify-center">
            {renderMedia(story.media[0], 0, () => handleMediaClick(story.media))}
          </div>
        </div>
      ))}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative w-full max-w-3xl px-6">
            <button
              className="absolute top-4 right-1 text-white text-3xl"
              onClick={() => setShowModal(false)}
            >
              <FaTimes />
            </button>

            <div className="relative flex items-center justify-center">
              {/* Previous */}
              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev === 0 ? openMedia.length - 1 : prev - 1))
                }
                className="absolute left-0 text-white text-3xl px-4"
              >
                &#10094;
              </button>

              {/* Render current media */}
              {renderMedia(openMedia[currentIndex], currentIndex, null, true)}

              {/* Next */}
              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev === openMedia.length - 1 ? 0 : prev + 1))
                }
                className="absolute right-0 text-white text-3xl px-4"
              >
                &#10095;
              </button>
            </div>

            {/* Indicator */}
            <div className="text-center text-white mt-4">
              {currentIndex + 1} / {openMedia.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Stories;
