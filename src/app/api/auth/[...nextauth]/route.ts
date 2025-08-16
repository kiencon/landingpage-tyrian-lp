import NextAuth, { NextAuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

interface IAuth {
  username: string;
  avatar: string;
}

interface IProfile extends IAuth {
  id: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      // Ask for basic identity + email (optional but common)
      authorization: { params: { scope: 'identify email' } },
    }),
  ],
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/login', // your custom login page
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allow callbackUrl (relative) to pass through
      if (url.startsWith('/')) {
        return `${baseUrl}${url}`;
      }
      // Allow same-origin absolute URLs
      if (url.startsWith(baseUrl)) return url;
      // Otherwise, fallback to home (prevents open redirects)
      return baseUrl;
    },
    async jwt({ token, account, profile }) {
      // First time login
      if (account && profile) {
        token.discordId = (profile as IProfile).id;
        token.username = (profile as IProfile).username;
        token.avatar = (profile as IProfile).avatar;
      }
      return token;
    },
    async session({ session, token }) {
      // Expose Discord data on the client session
      (session as any).discordId = token.discordId;
      (session as any).username = token.username;
      (session as any).avatar = token.avatar;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
