import React, { useContext } from 'react';
import { useState } from "react";
import { Menu, X,CookingPot,ShoppingCart } from "lucide-react";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Navbar({products}){

    const [isOpen, setIsOpen]=useState(false)
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3562637371.
     const {cartItems}= useContext(CartContext);
     const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    
    
    

    const toggleMenu=()=> setIsOpen(!isOpen);


    return (
        <nav className="bg-transparent   bg-cover     sticky top-0 z-50 bg-custom2">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800 flex gap-2"><CookingPot className='font-bold'/> PotHere</div>
    
            {/* Desktop Links */}
            <ul className="hidden md:flex space-x-8 text-black font-medium -mr-10">
              <li><Link to="/"   className="hover:text-black">Home</Link></li>
              <li><Link to="shop" className="hover:text-black">Shop</Link></li>
              <li><Link to="about" className="hover:text-black">About</Link></li>
              <li><Link to="contact" className="hover:text-black">Contact</Link></li>
              <div className="relative pl-10">
  <li>
    <Link to="cart" className="hover:text-black">
      <ShoppingCart className="text-2xl" />
    </Link>
  </li>
  <div className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:461388494. */}
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
                <li><a href="#" className="block hover:text-yellow-500">Home</a></li>
                <li><a href="#" className="block hover:text-yellow-500">Shop</a></li>
                <li><a href="#" className="block hover:text-yellow-500">About</a></li>
                <li><a href="#" className="block hover:text-yellow-500">Contact</a></li>
              </ul>
            </div>
          )}
        </nav>
      );
    }
    
    export default Navbar;