import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
// import ProductCard from './components/ProductCard';
import VideoSection from './components/VideoSection';
import GallerySection from './components/GallerySection';
import CustomerReviews from './components/CustomerReviews';
import FAQSection from './components/FAQSection';
import BonusFeatures from './components/BonusFeatures';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans text-gray-800 px-4 md:px-12 lg:px-20">
      <Header />
      <Hero />
      <ProductSection />
      {/* <ProductCard /> */}
    
      <GallerySection/>
      <BonusFeatures/>
        <VideoSection />
        <FAQSection/>
        <CustomerReviews/>
        <ContactForm/>
         <Footer/>
    </div>
  );
};

export default App;
