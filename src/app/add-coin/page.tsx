import AddedCoin from '@/components/AddedCoint';
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    // NextAuth middleware will redirect before rendering,
    // but this is a safe-check for server components.
    if (!session) {
      // preserve the target URL as callbackUrl
      redirect(`/login?callbackUrl=${encodeURIComponent('/coin')}`);
    }
  }
  return (
    <div className='text-3xl text-white text-center'>
      <AddedCoin />
    </div>
  );
}
