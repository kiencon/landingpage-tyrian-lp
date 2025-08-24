import Link from 'next/link';

const Coin = () => {
  return (
    <div className='container-full w-[800px]'>
      <div className='flex justify-center'>
        <img width={400} height={'auto'} src={'/momo.webp'} alt='momo' />
      </div>
      <p className='mt-6 text-xl'>
        Sau khi chuyển tiền hãy liên hệ admin qua discord để nhận coin!
      </p>
      <div className='mt-12 cursor-pointer hover:text-purple-400'>
        <Link href='/history'>Xem lịch sử nạp coin</Link>
      </div>
    </div>
  );
};

export default Coin;
