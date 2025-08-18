'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

const Coin = () => {
  const router = useRouter();
  const [id, setID] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (amount <= 0 || id === '') {
      alert('Hãy nhập số tiền và citizen ID');
    }

    const res = await fetch('/api/love', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idCitizen: id,
        amount,
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      const { paymentURL } = data;
      router.push(paymentURL);
    } else {
      alert('Tạo link payment thất bại, hãy liên hệ admin để được giải quyết!');
    }
  };

  return (
    <div className='container-full w-[800px]'>
      <form onSubmit={handleSubmit} className='text-white'>
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
          Xác nhận mua coin
        </button>
      </form>
    </div>
  );
};

export default Coin;
