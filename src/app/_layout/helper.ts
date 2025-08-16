import { decode } from 'next-auth/jwt';
import { cookies } from 'next/headers';

export const isLoggedIn = async () => {
  const cookieStore = cookies();
  const token =
    (await cookieStore).get('next-auth.session-token')?.value ??
    (await cookieStore).get('__Secure-next-auth.session-token')?.value;

  if (!token) {
    return null;
  }

  // decode using the same NEXTAUTH_SECRET
  const payload = await decode({
    token,
    secret: process.env.NEXTAUTH_SECRET!,
  });

  return payload; // contains user info if valid
};
