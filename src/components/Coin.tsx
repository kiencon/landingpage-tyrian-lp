import Link from 'next/link';

const Coin = () => {
  return (
    <div className='container-full w-[850px] p-4'>
      <p className='my-6 text-lg'>
        Sử dụng <strong className='text-purple-400'>mã QR</strong> để chuyển
        khoản nhanh qua <strong className='text-purple-400'>Momo</strong>, hoặc{' '}
        <strong className='text-purple-400'>chuyển khoản</strong> qua{' '}
        <strong className='text-purple-400'>ngân hàng ACB</strong>
      </p>
      <div className='flex p-4 justify-around flex-column bg-white text-black shadow-sm border border-slate-200 rounded'>
        <div className='flex flex-col justify-center'>
          <h3 className='text-lg my-6'>
            <strong>Ngân hàng ACB</strong>
          </h3>
          <div className='my-12'>
            <img
              className='mx-auto'
              width={200}
              src='/acb.svg'
              alt='ngan hang ACB'
            />
          </div>
          <p className='text-lg'>
            Chủ tài khoản:{' '}
            <strong className='text-purple-400'>Tran Kim Hung</strong>
          </p>
          <p className='text-lg'>
            Số tài khoản: <strong className='text-purple-400'>201326869</strong>
          </p>
        </div>
        <div className='w-[1px] py-12 bg-black'></div>
        <div className=''>
          <h3 className='text-lg my-6'>
            <strong>Ứng dụng Momo</strong>
          </h3>
          <div className='my-6'>
            <div className='flex items-center'>
              <img className='w-12 mr-2' src='/momo-logo.svg' alt='logo momo' />
              <strong className='text-lg text-purple-400'>Tran Kim Hung</strong>
            </div>
          </div>
          <div className='w-[200px]'>
            <img width={200} height={'auto'} src={'/momo1.png'} alt='momo' />
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg'>
        <strong>
          Sau khi chuyển tiền hãy tạo ticket qua discord để nhận coin!
        </strong>
      </p>
      <div className='mt-12 cursor-pointer hover:text-purple-400'>
        <Link
          className='text-[#cc94e5] hover:text-[#eabfec] uppercase border btn-coin btn-prallel'
          href='/history'
        >
          <strong>Xem lịch sử nạp coin</strong>
        </Link>
      </div>
    </div>
  );
};

export default Coin;
