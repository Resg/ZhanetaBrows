import Google from '@auth/core/providers/google';
import Yandex from '@auth/core/providers/yandex';
import { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authConfig = {
  pages: {
    signIn: '/auth/signIn',
  },
  session: { strategy: 'jwt' },
  callbacks: {
    authorized({ auth, request }) {
      if (request.nextUrl.pathname === '/') {
        return true;
      }
      return Boolean(auth);
    },
    redirect({ baseUrl }) {
      return baseUrl;
    },
  },
  redirectProxyUrl: process.env.AUTH_URL + '/auth/signin',
  providers: [
    Yandex,
    Google,
    Credentials({
      authorize: async (credentials) => {
        console.log(credentials, 'ssss');
        return { email: '123', image: '123', name: '321', id: '111' };
      },
    }),
  ],
} satisfies NextAuthConfig;
