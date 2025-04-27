import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#f4f4f4] text-gray-800 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Column 1 - Logo & About */}
        <div>
          <h1 className="text-2xl font-bold text-[#5e3d2c] mb-2">PotHere</h1>
          <p>Handcrafted pots, made with love and clay. Bringing tradition and modern design together.</p>
        </div>

        {/* Column 2 - Navigation */}
        <div>
          <h2 className="text-lg font-semibold text-[#7a4c32] mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-[#7a4c32] mb-2">Contact Us</h2>
          <p>Email: support@potherepots.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Palakkad, Kerala</p>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-600 border-t border-gray-300 pt-4">
        © {new Date().getFullYear()} PotHere. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
