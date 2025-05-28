import React from 'react';
import AnimatedContent from '../../styles/AnimatedContent';
import ProductCard from '../ProductCard';
import { Link } from 'react-router-dom';

const dummyProducts = [
  {
    id: 1,
    name: 'Terracotta Pot',
    price: 120,
    image: '../src/assets/potspng/pot1.png',
     sizes: [
      {
        name: "Small",
        dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
      },
      {
        name: "Medium",
        dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
      },
      {
        name: "Large",
        dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
      }
    ],
  },
  {
    id: 2,
    name: 'Modern White Pot',
    price: 100,
    image: '../src/assets/potspng/pot2.png',
    sizes: [
      {
        name: "Small",
        dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
      },
      {
        name: "Medium",
        dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
      },
      {
        name: "Large",
        dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
      }
    ],
  },
  {
    id: 3,
    name: 'Handcrafted Ceramic',
    price: 150,
    image: '../src/assets/potspng/pot3.png',
    sizes: [
      {
        name: "Small",
        dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
      },
      {
        name: "Medium",
        dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
      },
      {
        name: "Large",
        dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
      }
    ],
  },
  {
    id: 4,
    name: 'Another Terracotta',
    price: 80,
    image: '../src/assets/potspng/pot4.png',
    sizes: [
      {
        name: "Small",
        dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
      },
      {
        name: "Medium",
        dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
      },
      {
        name: "Large",
        dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
      }
    ],
  },
  {
    id: 5,
    name: 'Small Plant Pot',
    price: 90,
    image: '../src/assets/potspng/pot3.png',
    sizes: [
      {
        name: "Small",
        dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
      },
      {
        name: "Medium",
        dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
      },
      {
        name: "Large",
        dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
      }
    ],
  },
  {
    id: 6,
    name: 'Painted Ceramic Pot',
    price: 100.00,
    image: '../src/assets/potspng/pot2.png',
    sizes: [
      {
        name: "Small",
        dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
      },
      {
        name: "Medium",
        dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
      },
      {
        name: "Large",
        dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
      }
    ],
  },
  {
    id: 7,
    name: 'Terracotta Pot',
    price: 120.99,
    image: '../src/assets/potspng/pot1.png',
    sizes: [
      {
        name: "Small",
        dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
      },
      {
        name: "Medium",
        dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
      },
      {
        name: "Large",
        dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
      }
    ],
  },
  {
    id: 8,
    name: 'Modern White Pot',
    price: 110.99,
    image: '../src/assets/potspng/pot2.png',
    sizes: [
      {
        name: "Small",
        dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
      },
      {
        name: "Medium",
        dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
      },
      {
        name: "Large",
        dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
      }
    ],
  },
  {
    id: 9,
    name: 'Handcrafted Ceramic',
    price: 60.99,
    image: '../src/assets/potspng/pot3.png',
    sizes: [
      {
        name: "Small",
        dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
      },
      {
        name: "Medium",
        dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
      },
      {
        name: "Large",
        dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
      }
    ],
  },
  {
    id: 10,
    name: 'Another Terracotta',
    price: 135.50,
    image: '../src/assets/potspng/pot4.png',
    sizes: [
      {
        name: "Small",
        dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
      },
      {
        name: "Medium",
        dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
      },
      {
        name: "Large",
        dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
      }
    ],
  },
  {
    id: 11,
    name: 'Small Plant Pot',
    price: 90.75,
    image: '../src/assets/potspng/pot3.png',
    sizes: [
      {
        name: "Small",
        dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
      },
      {
        name: "Medium",
        dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
      },
      {
        name: "Large",
        dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
      }
    ],
  },
  {
    id: 12,
    name: 'Painted Ceramic Pot',
    price: 120.00,
    image: '../src/assets/potspng/pot2.png',
    sizes: [
      {
        name: "Small",
        dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
      },
      {
        name: "Medium",
        dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
      },
      {
        name: "Large",
        dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
      }
    ],
  },
];
const Shop = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Collection</h1>
      <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3">
  {dummyProducts.map((product) => (

<AnimatedContent

distance={150}

direction="vertical"

reverse={false}

config={{ tension: 80, friction: 20 }}

initialOpacity={0.2}

animateOpacity

scale={1.1}

threshold={0.2}

>
    <Link to={'/product/' + product.id} key={product.id} className="w-full">
      <ProductCard product={product} />
    </Link>
    </AnimatedContent>
  ))}
</div>
    </div>
  );
};

export default Shop;