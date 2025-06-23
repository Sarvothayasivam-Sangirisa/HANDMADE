import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    question: 'What materials do you use?',
    answer: 'We use recycled materials like plastic bottles, cans, paper, and cardboard.',
  },
  {
    question: 'Do you take custom orders?',
    answer: 'Yes, you can contact us with your request and we’ll craft it for you.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Shipping usually takes 3-5 business days within Sri Lanka.',
  },
  {
    question: 'Are your products eco-friendly?',
    answer: 'Yes, all our handmade crafts are eco-friendly and made from waste.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        ❓ Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border rounded-xl shadow-md transition-all duration-300 ${
                isOpen ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-800 hover:bg-green-100 rounded-t-xl transition-colors duration-200"
              >
                <span>{faq.question}</span>
                <span className="text-xl">
                  {isOpen ? <FiMinus /> : <FiPlus />}
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed transition-all duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
