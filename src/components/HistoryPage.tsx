import { IHistory } from '@/type';

const HistoryPage = async ({ data }: { data: IHistory[] }) => {
  if (data.length === 0) {
    return (
      <h3 className='text-white py-12'>Hiện bạn không có lịch sử giao dịch!</h3>
    );
  }
  return (
    <>
      <h3 className='text-white my-8'>Lịch sử nạp tiền</h3>
      <table className='container-full w-[800px] text-xl'>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Số tiền</th>
            <th scope='col'>Ngày nạp</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, money, createdAt }) => (
            <tr key={id} className='m-4'>
              <th scope='row'>{id}</th>
              <td>{money}</td>
              <td>{new Date(createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default HistoryPage;
