import React from 'react';
import ProductCard from './ProductCard';
import { Button } from './ui/button';

const ProductsSection = ({ products, loading }) => {
  const handleRetry = () => {
    // Mock retry functionality
    window.location.reload();
  };

  return (
    <section id="products" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Premium Collection
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hand-picked rare pets with guaranteed authenticity. Updated stock and pricing in real-time.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
            <p className="text-gray-400 mt-4">Loading premium pets...</p>
          </div>
        )}

        {/* Error State */}
        {!loading && products.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-white mb-2">Failed to Load Products</h3>
            <p className="text-gray-400 mb-6">Unable to fetch current pricing and stock information.</p>
            <Button 
              onClick={handleRetry}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2"
            >
              Retry
            </Button>
          </div>
        )}

        {/* Products Grid */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;