'use client';

import { useState } from 'react';

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='bg-black'>
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
      <div className='h-24 transition-gradient'></div>
      <div className='flex justify-center items-center rounded-lg mx-auto relative bg-[#0e0618] container-full'>
        <div className='w-full xl:w-1/2 z-10 container-full'>
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
            <div className='text-white text-xl'>
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
      <div className='h-24 transition-gradient-2'></div>
      <div className='container-full flex'>
        <div className='w-[370px]'>
          <img src='/bilui.webp' alt='guide box' />
        </div>
        <div className='text-xl text-white'>
          <p>
            <span className='mx-2'>BẠN LÀ NGƯỜI MỚI?</span>
            <span className='text-[#cc94e5]'>
              THAM GIA SERVER NGAY CHỈ VỚI 2 BƯỚC ĐƠN GIẢN
            </span>
          </p>
          <div className='steps'>
            <div className='step-box'>
              <div className='step-number'>1</div>
              <div className='step-content'>
                <h3 className='text-xl'>Tải game GTA 5</h3>
                <p>
                  Nếu bạn đã tải hoặc sở hữu game, vui lòng chuyển qua bước 2
                </p>
              </div>
            </div>
            <div className='arrow'></div>
            <div className='step-box'>
              <div className='step-number'>2</div>
              <div className='step-content'>
                <h3 className='text-xl'>Tải launcher GTA5VN</h3>
                <p>và trải nghiệm ngay thôi!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-full pt-24'>
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
    </div>
  );
}
