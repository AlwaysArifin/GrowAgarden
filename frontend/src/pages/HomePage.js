import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductsSection from '../components/ProductsSection';
import Footer from '../components/Footer';
import { mockProducts } from '../data/mockData';

const HomePage = () => {
  const [products] = useState(mockProducts);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductsSection products={products} loading={loading} />
      <Footer />
    </div>
  );
};

export default HomePage;