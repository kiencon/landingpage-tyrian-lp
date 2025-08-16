import Link from 'next/link';

const navItem = [
  {
    title: 'trang chủ',
    link: '/',
  },
  {
    title: 'luật lệ',
    link: '/',
  },
  {
    title: 'đăng ký',
    link: '/',
  },
];

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container-full flex items-center justify-around'>
        <div className='w-[135px]'>
          <h1 className='text-4xl text-white drop-shadow-[0_0_8px_#ac67c6] cursor-pointer'>
            <img src='/logo.webp' alt='tyrian' width={90} />
          </h1>
        </div>
        <nav>
          <ul className='flex'>
            {navItem.map(({ title, link }) => (
              <li key={title}>
                <Link
                  className='hover:text-purple-400 text-white text-2xl text-tyrian-purple-300/90 uppercase cursor-pointer duration-300 font-semibold text-center py-1 px-6'
                  href={link}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='w-[135px]'>
          <Link
            href={'#'}
            className='text-[#cc94e5] hover:text-[#eabfec] text-2xl uppercase border border border-violet-800 p-2 rounded'
          >
            Nạp coin
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
