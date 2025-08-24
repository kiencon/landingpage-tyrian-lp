import HistoryPage from '@/components/HistoryPage';
import { authOptions } from '@/lib/authOptions';
import { IHistory, ISession } from '@/type';
import { getServerSession } from 'next-auth';
import { findHistoryByDiscordId } from '../../lib/backend/coin';

export default async function Dashboard() {
  const session = (await getServerSession(authOptions)) as ISession;
  const discordId = session?.discordId || '';
  const data = (await findHistoryByDiscordId(
    discordId
  )) as unknown as IHistory[];

  return (
    <div className='text-3xl text-white text-center'>
      <HistoryPage data={data} />
    </div>
  );
}
