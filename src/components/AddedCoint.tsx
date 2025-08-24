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
      setAmount(0);
      setDiscordID('');
      setID('');
    } else {
      alert('Tạo link payment thất bại, hãy liên hệ admin để được giải quyết!');
    }
  };

  return (
    <div className='container-full w-[800px]'>
      <form onSubmit={handleSubmit} className='text-white'>
        <div className='mb-6'>
          <label htmlFor='DiscordID' className='text-xl text-left block my-4'>
            Discord ID
          </label>
          <input
            className='border p-2 block w-full text-sm'
            id='DiscordID'
            onChange={(e) => setDiscordID(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='id' className='text-xl text-left block my-4'>
            Mã số công dân
          </label>
          <input
            className='border p-2 block w-full text-sm'
            id='id'
            onChange={(e) => setID(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='amount' className='text-xl text-left block my-4'>
            Số tiền
          </label>
          <input
            type='number'
            className='border p-2 block w-full text-sm'
            id='amount'
            onChange={(e) => setAmount(+e.target.value)}
          />
        </div>
        <button className='border mt-12 p-4 rounded cursor-pointer hover:text-purple-400'>
          Xác nhận nạp tiền
        </button>
      </form>
    </div>
  );
};

export default AddedCoin;
