/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { isLoggedIn } from './helper';
import SignOut from './Signout';

const Header = async () => {
  const isAuth = await isLoggedIn();
  return (
    <header className='py-8'>
      <div className='container-full flex items-center justify-around'>
        <div className='w-[135px]'>
          <h1 className='text-4xl text-white drop-shadow-[0_0_8px_#ac67c6] cursor-pointer'>
            <Link href={'/'}>
              <img src='/logo.webp' alt='tyrian' width={90} />
            </Link>
          </h1>
        </div>
        <nav>
          <ul className='flex items-center'>
            <li>
              <Link
                className='hover:text-purple-400 text-white text-2xl text-tyrian-purple-300/90 uppercase cursor-pointer duration-300 font-semibold text-center py-1 px-6'
                href={'/'}
              >
                trang chủ
              </Link>
            </li>
            {isAuth ? (
              <li>
                <SignOut />
              </li>
            ) : (
              <li>
                <Link
                  className='hover:text-purple-400 text-white text-2xl text-tyrian-purple-300/90 uppercase cursor-pointer duration-300 font-semibold text-center py-1 px-6'
                  href={'/'}
                >
                  đăng nhập
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div className='w-[135px]'>
          <Link
            href='/coin'
            className='text-[#cc94e5] hover:text-[#eabfec] uppercase border btn-coin btn-prallel'
          >
            <span>Nạp coin</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
