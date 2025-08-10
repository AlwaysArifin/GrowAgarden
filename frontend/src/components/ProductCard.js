import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const ProductCard = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price).replace('IDR', 'Rp');
  };

  const handleOrder = () => {
    if (product.contactPrice) {
      // Open WhatsApp for contact
      window.open(`https://wa.me/6285608790822?text=Hi, I'm interested in ${product.name}`, '_blank');
    } else {
      // Mock order functionality
      alert(`Ordering ${product.name} for ${formatPrice(product.price)}`);
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
      {/* Product Image */}
      <div className="relative aspect-square">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x400/1a1a1a/ffffff?text=' + encodeURIComponent(product.name);
          }}
        />
        
        {/* Stock Badge */}
        <div className="absolute top-3 right-3">
          <Badge 
            variant={product.stock > 0 ? "default" : "destructive"}
            className={`${product.stock > 0 ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'} text-white font-medium`}
          >
            Stock: {product.stock}
          </Badge>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mb-3">
          {product.contactPrice ? (
            <span className="text-purple-400 font-semibold">Contact</span>
          ) : (
            <span className="text-xl font-bold text-white">
              {formatPrice(product.price)}
            </span>
          )}
          <span className="text-sm text-gray-400">{product.quality}</span>
        </div>

        {/* Action Button */}
        {product.stock > 0 || product.contactPrice ? (
          <Button 
            onClick={handleOrder}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-medium transition-all duration-200 transform hover:scale-105"
          >
            {product.contactPrice ? 'Contact Us' : 'Order Now'}
          </Button>
        ) : (
          <Button 
            disabled
            className="w-full bg-gray-600 text-gray-400 cursor-not-allowed"
          >
            Out of Stock
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;