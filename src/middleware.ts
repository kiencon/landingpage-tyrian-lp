export { default } from 'next-auth/middleware';

// Protect these routes
export const config = {
  matcher: ['/dashboard/:path*'], // adjust as needed
};
