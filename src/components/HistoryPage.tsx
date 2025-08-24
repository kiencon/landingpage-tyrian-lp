'use client';
import { IHistory } from '@/type';
import { useState } from 'react';

const HistoryPage = ({ data }: { data: IHistory[] }) => {
  const [page, setPage] = useState(0);

  if (data.length === 0) {
    return (
      <h3 className='text-white py-12 text-lg'>
        Hiện bạn không có lịch sử giao dịch!
      </h3>
    );
  }
  return (
    <div className='container-full'>
      <h3 className='text-white my-8 text-lg font-bold'>Lịch sử nạp tiền</h3>
      <div className='mx-auto max-w-[600px] relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border'>
        <table className='w-full text-left table-auto min-w-max'>
          <thead>
            <tr>
              <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>
                <p className='block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70'>
                  ID
                </p>
              </th>
              <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>
                <p className='block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70'>
                  Số tiền
                </p>
              </th>
              <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>
                <p className='block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70'>
                  Ngày nạp
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, money, createdAt }) => (
              <tr key={id}>
                <td className='p-4 border-b border-blue-gray-50'>
                  <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                    {id}
                  </p>
                </td>
                <td className='p-4 border-b border-blue-gray-50'>
                  <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                    {money}
                  </p>
                </td>
                <td className='p-4 border-b border-blue-gray-50'>
                  <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                    {new Date(createdAt).toLocaleDateString()}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className='flex justify-around mt-12'>
        <button
          onClick={() => {
            if (page - 1 >= 0) {
              setPage(page - 1);
            }
          }}
          disabled={page === 0}
          className='cursor-pointer text-sm'
        >
          Pre
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
          disabled={data.length < 20}
          className='cursor-pointer text-sm'
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default HistoryPage;
