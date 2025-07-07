import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

// Sample data
const storiesData = [
  {
    id: 1,
    title: "🍽️A Wedding to Remember",
    content: "It all began with a bride’s dream of having her favorite childhood dishes served on her big day. Our team worked closely with the couple, recreating recipes passed down from her grandmother’s kitchen. From hand-rolled chapli kabab's to soft naan and creamy kheer, every bite brought a memory to life. Guests didn’t just eat — they felt the story behind the food.",
    images: ["./stories/pic1.jpg", "./stories/pic2.jpg", "./stories/pic3.jpg", "./stories/pic4.jpg", "./stories/pic5.jpg"],
  },
  {
    id: 2,
    title: "🎉A Birthday Bash with Flavor",
    content: "For Ali’s 30th birthday, he didn’t want a fancy restaurant — he wanted food that spoke of home. We curated a spicy street-food menu featuring live chaat stations, sizzling seekh kabab's, and piping hot jalebis. It was more than just catering; it was an experience filled with joy, laughter, and nostalgia.",
    images: ["/imgs/story6.jpg", "/imgs/story7.jpg", "/imgs/story8.jpg", "/imgs/story9.jpg", "/imgs/story10.jpg"],
  },
  {
    id: 3,
    title: "🕌Eid Gathering with Heart",
    content: "One of our most fulfilling events was an Eid dawat for 150 guests. The host wanted traditional dishes served with elegance. We created a feast with biryani, mutton qorma, shami kabab's, and sheer khurma — all presented with a festive touch. The host later told us, ‘It felt like a big family meal, just how Eid should be",
    images: ["/imgs/story6.jpg", "/imgs/story7.jpg", "/imgs/story8.jpg", "/imgs/story9.jpg", "/imgs/story10.jpg"],
  },
  {
    id: 4,
    title: "🏢Corporate Lunch, Desi Style",
    content: "When a tech company approached us for their team lunch, they asked for something ‘local but professional.’ We delivered boxed meals with butter chicken, naan, salad, and gulab jamun — neatly packed but full of taste. The team was so impressed, they made it a monthly tradition.",
    images: ["/imgs/story6.jpg", "/imgs/story7.jpg", "/imgs/story8.jpg", "/imgs/story9.jpg", "/imgs/story10.jpg"],
  },
  {
    id: 5,
    title: "🌿Garden Engagement Dinner",
    content: "An outdoor engagement ceremony needed something elegant yet cozy. We crafted a menu around light starters, creamy pastas, grilled meats, and a touch of fusion — like chicken tikka sliders. Fairy lights, aroma in the air, and warm plates from our live station — it became a night no one wanted to end.",
    images: ["/imgs/story6.jpg", "/imgs/story7.jpg", "/imgs/story8.jpg", "/imgs/story9.jpg", "/imgs/story10.jpg"],
  },
  {
    id: 6,
    title: "☕Small Moments, Big Joy",
    content: "Not every story is about big events. Sometimes, it's about a family ordering our catering for their father’s retirement at home. We delivered a customized mini buffet with all his favorite dishes. The son later shared a picture — the father smiling with a full plate and even fuller heart",
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
    <div className="pt-24 px-6 pb-16 bg-amber-100/80 min-h-screen">
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
