import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, CookingPot, ShoppingCart } from 'lucide-react';
import { CartContext } from '../context/CartContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-orange-600 border-b-2 border-orange-600 pb-1"
      : "hover:text-orange-500";

  return (
    <nav className="bg-transparent bg-cover sticky top-0 z-50 bg-custom2">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800 flex gap-2">
          <CookingPot className='font-bold' /> PotHere
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-black font-medium -mr-10">
          <li><NavLink to="/" className={linkClasses}>Home</NavLink></li>
          <li><NavLink to="/shop" className={linkClasses}>Shop</NavLink></li>
          <li><NavLink to="/about" className={linkClasses}>About</NavLink></li>
          <li><NavLink to="/contact" className={linkClasses}>Contact</NavLink></li>
          <div className="relative pl-10">
            <li>
              <NavLink to="/cart" className={linkClasses}>
                <ShoppingCart className="text-2xl" />
              </NavLink>
            </li>
            <div className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </div>
          </div>
        </ul>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-gray-700 font-medium">
            <li><NavLink to="/" className={linkClasses}>Home</NavLink></li>
            <li><NavLink to="/shop" className={linkClasses}>Shop</NavLink></li>
            <li><NavLink to="/about" className={linkClasses}>About</NavLink></li>
            <li><NavLink to="/contact" className={linkClasses}>Contact</NavLink></li>
            <li><NavLink to="/cart" className={linkClasses}>Cart</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
