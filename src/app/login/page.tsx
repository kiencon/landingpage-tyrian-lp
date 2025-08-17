import { Suspense } from 'react';
import LoginClient from './Login';

export default function LoginPage() {
  return (
    <Suspense fallback={<p>Loading…</p>}>
      <LoginClient />
    </Suspense>
  );
}
