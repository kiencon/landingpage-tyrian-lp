'use client';

import { useState } from 'react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayLogo, setDisplayLogo] = useState(false);
  return (
    <div className='hero'>
      <div
        className='bg cursor-pointer'
        style={{ filter: isHovered ? 'none' : 'saturate(0) brightness(30%)' }}
      ></div>
      <div className='container-full'>
        <section className='pt-48'>
          <div
            onMouseEnter={() => {
              setIsHovered(true);
              setDisplayLogo(true);
            }}
            onMouseLeave={() => setIsHovered(false)}
            className='relative flex justify-around'
          >
            <div>
              <img
                className='block rounded-3xl'
                width={300}
                src={'/tyrian-job-ems.png'}
                alt='tyrian-job-ems'
              />
            </div>
            <div className='relative w-[300px]'>
              <img
                className='block rounded-3xl absolute w-full -top-[50px]'
                width={300}
                src={'/tyrian-job-PD.png'}
                alt='tyrian-job-PD'
              />
            </div>
            <div className='relative w-[300px]'>
              <img
                className='block rounded-3xl absolute w-full -top-[50px]'
                width={300}
                src={'/tyrian-job-crim.png'}
                alt='tyrian-job-crim'
              />
            </div>
            <div>
              <img
                className='block rounded-3xl'
                width={300}
                src={'/tyrian-job-worker.png'}
                alt='tyrian-job-worker'
              />
            </div>
          </div>
          <div
            style={{ transition: '1s', bottom: `${displayLogo ? '0' : ''}` }}
            className={`absolute -bottom-[30px] left-[50%] -translate-x-[50%] ease-in ${
              displayLogo ? '' : 'opacity-0'
            }`}
          >
            <img src='/logo.webp' alt='logo' width={300} height={'auto'} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
