import React from 'react';
import { useState } from "react";
import { Menu, X,CookingPot } from "lucide-react";

function Navbar(){

    const [isOpen, setIsOpen]=useState(false)

    const toggleMenu=()=> setIsOpen(!isOpen);


    return (
        <nav className="bg-transparent   bg-cover     sticky top-0 z-50 bg-custom">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800 flex gap-2"><CookingPot className='font-bold'/> PotHere</div>
    
            {/* Desktop Links */}
            <ul className="hidden md:flex space-x-8 text-white font-medium -mr-10">
              <li><a href="#" className="hover:text-black">Home</a></li>
              <li><a href="#" className="hover:text-black">Shop</a></li>
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
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