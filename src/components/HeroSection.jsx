import React from 'react';
import Shop from './Pages/Shop';
import PotShow from './PotShow';
import AboutSection from './Pages/AboutSection';
import HeroImage from '../assets/Hero2.jpeg'
 
function HeroSection() {
  return (
<div className="  w-full relative  bg-fixed">

<div className="h-[100vh] bg-cover bg-center flex items-center justify-center bg-custom">
    <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8'>
<div className='flex flex-col items-center justify-center relative top-10'>
<h1 className="sm:relative sm:top-0 text-4xl  md:text-5xl sm:font-extrabold leading-tight text-gray-900 mb-4 font-mono ml-0 absolute md:top-[-150px] font-bold text-[30px] top-[-300px]">
  Discover the Pot That Elevates Your Space
</h1>
  <div className='flex gap-4 ml-0 -left-10 relative md:top-[-150px] sm:top-0'>

    <button className='bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg  transition'> 
      Shop Now
    </button>
     
  </div>

</div>

    </div>



  </div>
  <PotShow className="hidden md:block"/>
  <Shop/>
  <AboutSection/>
</div>
  );
}

export default HeroSection;
