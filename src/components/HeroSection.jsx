import React from 'react';
import Shop from './Pages/Shop';
import PotShow from './PotShow';
import AboutSection from './Pages/AboutSection';
import BlurText from '../styles/BlurText';
 
function HeroSection() {

  const handleAnimationComplete = () => {

    console.log('Animation completed!');
  
  };
  
  return (
<div className="  w-full relative  bg-fixed">

<div className="md:h-[100vh] h-[70vh] bg-cover bg-center flex items-center justify-center bg-custom">
    <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8'>
<div className='flex flex-col items-center justify-center relative md:top-[-50px] '>
{/* <h1 className="sm:relative sm:top-0 text-4xl  md:text-5xl sm:font-extrabold leading-tight text-gray-900 mb-4 font-mono ml-0 absolute md:top-[-150px] font-bold text-[30px] top-[-300px]">
  Discover the Pot That Elevates Your Space
</h1> */}
 
<BlurText

text="Traditional clay cookware for modern kitchens."

delay={150}

animateBy="words"

direction="top"

onAnimationComplete={handleAnimationComplete}

className="mb-8 text-5xl md:text-7xl font-bold  "

/>
   

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
