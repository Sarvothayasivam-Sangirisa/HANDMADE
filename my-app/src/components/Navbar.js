import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-cream">
      <h1 className="text-xl font-bold">Sangi’s Craft Studio</h1>
      <div className="space-x-6 font-medium">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
