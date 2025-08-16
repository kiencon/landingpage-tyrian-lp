import type { Metadata } from 'next';
import '../globals.css';
import Providers from './Provider';

export const metadata: Metadata = {
  title: 'Tyrian Discord SSO',
  description: 'Login to Tyrian with discord using SSO',
};

const SSOLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Providers>{children}</Providers>;
};

export default SSOLayout;
