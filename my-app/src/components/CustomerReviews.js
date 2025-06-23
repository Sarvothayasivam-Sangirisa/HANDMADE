import React from 'react';

const reviews = [
  {
    name: 'Anjali Devi',
    rating: 5,
    comment: 'Absolutely loved the plastic owl! Very creative and detailed.',
  },
  {
    name: 'Kumar S.',
    rating: 4,
    comment: 'The wreath was beautiful and well-made. Worth the price!',
  },
  {
    name: 'Meena R.',
    rating: 5,
    comment: 'Loved the lantern! Perfect for my home decor.',
  },
];

const CustomerReviews = () => {
  return (
    <section className="bg-white py-10 px-6">
      <h2 className="text-2xl font-bold text-center mb-6">⭐ Customer Reviews</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {reviews.map((review, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md bg-gray-50">
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-lg">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </span>
              <span className="ml-auto text-sm text-gray-500">{review.name}</span>
            </div>
            <p className="text-sm text-gray-700 italic">“{review.comment}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
