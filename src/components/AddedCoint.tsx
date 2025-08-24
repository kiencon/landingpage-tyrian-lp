'use client';

import { FormEvent, useState } from 'react';

const AddedCoin = () => {
  const [id, setID] = useState<string>('');
  const [discordID, setDiscordID] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (amount <= 0 || id === '' || discordID === '') {
      alert('Hãy nhập số tiền, citizen ID, và discord ID');
    }

    const res = await fetch('/api/love', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idCitizen: id,
        amount,
        discordID,
      }),
    });

    if (res.status === 200) {
      alert('Nạp tiền thành công!');
      location.reload();
    } else {
      alert('Tạo link payment thất bại, hãy liên hệ admin để được giải quyết!');
    }
  };

  return (
    <div className='container-full w-[800px]'>
      <form
        onSubmit={handleSubmit}
        className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto'
      >
        <div className='mb-1 flex flex-col gap-6'>
          <div className='w-full max-w-sm min-w-[200px]'>
            <label
              htmlFor='DiscordID'
              className='block mb-2 text-sm text-white text-left'
            >
              Discord ID
            </label>
            <input
              type='text'
              className='w-full bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'
              id='DiscordID'
              onChange={(e) => setDiscordID(e.target.value)}
            />
          </div>
          <div className='w-full max-w-sm min-w-[200px]'>
            <label
              htmlFor='id'
              className='block mb-2 text-sm text-white text-left'
            >
              Mã số công dân
            </label>
            <input
              type='text'
              className='w-full bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'
              placeholder=''
              id='id'
              onChange={(e) => setID(e.target.value)}
            />
          </div>
          <div className='w-full max-w-sm min-w-[200px]'>
            <label
              htmlFor='amount'
              className='block mb-2 text-sm text-white text-left'
            >
              Số tiền
            </label>
            <input
              type='number'
              className='w-full bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'
              placeholder='Your Password'
              id='amount'
              onChange={(e) => setAmount(+e.target.value)}
            />
          </div>
        </div>
        <button className='cursor-pointer mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
          Xác nhận nạp tiền
        </button>
      </form>
    </div>
  );
};

export default AddedCoin;
