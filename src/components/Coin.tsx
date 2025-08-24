import Link from 'next/link';

const Coin = () => {
  return (
    <div className='container-full w-[800px] p-4'>
      <p className='mt-6 text-lg'>
        Sử dụng mã QR để chuyển khoản nhanh qua momo, hoặc chuyển khoản qua ngân
        hàng ACB
      </p>
      <div className='flex justify-around'>
        <div className='p-6'>
          <div>
            <img width={400} src='/acb.svg' alt='ngan hang ACB' />
          </div>
          <h3 className='text-2xl'>Ngân hàng ACB</h3>
          <p className='text-xl'>Chủ tài khoản: Tran Kim Hung</p>
          <p className='text-xl'>Số tài khoản: 201326869</p>
        </div>
        <div className='p-6'>
          <img width={400} height={'auto'} src={'/momo.webp'} alt='momo' />
        </div>
      </div>
      <p className='mt-6 text-lg'>
        Sau khi chuyển tiền hãy tạo ticket qua discord để nhận coin!
      </p>
      <div className='mt-12 cursor-pointer hover:text-purple-400'>
        <Link href='/history'>Xem lịch sử nạp coin</Link>
      </div>
    </div>
  );
};

export default Coin;
