import ProductCard from './ProductCard';
import owl from '../assets/images/owl.jpg';         // replace with your images
import wreath from '../assets/images/wea.jpeg';
import lantern from '../assets/images/lantern1.jpg';

const ProductSection = () => {
  return (
    <section className="px-8 py-11 bg-white">
      {/* <h2 className="text-5xl font-bold text-center mb-8">Product Cares</h2> */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <ProductCard title="Plastic Bottle Ow!" desc="Upcycled bottle turned into owl" imgSrc={owl} price="40"/>
        <ProductCard title="Paper Flower Wreath" desc="Colorful wreath made from paper flowers" price="70" imgSrc={wreath} />
        <ProductCard title="Tin Can Lantern" desc="Decorative lantern crafted from a can" price="90" imgSrc={lantern} />
      </div>
    </section>
  );
};

export default ProductSection;
