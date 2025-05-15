import React from 'react';
import ProductCard from '../ProductCard';
import { Link } from 'react-router-dom';

const dummyProducts = [
  {
    id: 1,
    name: 'Terracotta Pot',
    price: 12.99,
    image: './src/assets/potspng/pot1.png',
  },
  {
    id: 2,
    name: 'Modern White Pot',
    price: 19.99,
    image: './src/assets/potspng/pot2.png',
  },
  {
    id: 3,
    name: 'Handcrafted Ceramic',
    price: 24.99,
    image: './src/assets/potspng/pot3.png',
  },
  {
    id: 4,
    name: 'Another Terracotta',
    price: 15.50,
    image: './src/assets/potspng/pot4.png',
  },
  {
    id: 5,
    name: 'Small Plant Pot',
    price: 9.75,
    image: './src/assets/potspng/pot3.png',
  },
  {
    id: 6,
    name: 'Painted Ceramic Pot',
    price: 21.00,
    image: './src/assets/potspng/pot2.png',
  },
  {
    id: 7,
    name: 'Terracotta Pot',
    price: 12.99,
    image: './src/assets/potspng/pot1.png',
  },
  {
    id: 8,
    name: 'Modern White Pot',
    price: 19.99,
    image: './src/assets/potspng/pot2.png',
  },
  {
    id: 9,
    name: 'Handcrafted Ceramic',
    price: 24.99,
    image: './src/assets/potspng/pot3.png',
  },
  {
    id: 10,
    name: 'Another Terracotta',
    price: 15.50,
    image: './src/assets/potspng/pot4.png',
  },
  {
    id: 11,
    name: 'Small Plant Pot',
    price: 9.75,
    image: './src/assets/potspng/pot3.png',
  },
  {
    id: 12,
    name: 'Painted Ceramic Pot',
    price: 21.00,
    image: './src/assets/potspng/pot2.png',
  },
];

const Shop = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {dummyProducts.map((product) => (
          <Link to={'/product/' + product.id} key={product.id} className={'block'}>
          <ProductCard key={product.id} product={product} />
          </Link>
          
        ))}
      </div>
    </div>
  );
};

export default Shop;