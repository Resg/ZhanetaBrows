import { NextRequest, NextResponse } from 'next/server';
import NextAuth from 'next-auth';

import { authConfig } from '../auth.config';

const { auth } = NextAuth(authConfig);

export default auth(async function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set('x-current-path', request.nextUrl.pathname);
  return NextResponse.next({ headers });
});

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|providers|icons).*)',
  ],
};
