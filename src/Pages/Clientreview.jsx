import React from 'react';

const reviews = [
  {
    id: 1,
    name: "Aisha Khan",
    company: "TechNova Ltd.",
    text: "Meal Mate Catering has never disappointed. Timely service and great taste every time!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Omar Malik",
    company: "Creative Solutions",
    text: "Our corporate event was a hit thanks to their delicious food and professional service.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Sana Iqbal",
    company: "GreenTech",
    text: "Highly recommend for office lunches! Great value and quality.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const ClientReviews = () => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-amber-700 mb-10">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-md p-6">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 mx-auto rounded-full mb-4 shadow"
              />
              <p className="text-gray-700 italic">"{review.text}"</p>
              <h4 className="mt-4 font-semibold text-gray-800">{review.name}</h4>
              <span className="text-sm text-gray-500">{review.company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
