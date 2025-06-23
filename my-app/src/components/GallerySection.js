import { useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80",
    category: "Paper",
  },
  {
    src: "https://images.unsplash.com/photo-1549388604-817d15aa0110?auto=format&fit=crop&w=300&q=80",
    category: "Wood",
  },
  {
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=300&q=80",
    category: "Metal",
  },
  {
    src: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=300&q=80",
    category: "Paper",
  },
  {
    src: "https://images.unsplash.com/photo-1549388604-817d15aa0110?auto=format&fit=crop&w=300&q=80",
    category: "Wood",
  },
  {
    src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=300&q=80",
    category: "Metal",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80",
    category: "Paper",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80",
    category: "Wood",
  },
];

const categories = ["All", "Paper", "Wood", "Metal"];

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <section className="px-6 py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Craft Gallery</h2>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-sm rounded-full border ${
              selectedCategory === cat
                ? "bg-green-600 text-white border-green-600"
                : "border-gray-300 hover:bg-green-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {filteredImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.category}
            className="w-full h-40 object-cover rounded"
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
