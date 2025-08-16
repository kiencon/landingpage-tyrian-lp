/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';

const images = [
  '/tyrian-job-ems.png',
  '/tyrian-job-PD.png',
  '/tyrian-job-crim.png',
  '/tyrian-job-worker.png',
];

const Hero = () => {
  const [displayLogo, setDisplayLogo] = useState(false);
  return (
    <div className='hero'>
      <div
        className='bg cursor-pointer'
        style={{ filter: displayLogo ? 'none' : 'saturate(0) brightness(30%)' }}
      ></div>
      <div className='container-full'>
        <section className='pt-48'>
          <div
            onMouseEnter={() => {
              setDisplayLogo(true);
            }}
            className='relative flex justify-around'
          >
            {images.map((e, i) => (
              <div key={e} className='relative w-[300px]'>
                <img
                  className={`block rounded-3xl ${
                    i === 1 || i === 2 ? 'absolute w-full -top-[50px]' : ''
                  }`}
                  onMouseEnter={() => {
                    setDisplayLogo(true);
                  }}
                  style={{
                    transition: '.5s',
                    filter: displayLogo
                      ? 'none'
                      : 'saturate(0) brightness(30%)',
                  }}
                  width={300}
                  src={e}
                  alt={e}
                />
              </div>
            ))}
          </div>
          <div
            style={{
              transition: '0.5s',
              bottom: `${displayLogo ? '-150px' : '-300px'}`,
            }}
            className={`absolute left-[50%] -translate-x-[50%] ease-in ${
              displayLogo ? '' : 'opacity-0'
            }`}
          >
            <img src='/logo.webp' alt='logo' width={400} height={'auto'} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
