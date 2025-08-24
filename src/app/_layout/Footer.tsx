/* eslint-disable @next/next/no-img-element */

const Footer = () => (
  <div>
    <div className='container-full py-24 h-[360px]'>
      <h3 className='text-2xl text-white text-center'>
        Connection socially with Tyrian
      </h3>
      <div className='flex justify-around mt-24'>
        <div className='w-[20%]'>
          <img src='/ytb_logo.svg' alt='youtube' />
        </div>
        <div className='w-[20%]'>
          <img src='/tt_logo.svg' alt='tiktok' />
        </div>
        <div className='w-[20%]'>
          <img src='/discord_logo.svg' alt='discord' />
        </div>
      </div>
    </div>
    <footer className='pt-24 pb-6 bg-black'>
      <div className='container-full text-white text-xl text-center'>
        2025 © All rights reserved
      </div>
    </footer>
  </div>
);

export default Footer;
