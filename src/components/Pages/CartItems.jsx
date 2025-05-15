import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';

function CartItems() {
  const { cartItems, updateQuantity, removeItem } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching cart data
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : cartItems.length === 0 ? (
        <p className="text-center text-2xl font-bold text-gray-500">Your cart is empty!</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cartItems.map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-gray-700">Size: {item.size}</p>
                  <p className="text-gray-700">Dimensions: {item.dimensions}</p>
                  <div className="flex items-center">
                    <p className="text-xl font-semibold mr-2">Quantity:</p>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-xl font-semibold">Price: ₹{item.price}</p>
                  <p className="text-xl font-semibold">Subtotal: ₹{item.price * item.quantity}</p>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Total Amount: ₹{getTotalAmount()}</h2>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Buy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItems;