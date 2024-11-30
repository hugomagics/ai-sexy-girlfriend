import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/visit/candy-ai') {
    return NextResponse.redirect('https://your-affiliate-link-here.com');
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/visit/:path*',
};