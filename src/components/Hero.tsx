'use client';

import { useState } from 'react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='hero'>
      <div
        className='bg cursor-pointer'
        style={{ filter: isHovered ? 'none' : 'saturate(0) brightness(30%)' }}
      ></div>
      <div className='container-full'>
        <section className='pt-48'>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src='/tyrian-job-all-city.png' alt='logo' />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
