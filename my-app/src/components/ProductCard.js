const ProductCard = ({ title, desc, imgSrc, price }) => {
  return (
    <div className="group relative border border-green-200 rounded-lg overflow-hidden shadow-md text-center transition-all duration-300 hover:shadow-lg">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Price - hidden until hover */}
      <div className="absolute top-2 right-2 bg-white text-green-700 text-sm font-semibold px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        ₹{price}
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4 text-sm text-gray-600">{desc}</p>
        <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
