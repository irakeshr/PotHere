import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItemCard from '../CartItemCard';
import AnimatedContent from '../../styles/AnimatedContent';

function CartItems() {
  const { cartItems, setCartItems } = useContext(CartContext);
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
    
    if (newQuantity < 1) return;
  
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId)); 
  
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

  <CartItemCard
    key={index}
    item={item}
    onQuantityChange={handleQuantityChange}
    onRemove={handleRemoveItem}
  />

  </AnimatedContent>
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