import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

// Sample data
const storiesData = [
  {
    id: 1,
    title: "Healthy Meals for Busy People",
    content: "We provide nutritious meals for busy professionals, ensuring they never skip a healthy lunch.",
    images: ["/imgs/story1.jpg", "/imgs/story2.jpg", "/imgs/story3.jpg", "/imgs/story4.jpg", "/imgs/story5.jpg"],
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

  const handleImageClick = (images) => {
    setOpenImages(images);
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
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg p-6 relative max-w-4xl w-full">
            <button
              className="absolute top-2 right-2 text-2xl text-red-500 hover:text-red-700"
              onClick={() => setShowModal(false)}
            >
              <FaTimes />
            </button>
            <h3 className="text-xl font-semibold mb-4 text-center text-amber-800">Story Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {openImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="story"
                  className="w-full h-48 object-cover rounded shadow-md"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Stories;
