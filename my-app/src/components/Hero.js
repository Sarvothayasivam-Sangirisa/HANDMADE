import plantImg from '../assets/images/plant.png';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-8 bg-cream">
      <div className="md:w-1/2">
        <h2 className="text-5xl font-bold leading-snug">
          Handmade Crafts from <br />
          Waste to Wonder
        </h2>
        <p className="mt-4 text-lg">Unique creations made from recycled materials</p>
        <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Buy Now
        </button>
      </div>
   <div className="md:w-1/4 flex justify-end mt-10 md:mt-0">
  <img
    src={plantImg}
    alt="Plant Craft"
    className="w-64"
  />
</div>

    </section>
  );
};

export default Hero;
