import React from 'react';
import { FaGift, FaBell, FaHeart } from 'react-icons/fa';

const bonusFeatures = [
  {
    icon: <FaGift className="text-pink-600 text-3xl mb-2" />,
    title: 'Seasonal Offers',
    description: 'Display special discounts and festive deals to attract more customers.',
    bgColor: 'bg-pink-50',
  },
  {
    icon: <FaBell className="text-yellow-500 text-3xl mb-2" />,
    title: 'Live Notification',
    description: 'Show popups like "Someone just bought a flower wreath!" to build trust.',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: <FaHeart className="text-red-500 text-3xl mb-2" />,
    title: 'Wishlist Feature',
    description: 'Let users save favorite items and come back later to buy them.',
    bgColor: 'bg-red-50',
  },
];

const BonusFeatures = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        🎁 Bonus Features
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {bonusFeatures.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-md text-center ${feature.bgColor}`}
          >
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BonusFeatures;
