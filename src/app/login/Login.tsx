'use client';

import { ISession } from '@/type';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const LoginPage = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') ?? '/';
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <p className='text-2xl uppercase text-white container-full'>Loading…</p>
    );
  }

  if (!session) {
    return (
      <div className='text-white container-full py-24 text-center'>
        <button
          onClick={() => signIn('discord', { callbackUrl })}
          className='text-2xl cursor-pointer hover:text-purple-400'
        >
          <span className='text-2xl p-4'>Welcome to Tyrian</span>
          <br />
          <span className='text-xl'>Sign in with Discord</span>
        </button>
      </div>
    );
  }

  const s = session as ISession;

  const avatarUrl = s.avatar
    ? `https://cdn.discordapp.com/avatars/${s.discordId}/${s.avatar}.png?size=128`
    : undefined;

  return (
    <main style={{ padding: 24 }}>
      <h1>Signed in</h1>
      <p>User: {s.username}</p>
      {avatarUrl && <img src={avatarUrl} alt='avatar' width={64} height={64} />}
      <button onClick={() => signOut()}>Sign out</button>
    </main>
  );
};

export default LoginPage;
