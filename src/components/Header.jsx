import React from 'react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-semibold text-gray-800">
          Goow Boutique
        </a>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-gray-600 hover:text-gray-800">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="text-gray-600 hover:text-gray-800">
                Shop
              </a>
            </li>
            <li>
              <a href="/cart" className="text-gray-600 hover:text-gray-800">
                Cart
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}