import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-100 text-gray-700 pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        
        {/* Column 1 - Brand */}
        <div>
          <h3 className="text-2xl font-bold text-green-800 mb-2">SangiCrafts</h3>
          <p className="text-sm">
            Handmade crafts from recycled materials. Eco-friendly, beautiful & meaningful.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-green-800 mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Socials */}
        <div>
          <h4 className="text-lg font-semibold text-green-800 mb-2">Follow Us</h4>
          <div className="flex space-x-4 text-green-700">
            <a href="#" className="p-2 bg-white rounded-full shadow hover:bg-green-200 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-white rounded-full shadow hover:bg-green-200 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-white rounded-full shadow hover:bg-green-200 transition">
              <FaPinterestP />
            </a>
            <a href="#" className="p-2 bg-white rounded-full shadow hover:bg-green-200 transition">
              <FaEnvelope />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Note */}
      <div className="mt-10 border-t border-green-200 pt-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} SangiCrafts. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
