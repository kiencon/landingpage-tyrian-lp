'use client';

import { useState } from 'react';

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
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
              <img src='/logo_cover.png' alt='logo' />
            </div>
            <p className='text-[#cc94e5] my-12 uppercase font-semibold text-3xl '>
              LOS SANTOS - Roleplay Server
            </p>
            <div className='flex text-white font-semibold text-xl'>
              <div className='btn mr-12'>
                <span>Tổng</span>
                <span>1396</span>
              </div>
              <div className='btn mr-12'>
                <span>Online</span>
                <span>96</span>
              </div>
              <div className='btn mr-12'>
                <span>Server</span>
                <span>LOS SANTOS</span>
              </div>
            </div>
            <div className='mt-4 flex font-semibold text-xl'>
              <button className='btn'>Chơi Ngay</button>
            </div>
          </section>
        </div>
      </div>
      <div className='pt-12 flex justify-center items-center rounded-lg max-w-[1600px] mx-auto'>
        <div className='w-full xl:w-1/2 z-10'>
          <div className='mx-auto px-8 rounded-3xl mb-2 relative w-full'>
            <iframe
              className='rounded-3xl'
              width='100%'
              height='350'
              src='https://www.youtube.com/embed/AzyWvLxhurs?si=aXvyWUC0iesugOyf'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              aria-label='To enrich screen reader interactions, please activate Accessibility in Grammarly extension settings'
            ></iframe>
            <div className='grid grid-cols-2 gap-2 rounded-lg container container-two mx-auto px-8 mt-4'>
              <div className='relative group cursor-pointer'>
                <div className=''>
                  <img
                    src='/gameplay15.jpg'
                    className='object-cover rounded-tl-3xl'
                    alt='playgame'
                  ></img>
                </div>
              </div>
              <div className='relative group cursor-pointer'>
                <div className=''>
                  <img
                    src='/gameplay15.jpg'
                    className='object-cover rounded-tr-3xl'
                    alt='playgame'
                  ></img>
                </div>
              </div>
              <div className='relative group cursor-pointer'>
                <div className=''>
                  <img
                    src='/gameplay15.jpg'
                    className='object-cover rounded-bl-3xl'
                    alt='playgame'
                  ></img>
                </div>
              </div>
              <div className='relative group cursor-pointer'>
                <div className=''>
                  <img
                    src='/gameplay15.jpg'
                    className='object-cover rounded-br-3xl'
                    alt='playgame'
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full xl:w-1/2 flex flex-col items-center z-10'>
          <img className='z-20' src='/background3.png' alt='' />
          <div className='flex items-end justify-center z-20 w-4/5'>
            <div className='text-white text-2xl'>
              <span>Tyrian</span>
              <span>
                {' '}
                là một cơ hội độc nhất để bạn hòa mình vào một vũ trụ ảo và nhập
                vai theo những quy tắc giống như cuộc sống thực. Trở thành chính
                trị gia, gangster, doanh nhân, tài xế taxi, công nhân nhà máy,
                cảnh sát hoặc bất kỳ vai trò nào khác. Chúng tôi không có giới
                hạn, bạn hoàn toàn tự do chọn con đường của mình và tạo nên câu
                chuyện riêng trong thế giới ảo này!
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
