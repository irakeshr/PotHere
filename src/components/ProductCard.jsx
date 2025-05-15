import React from 'react';


const ProductCard = ({ product }) => {

return (

<div className="bg-white p-4 rounded-2xl shadow-md text-center hover:scale-105 transition-transform">

<img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl" />

<h3 className="text-xl font-semibold mt-2">{product.name}</h3>

<p className="text-gray-600 mt-1">₹{product.price}</p>

<button className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600">

Add to Cart

</button>

</div>

);

};


export default ProductCard; 