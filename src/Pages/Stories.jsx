import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

// Sample data
const storiesData = [
  {
    id: 1,
    title: "Healthy Meals for Busy People",
    content: "We provide nutritious meals for busy professionals, ensuring they never skip a healthy lunch.",
    images: ["./stories/pic1.jpg", "./stories/pic2.jpg", "./stories/pic3.jpg","./stories/pic4.jpg","./stories/pic5.jpg"],
  },
  {
    id: 2,
    title: "Office Events Made Delicious",
    content: "Our catering services made this office party unforgettable. Great food, happy faces.",
    images: ["/imgs/story6.jpg", "/imgs/story7.jpg", "/imgs/story8.jpg", "/imgs/story9.jpg", "/imgs/story10.jpg"],
  },
  {
    id: 2,
    title: "Office Events Made Delicious",
    content: "Our catering services made this office party unforgettable. Great food, happy faces.",
    images: ["/imgs/story6.jpg", "/imgs/story7.jpg", "/imgs/story8.jpg", "/imgs/story9.jpg", "/imgs/story10.jpg"],
  },
  {
    id: 2,
    title: "Office Events Made Delicious",
    content: "Our catering services made this office party unforgettable. Great food, happy faces.",
    images: ["/imgs/story6.jpg", "/imgs/story7.jpg", "/imgs/story8.jpg", "/imgs/story9.jpg", "/imgs/story10.jpg"],
  },
];

function Stories() {
 const [openImages, setOpenImages] = useState([]);
const [showModal, setShowModal] = useState(false);
const [currentIndex, setCurrentIndex] = useState(0);

const handleImageClick = (images) => {
  setOpenImages(images);
  setCurrentIndex(0);
  setShowModal(true);
};


  return (
    <div className="pt-24 px-6 pb-16 bg-gradient-to-b from-amber-50 to-yellow-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-amber-700 mb-12">Our Stories</h1>

      {storiesData.map((story, index) => (
        <div key={story.id} className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center mb-16`}>
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">{story.title}</h2>
            <p className="text-gray-700 text-md">{story.content}</p>
          </div>
          <div className="md:w-1/2 p-4 flex justify-center">
            <img
              src={story.images[0]}
              alt={story.title}
              className="w-80 h-60 object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
              onClick={() => handleImageClick(story.images)}
            />
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
              {/* Previous button */}
              <button
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === 0 ? openImages.length - 1 : prev - 1
                  )
                }
                className="absolute left-0 text-white text-3xl px-4"
              >
                &#10094;
              </button>

              {/* Image Slide */}
              <img
                src={openImages[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="max-h-[80vh] w-full object-contain rounded-lg shadow-lg transition-all duration-300"
              />

              {/* Next button */}
              <button
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === openImages.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-0 text-white text-3xl px-4"
              >
                &#10095;
              </button>
            </div>

            {/* Slide indicators */}
            <div className="text-center text-white mt-4">
              {currentIndex + 1} / {openImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Stories;
