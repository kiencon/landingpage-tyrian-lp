'use client';

import { signOut } from 'next-auth/react';

const SignOut = () => (
  <button
    onClick={() => signOut()}
    className='hover:text-purple-400 text-white text-2xl text-tyrian-purple-300/90 uppercase cursor-pointer duration-300 font-semibold text-center py-1 px-6'
  >
    đăng xuất
  </button>
);

export default SignOut;
