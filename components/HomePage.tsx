import React from 'react';
import Hero from './Hero';
import Features from './Features';
import ProductGrid from './ProductGrid';
import HowItWorks from './HowItWorks';
import TargetAudience from './TargetAudience';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import FAQ from './FAQ';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <ProductGrid />
      {/* SalesNavActivation removed from Home */}
      <HowItWorks />
      <TargetAudience />
      <Pricing />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default HomePage;