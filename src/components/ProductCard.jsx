import React, { useState } from 'react';

export default function ProductCard({ product }) {
  const [adding, setAdding] = useState(false);

  const handleAddToCart = () => {
    setAdding(true);
    // Simulate API call
    setTimeout(() => {
      // Add to cart logic here
      setAdding(false);
      console.log(`Added ${product.name} to cart`);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2>
      <p className="text-gray-600 flex-1">{product.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-gray-800 font-bold">${product.price}</span>
        <button
          className={`px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-200 cursor-pointer ${
            adding ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleAddToCart}
          disabled={adding}
        >
          {adding ? 'Adding...' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}