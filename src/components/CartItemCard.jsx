import React from 'react';

function CartItemCard({ item, onQuantityChange, onRemove }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-gray-700">Size: {item.size}</p>
        <p className="text-gray-700">Dimensions: {item.dimensions}</p>
        
        <div className="flex items-center my-2">
          <p className="text-xl font-semibold mr-2">Quantity:</p>
          <button
            onClick={() => onQuantityChange(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"
          >
            -
          </button>
          <span className="mx-2">{item.quantity}</span>
          <button
            onClick={() => onQuantityChange(item.id, item.quantity + 1)}
            className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"
          >
            +
          </button>
        </div>

        <p className="text-xl font-semibold">Price: ₹{item.price}</p>
        <p className="text-xl font-semibold">Subtotal: ₹{item.price * item.quantity}</p>

        <button
          onClick={() => onRemove(item.id)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItemCard;
