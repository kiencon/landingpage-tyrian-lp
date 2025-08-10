/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className='relative'>
      <div className='flex justify-around'>
        <div className='relative w-full flex'>
          <div className=''>
            <img
              className='img-neon-bw m-10 rounded-b-[50%]'
              src='/police-no-background.png'
              alt='police'
            />
          </div>
          <div className=''>
            <img
              className='img-neon-bw mirror-x rounded-b-[50%]'
              src='/robber-no-background.png'
              alt='robber'
            />
          </div>
        </div>
        <div className='relative w-full flex basis-content'>
          <div className=''>
            <img
              className='img-neon-bw rounded-b-[50%]'
              src='/thief-no-background.png'
              alt='thief'
            />
          </div>
          <div className=''>
            <img
              className='img-neon-bw m-10 rounded-b-[50%]'
              src='/doctor-no-background.png'
              alt='doctor'
            />
          </div>
        </div>
      </div>
      <div className='absolute top-[20%] left-[50%] translate-x-[-50%] pl-12'>
        <h3 className='text-[#cc94e5] hover:text-[#eabfec] text-2xl uppercase border border border-violet-800 p-2 rounded'>
          128 Người chơi online
        </h3>
        <h1 className={`font-tyrian text-white pl-12`}>
          Tyrian
          <br />
          RP
        </h1>
      </div>
    </div>
  );
}
