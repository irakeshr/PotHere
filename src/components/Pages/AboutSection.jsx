import React from 'react';
import PotShow from '../PotShow';

function AboutSection() {
  return (
    <section className="bg-[#fdfdfd] py-16 px-6 md:px-20 text-gray-800">
        
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#5e3d2c]">About Us</h2>
        <p className="text-lg mb-6 leading-relaxed">
          At <span className="font-semibold text-[#7a4c32]">ClayCraft</span>, we specialize in handcrafted pottery that blends tradition with modern elegance.
          Every pot we create tells a story—of earth, artistry, and care. Whether you're decorating your home or gifting something meaningful, our products are made to last and inspire.
        </p>
        <p className="text-base text-gray-600">
          Based in Kerala, our artisans have years of experience in shaping clay into timeless pieces. We're committed to sustainability and bringing beauty into your everyday life.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;